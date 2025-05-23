const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { execSync } = require('child_process');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const prisma = new PrismaClient();

// 🔧 Convierte "Con espacios" a "Con_espacios"
function fixEnum(value: string): string {
  return value.replace(/ /g, '_');
}

// 🕒 Convierte "09:00:00" a Date con hora
function parseTimeToDate(baseDate: Date, timeStr: string): Date {
  const [hours, minutes, seconds] = timeStr.split(':').map(Number);
  const date = new Date(baseDate);
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(seconds || 0);
  return date;
}

async function main() {
  console.log('🧨 Borrando registros previos...');
  // Delete records in reverse order to avoid foreign key constraints
  await prisma.participants.deleteMany();
  await prisma.collaborators.deleteMany();
  await prisma.tutors.deleteMany();
  await prisma.groups.deleteMany();
  await prisma.excluded_days.deleteMany();
  await prisma.mentors.deleteMany();
  await prisma.assistant_coordinators.deleteMany();
  await prisma.venue_coordinators.deleteMany();
  await prisma.venues.deleteMany();
  await prisma.superusers.deleteMany();

  // Resprisma auto-increment counters for all tables
  console.log('🔄 Reseteando contadores de auto-incremento...');
  await prisma.$executeRaw`ALTER TABLE participants AUTO_INCREMENT = 1`;
  await prisma.$executeRaw`ALTER TABLE collaborators AUTO_INCREMENT = 1`;
  await prisma.$executeRaw`ALTER TABLE tutors AUTO_INCREMENT = 1`;
  await prisma.$executeRaw`ALTER TABLE groups AUTO_INCREMENT = 1`;
  await prisma.$executeRaw`ALTER TABLE excluded_days AUTO_INCREMENT = 1`;
  await prisma.$executeRaw`ALTER TABLE mentors AUTO_INCREMENT = 1`;
  await prisma.$executeRaw`ALTER TABLE assistant_coordinators AUTO_INCREMENT = 1`;
  await prisma.$executeRaw`ALTER TABLE venue_coordinators AUTO_INCREMENT = 1`;
  await prisma.$executeRaw`ALTER TABLE venues AUTO_INCREMENT = 1`;
  await prisma.$executeRaw`ALTER TABLE superusers AUTO_INCREMENT = 1`;

  console.log('🌱 Insertando datos...');

  // 1. SUPERUSERS
  console.log('📌 Insertando superusers...');
  const superusers = JSON.parse(fs.readFileSync('./prisma/seed/superuser.json', 'utf-8'));
  for (const s of superusers) {
    const hashedPassword = await bcrypt.hash(s.password, 10);
    await prisma.superusers.create({
      data: {
        ...s,
        password: hashedPassword,
      },
    });
  }

  // 2. VENUES
  console.log('📌 Insertando venues...');
  const venues = JSON.parse(fs.readFileSync('./prisma/seed/venues.json', 'utf-8'));
  const venueIds: number[] = [];
  for (const venue of venues) {
    const createdVenue = await prisma.venues.create({
      data: {
        ...venue,
        status: fixEnum(venue.status),
        participation_file: Buffer.from('ArchivoPDF'),
      },
    });
    venueIds.push(createdVenue.id_venue);
  }
  console.log('✅ Venues insertados con IDs:', venueIds);

  // 3. VENUE COORDINATORS
  console.log('📌 Insertando venue coordinators...');
  const coordinators = JSON.parse(
    fs.readFileSync('./prisma/seed/venue_coordinators.json', 'utf-8'),
  );
  for (const coordinator of coordinators) {
    const expectedVenueId = coordinator.id_venue;
    if (!venueIds.includes(expectedVenueId)) {
      console.error(
        `⚠️ Venue con id_venue ${expectedVenueId} no existe. Saltando coordinator: ${coordinator.name}`,
      );
      continue;
    }
    const hashedPassword = await bcrypt.hash(coordinator.password, 10);
    await prisma.venue_coordinators.create({
      data: {
        ...coordinator,
        password: hashedPassword,
      },
    });
  }

  // 4. ASSISTANT COORDINATORS
  console.log('📌 Insertando assistant coordinators...');
  const assistants = JSON.parse(
    fs.readFileSync('./prisma/seed/assistant_coordinators.json', 'utf-8'),
  );
  for (const a of assistants) {
    const expectedVenueId = a.id_venue;
    if (!venueIds.includes(expectedVenueId)) {
      console.error(
        `⚠️ Venue con id_venue ${expectedVenueId} no existe. Saltando assistant coordinator: ${a.name}`,
      );
      continue;
    }
    await prisma.assistant_coordinators.create({
      data: {
        ...a,
        role: fixEnum(a.role),
      },
    });
  }

  // 5. MENTORS
  console.log('📌 Insertando mentors...');
  const mentors = JSON.parse(fs.readFileSync('./prisma/seed/mentors.json', 'utf-8'));
  for (const m of mentors) {
    const expectedVenueId = m.id_venue;
    if (!venueIds.includes(expectedVenueId)) {
      console.error(
        `⚠️ Venue con id_venue ${expectedVenueId} no existe. Saltando mentor: ${m.name}`,
      );
      continue;
    }
    await prisma.mentors.create({ data: m });
  }

  // 6. GROUPS
  console.log('📌 Insertando groups...');
  const groups = JSON.parse(fs.readFileSync('./prisma/seed/groups.json', 'utf-8'));
  for (const g of groups) {
    const expectedVenueId = g.id_venue;
    if (!venueIds.includes(expectedVenueId)) {
      console.error(
        `⚠️ Venue con id_venue ${expectedVenueId} no existe. Saltando grupo: ${g.name}`,
      );
      continue;
    }
    const baseDate = new Date(g.start_date);
    await prisma.groups.create({
      data: {
        ...g,
        start_date: baseDate,
        end_date: new Date(g.end_date),
        start_hour: parseTimeToDate(baseDate, g.start_hour),
        end_hour: parseTimeToDate(baseDate, g.end_hour),
      },
    });
  }

  // 7. EXCLUDED DATES
  console.log('📌 Insertando excluded dates...');
  const excluded = JSON.parse(fs.readFileSync('./prisma/seed/excluded_date.json', 'utf-8'));
  for (const e of excluded) {
    await prisma.excluded_days.create({
      data: {
        ...e,
        excluded_date: new Date(e.excluded_date),
      },
    });
  }

  // 8. TUTORS
  console.log('📌 Insertando tutors...');
  const tutors = JSON.parse(fs.readFileSync('./prisma/seed/tutors.json', 'utf-8'));
  for (const t of tutors) {
    await prisma.tutors.create({ data: t });
  }

  // 9. PARTICIPANTS
  console.log('📌 Insertando participants...');
  const participants = JSON.parse(fs.readFileSync('./prisma/seed/participants.json', 'utf-8'));
  for (const p of participants) {
    const expectedGroupId = p.preferred_group;
    // Check if id_group is defined and a valid number
    if (
      expectedGroupId === undefined ||
      expectedGroupId === null ||
      typeof expectedGroupId !== 'number'
    ) {
      console.error(
        `⚠️ id_group inválido (${expectedGroupId}) para participant: ${p.name}. Saltando...`,
      );
      continue;
    }
    const groupExists = await prisma.groups.findUnique({ where: { id_group: expectedGroupId } });
    if (!groupExists) {
      console.error(
        `⚠️ Group con id_group ${expectedGroupId} no existe. Saltando participant: ${p.name}`,
      );
      continue;
    }
    await prisma.participants.create({
      data: {
        ...p,
        participation_file: Buffer.from('ArchivoPDF'),
      },
    });
  }

  // 10. COLLABORATORS
  console.log('📌 Insertando collaborators...');
  const collaborators = JSON.parse(fs.readFileSync('./prisma/seed/collaborators.json', 'utf-8'));
  for (const c of collaborators) {
    const expectedGroupId = c.preferred_group;
    // Check if id_group is defined and a valid number
    if (
      expectedGroupId === undefined ||
      expectedGroupId === null ||
      typeof expectedGroupId !== 'number'
    ) {
      console.error(
        `⚠️ id_group inválido (${expectedGroupId}) para collaborator: ${c.name}. Saltando...`,
      );
      continue;
    }
    const groupExists = await prisma.groups.findUnique({ where: { id_group: expectedGroupId } });
    if (!groupExists) {
      console.error(
        `⚠️ Group con id_group ${expectedGroupId} no existe. Saltando collaborator: ${c.name}`,
      );
      continue;
    }
    await prisma.collaborators.create({ data: c });
  }
}

// Apply after-migrate.sql (functions, procedures, triggers)
const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
  throw new Error('DATABASE_URL no definida en .env');
}

console.log('🔍 DATABASE_URL:', dbUrl);

// Parse DATABASE_URL to extract credentials
const regex = /^mysql:\/\/([^:@]+)(?::([^@]*))?@([^:\/]+):(\d+)\/([^?]+)/;
const match = dbUrl.match(regex);
if (!match) {
  throw new Error('DATABASE_URL no es válida');
}

const [, user, pass, host, port, db] = match;
const sqlFile = path.join(__dirname, 'after-migrate.sql');

// Construct the MySQL command with proper credentials
const mysqlCommand = pass
  ? `mysql -u ${user} -p${pass} -h ${host} -P ${port} -D ${db} < "${sqlFile}"`
  : `mysql -u ${user} -h ${host} -P ${port} -D ${db} < "${sqlFile}"`;

console.log('📜 Ejecutando after-migrate.sql...');
execSync(mysqlCommand, { stdio: 'inherit' });
console.log('✅ ¡Funciones, procedimientos y triggers insertados exitosamente!');

main()
  .catch((e) => {
    console.error('❌ Error en seed:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
