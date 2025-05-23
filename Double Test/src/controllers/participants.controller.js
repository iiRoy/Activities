const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Crear participante
const createParticipant = async (req, res) => {
  try {
    const newParticipant = await prisma.participants.create({ data: req.body });
    res.status(201).json(newParticipant);
  } catch (error) {
    console.error('Error creating participant:', error);
    res.status(500).json({ message: 'Error al crear participante' });
  }
};

// Obtener todos los participantes
const getAllParticipants = async (req, res) => {
  try {
    const participants = await prisma.participants.findMany();
    res.json(participants);
  } catch (error) {
    console.error('Error fetching participants:', error);
    res.status(500).json({ message: 'Error al obtener participantes' });
  }
};

// Obtener participante por ID
const getParticipantById = async (req, res) => {
  const { id } = req.params;
  try {
    const participant = await prisma.participants.findUnique({
      where: { id_participant: parseInt(id) },
    });
    if (!participant) return res.status(404).json({ message: 'Participante no encontrado' });
    res.json(participant);
  } catch (error) {
    console.error('Error fetching participant by ID:', error);
    res.status(500).json({ message: 'Error al obtener participante' });
  }
};

// Actualizar participante (general)
const updateParticipant = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedParticipant = await prisma.participants.update({
      where: { id_participant: parseInt(id) },
      data: req.body,
    });
    res.json(updatedParticipant);
  } catch (error) {
    console.error('Error updating participant:', error);
    res.status(500).json({ message: 'Error al actualizar participante' });
  }
};

// Eliminar participante
const deleteParticipant = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.participants.delete({ where: { id_participant: parseInt(id) } });
    res.json({ message: 'Participante eliminado' });
  } catch (error) {
    console.error('Error deleting participant:', error);
    res.status(500).json({ message: 'Error al eliminar participante' });
  }
};

// Tabla personalizada de participantes
const getParticipantsTable = async (req, res) => {
  try {
    const participants = await prisma.participants.findMany({
      select: {
        id_participant: true,
        name: true,
        paternal_name: true,
        maternal_name: true,
        email: true,
        groups: {
          select: {
            name: true,
            venues: {
              select: { name: true },
            },
          },
        },
        tutors: {
          select: { phone_number: true },
        },
      },
    });

    const formatted = participants.map((p) => ({
      id: p.id_participant,
      nombre: `${p.name || ''} ${p.paternal_name || ''} ${p.maternal_name || ''}`.trim(),
      sede: p.groups?.venues?.name || 'No asignado',
      grupo: p.groups?.name || 'No asignado',
      correo: p.email,
      telefono: p.tutors?.phone_number || 'No asignado',
    }));

    res.json(formatted);
  } catch (error) {
    console.error('Error getting participants table:', error);
    res.status(500).json({ message: 'Error al obtener tabla de participantes' });
  }
};

// Actualizar datos básicos
const updateParticipantBasicInfo = async (req, res) => {
  const { id } = req.params;
  const { name, paternal_name, maternal_name, email, id_group } = req.body;
  try {
    const tutor = await prisma.tutors.findFirst({
      where: { participants: { some: { id_participant: parseInt(id) } } },
    });

    const updatedParticipant = await prisma.participants.update({
      where: { id_participant: parseInt(id) },
      data: { name, paternal_name, maternal_name, email, id_group },
    });

    if (tutor && req.body.phone_number) {
      await prisma.tutors.update({
        where: { id_tutor: tutor.id_tutor },
        data: { phone_number: req.body.phone_number },
      });
    }

    res.json(updatedParticipant);
  } catch (error) {
    console.error('Error updating basic participant info:', error);
    res.status(500).json({ message: 'Error al actualizar datos básicos del participante' });
  }
};

module.exports = {
  createParticipant,
  getAllParticipants,
  getParticipantById,
  updateParticipant,
  deleteParticipant,
  getParticipantsTable,
  updateParticipantBasicInfo,
};
