const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//obtener todas las mentoras
const getAll = async (req, res) => {
  try {
    const mentors = await prisma.mentors.findMany({
      include: {
        venues: true,
        groups: true,
      },
    });
    res.json(mentors);
  } catch (error) {
    console.error('Error fetching mentors:', error);
    res.status(500).json({ message: 'Error al obtener mentoras' });
  }
};

//obtener los datos para mostrar en la tabla de gestión de mentoras de superusuario
const getSpecific = async (req, res) => {
  const { id } = req.params;
  try {
    const mentor = await prisma.mentors.findUnique({
      where: { id_mentor: parseInt(id) },
      include: {
        venues: true,
        groups: true,
      },
    });

    if (!mentor) {
      return res.status(404).json({ message: 'Mentora no encontrada' });
    }

    res.json({
      id: mentor.id_mentor,
      name: mentor.name,
      venue: mentor.venues.name,
      number_of_groups: mentor.groups.length,
      email: mentor.email,
      phone_number: mentor.phone_number,
    });
  } catch (error) {
    console.error('Error fetching mentor:', error);
    res.status(500).json({ message: 'Error al obtener la mentora' });
  }
};

//crear una nueva mentora
const create = async (req, res) => {
  const { name, paternal_name, maternal_name, email, phone_number, id_venue } = req.body;
  try {
    const newMentor = await prisma.mentors.create({
      data: {
        name,
        paternal_name,
        maternal_name,
        email,
        phone_number,
        id_venue,
      },
    });
    res.json({ message: 'Mentora creada', data: newMentor });
  } catch (error) {
    console.error('Error creating mentor:', error);
    res.status(500).json({ message: 'Error al crear la mentora' });
  }
};

//actualizar todos los datos de mentora
const update = async (req, res) => {
  const { id } = req.params;
  const { name, paternal_name, maternal_name, email, phone_number, id_venue } = req.body;
  try {
    const updatedMentor = await prisma.mentors.update({
      where: { id_mentor: parseInt(id) },
      data: {
        name,
        paternal_name,
        maternal_name,
        email,
        phone_number,
        id_venue,
      },
    });
    res.json({ message: 'Mentora actualizada', data: updatedMentor });
  } catch (error) {
    console.error('Error updating mentor:', error);
    res.status(500).json({ message: 'Error al actualizar la mentora' });
  }
};

//tabla de actualizar mentora (por superuser)
const updateBasicData = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone_number, id_venue } = req.body;

  if (!name || !email || !phone_number || !id_venue) {
    return res.status(400).json({ message: 'Faltan campos requeridos para actualizar' });
  }

  try {
    const updatedMentor = await prisma.mentors.update({
      where: { id_mentor: parseInt(id) },
      data: {
        name,
        email,
        phone_number,
        id_venue,
      },
    });
    res.json({ message: 'Mentora actualizada (datos básicos)', data: updatedMentor });
  } catch (error) {
    console.error('Error updating mentor basic data:', error);
    res.status(500).json({ message: 'Error al actualizar datos básicos de la mentora' });
  }
};

//eliminar una mentora por ID
const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.mentors.delete({
      where: { id_mentor: parseInt(id) },
    });
    res.json({ message: 'Mentora eliminada' });
  } catch (error) {
    console.error('Error deleting mentor:', error);
    res.status(500).json({ message: 'Error al eliminar la mentora' });
  }
};

const getGroupMentor = async (req, res) => {
  const { id_mentor } = req.params;

  if (isNaN(parseInt(id_mentor))) {
    return res.status(400).json({ message: 'ID de mentora inválido' });
  }

  try {
    const groups = await prisma.groups.findMany({
      where: {
        id_mentor: parseInt(id_mentor),
      },
    });
    res.json(groups);
  } catch (error) {
    console.error('Error fetching mentors:', error);
    res.status(500).json({ message: 'Error al obtener grupos de la mentora' });
  }
};

const removeMentorFromGroup = async (req, res) => {
  const { id_group } = req.params;

  if (isNaN(parseInt(id_group))) {
    return res.status(400).json({ message: 'ID de grupo inválido' });
  }

  try {
    const updatedGroup = await prisma.groups.update({
      where: {
        id_group: parseInt(id_group),
      },
      data: {
        id_mentor: null,
      },
    });

    res.json({ message: 'Mentora removida del grupo correctamente', updatedGroup });
  } catch (error) {
    console.error('Error removing mentor from group:', error);
    res.status(500).json({ message: 'Error al remover mentora del grupo' });
  }
};

module.exports = {
  getAll,
  getSpecific,
  create,
  update,
  updateBasicData,
  remove,
  getGroupMentor,
  removeMentorFromGroup,
};
