const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const { PrismaClient } = require('@prisma/client');
const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

const generateDiplomas = async (req, res) => {
  const { users } = req.body;

  try {
    const zipPath = path.join(__dirname, '../../public/diplomas/diplomas.zip');
    const output = fs.createWriteStream(zipPath);
    const archive = archiver('zip');

    archive.pipe(output);

    for (const user of users) {
      const { name, paternal_name, campus, role, start_date } = user;
      const fileName = `${name} ${paternal_name}.pdf`;
      const templatePath = path.join(__dirname, `../../public/diplomas/${role}.pdf`);

      if (!fs.existsSync(templatePath)) continue;

      const existingPdf = await fs.promises.readFile(templatePath);
      const pdfDoc = await PDFDocument.load(existingPdf);
      const page = pdfDoc.getPages()[0];
      const { width } = page.getSize();
      const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      const color = rgb(0.345, 0.345, 0.345);

      const nombreCompleto = `${name} ${paternal_name}`;
      const textWidth = font.widthOfTextAtSize(nombreCompleto, 60);
      page.drawText(nombreCompleto, {
        x: (width - textWidth) / 2 - 30,
        y: 295,
        size: 60,
        font,
        color: rgb(0.635, 0.416, 0.678),
      });

      if (campus) {
        const campusWidth = font.widthOfTextAtSize(campus, 13);
        page.drawText(campus, {
          x: (width - campusWidth) / 2 - 158,
          y: 222,
          size: 13,
          font,
          color,
        });
      }

      if (start_date) {
        const dateWidth = font.widthOfTextAtSize(start_date, 13);
        page.drawText(start_date, {
          x: (width - dateWidth) / 2 - 234,
          y: 205,
          size: 13,
          font,
          color,
        });
      }

      const pdfBytes = await pdfDoc.save();
      const fullPath = path.join(campus || 'sin_sede', role || 'sin_rol', fileName);
      archive.append(Buffer.from(pdfBytes), { name: fullPath });
    }

    output.on('close', () => {
      res.download(zipPath, 'diplomas.zip', () => {
        fs.unlink(zipPath, () => {});
      });
    });

    archive.on('error', (err) => {
      throw err;
    });

    await archive.finalize();
  } catch (error) {
    console.error('Error generando diplomas:', error);
    res.status(500).json({ error: 'Error al generar diplomas.' });
  }
};

const getDiplomaFilters = async (req, res) => {
  const { user_id = '', user_role = '' } = req.query;

  try {
    let sedes = [];
    let roles = [];

    if (user_role === 'superuser') {
      const todas = await prisma.venues.findMany({ select: { name: true } });
      sedes = todas.map((v) => v.name);
      roles = [
        'participante',
        'staff',
        'facilitadora',
        'instructora',
        'mentora',
        'coordinadora asociada',
        'coordinadora de sede',
        'coordinadora de informes',
      ];
    } else if (user_role === 'venue-coordinator') {
      const propias = await prisma.venues.findMany({
        where: { venue_coordinators: { some: { id_venue_coord: parseInt(user_id) } } },
        select: { name: true },
      });
      sedes = propias.map((v) => v.name);
      roles = ['participante', 'staff', 'facilitadora', 'instructora', 'mentora'];
    }

    res.json({ sedes, roles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al cargar filtros.' });
  }
};

const getDiplomaUsers = async (req, res) => {
  const { search = '', sede = '', role = '', user_id = '', user_role = '' } = req.query;
  const hoy = new Date();
  const usuarios = [];

  const texto = () => ({
    OR: [
      { name: { contains: search } },
      { paternal_name: { contains: search } },
      { maternal_name: { contains: search } },
    ],
  });

  try {
    // PARTICIPANTES
    if (
      (role === '' || role === 'participante') &&
      ['superuser', 'venue-coordinator'].includes(user_role)
    ) {
      const participantes = await prisma.participants.findMany({
        where: {
          ...texto(),
          status: { not: 'Pendiente' },
          groups: {
            is: {
              start_date: { lte: hoy },
              venues: sede ? { name: sede } : {},
            },
          },
          ...(user_role === 'venue-coordinator' && {
            groups: {
              venues: {
                venue_coordinators: {
                  some: { id_venue_coord: parseInt(user_id) },
                },
              },
            },
          }),
        },
        include: { groups: { include: { venues: true } } },
      });

      participantes.forEach((p) =>
        usuarios.push({
          id: p.id_participant,
          name: p.name,
          paternal_name: p.paternal_name,
          campus: p.groups?.venues?.name || '',
          role: 'participante',
          start_date: p.groups?.start_date?.toISOString().split('T')[0] || '',
        }),
      );
    }

    // MENTORAS
    if (
      (role === '' || role === 'mentora') &&
      ['superuser', 'venue-coordinator'].includes(user_role)
    ) {
      const mentoras = await prisma.mentors.findMany({
        where: {
          ...texto(),
          venues: sede ? { name: sede } : {},
          ...(user_role === 'venue-coordinator' && {
            venues: {
              venue_coordinators: {
                some: { id_venue_coord: parseInt(user_id) },
              },
            },
          }),
        },
        include: { venues: true },
      });

      mentoras.forEach((m) =>
        usuarios.push({
          id: m.id_mentor,
          name: m.name,
          paternal_name: m.paternal_name,
          campus: m.venues?.name || '',
          role: 'mentora',
          start_date: '',
        }),
      );
    }

    // COLABORADORAS
    if (
      (role === '' || ['staff', 'facilitadora', 'instructora'].includes(role)) &&
      ['superuser', 'venue-coordinator'].includes(user_role)
    ) {
      const colaboradoras = await prisma.collaborators.findMany({
        where: {
          ...texto(),
          status: { not: 'Pendiente' },
          ...(role ? { preferred_role: role.charAt(0).toUpperCase() + role.slice(1) } : {}),
          groups: {
            start_date: { lte: hoy },
            venues: sede ? { name: sede } : {},
            ...(user_role === 'venue-coordinator' && {
              venue_coordinators: {
                some: { id_venue_coord: parseInt(user_id) },
              },
            }),
          },
        },
        include: { groups: { include: { venues: true } } },
      });

      colaboradoras.forEach((c) =>
        usuarios.push({
          id: c.id_collaborator,
          name: c.name,
          paternal_name: c.paternal_name,
          campus: c.groups?.venues?.name || '',
          role: (c.preferred_role || '').toLowerCase(),
          start_date: c.groups?.start_date?.toISOString().split('T')[0] || '',
        }),
      );
    }

    // COORDINADORAS ASOCIADAS
    if ((role === '' || role === 'coordinadora asociada') && user_role === 'superuser') {
      const asociadas = await prisma.assistant_coordinators.findMany({
        where: {
          ...texto(),
          venues: sede ? { name: sede } : {},
        },
        include: { venues: true },
      });

      asociadas.forEach((a) =>
        usuarios.push({
          id: a.id_assistant_coord,
          name: a.name,
          paternal_name: a.paternal_name,
          campus: a.venues?.name || '',
          role: 'coordinadora asociada',
          start_date: '',
        }),
      );
    }

    // COORDINADORAS DE SEDE
    if ((role === '' || role === 'coordinadora de sede') && user_role === 'superuser') {
      const sedes = await prisma.venue_coordinators.findMany({
        where: {
          ...texto(),
          venues: sede ? { name: sede } : {},
        },
        include: { venues: true },
      });

      sedes.forEach((vc) =>
        usuarios.push({
          id: vc.id_venue_coord,
          name: vc.name,
          paternal_name: vc.paternal_name,
          campus: vc.venues?.name || '',
          role: 'coordinadora de sede',
          start_date: '',
        }),
      );
    }

    // COORDINADORAS DE INFORMES
    if ((role === '' || role === 'coordinadora de informes') && user_role === 'superuser') {
      const informes = await prisma.assistant_coordinators.findMany({
        where: {
          ...texto(),
          role: 'Coordinadora_de_informes',
          venues: sede ? { name: sede } : {},
        },
        include: { venues: true },
      });

      informes.forEach((c) =>
        usuarios.push({
          id: c.id_assistant_coord,
          name: c.name,
          paternal_name: c.paternal_name,
          campus: c.venues?.name || '',
          role: 'coordinadora de informes',
          start_date: '',
        }),
      );
    }

    res.json(usuarios);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener usuarios para diplomas.' });
  }
};

module.exports = {
  generateDiplomas,
  getDiplomaFilters,
  getDiplomaUsers,
};
