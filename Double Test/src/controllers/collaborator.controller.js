const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// Crear una nueva colaboradora
const createCollaborator = async (req, res) => {
  const {
    name,
    paternal_name,
    maternal_name,
    email,
    phone_number,
    college,
    degree,
    semester,
    preferred_role,
    preferred_language,
    preferred_level,
    preferred_group,
    gender,
    role,
    status,
    level,
    language,
    id_group,
  } = req.body;

  try {
    const newCollaborator = await prisma.collaborators.create({
      data: {
        name,
        paternal_name,
        maternal_name,
        email,
        phone_number,
        college,
        degree,
        semester,
        preferred_role,
        preferred_language,
        preferred_level,
        preferred_group,
        gender,
        role,
        status,
        level,
        language,
        id_group,
      },
    });

    res.status(201).json(newCollaborator);
  } catch (error) {
    console.error('Error creating collaborator:', error);
    res.status(500).json({ message: 'Error al crear colaboradora' });
  }
};

// Obtener todas las colaboradoras
const getAllCollaborators = async (req, res) => {
  try {
    const collaborators = await prisma.collaborators.findMany();
    res.json(collaborators);
  } catch (error) {
    console.error('Error fetching collaborators:', error);
    res.status(500).json({ message: 'Error al obtener colaboradoras' });
  }
};

// Obtener una colaboradora por ID
const getCollaboratorById = async (req, res) => {
  const { id } = req.params;

  if (isNaN(parseInt(id))) {
    return res.status(400).json({ message: 'ID de colaboradora inválido' });
  }

  try {
    const collaborator = await prisma.collaborators.findUnique({
      where: { id_collaborator: parseInt(id) },
    });

    if (!collaborator) {
      return res.status(404).json({ message: 'Colaboradora no encontrada' });
    }

    res.json(collaborator);
  } catch (error) {
    console.error('Error fetching collaborator:', error);
    res.status(500).json({ message: 'Error al obtener colaboradora' });
  }
};

// Actualizar una colaboradora completa
const updateCollaborator = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  if (isNaN(parseInt(id))) {
    return res.status(400).json({ message: 'ID de colaboradora inválido' });
  }

  try {
    const updatedCollaborator = await prisma.collaborators.update({
      where: { id_collaborator: parseInt(id) },
      data,
    });

    res.json(updatedCollaborator);
  } catch (error) {
    console.error('Error updating collaborator:', error);
    res.status(500).json({ message: 'Error al actualizar colaboradora' });
  }
};

// Eliminar una colaboradora
const deleteCollaborator = async (req, res) => {
  const { id } = req.params;

  if (isNaN(parseInt(id))) {
    return res.status(400).json({ message: 'ID de colaboradora inválido' });
  }

  try {
    await prisma.collaborators.delete({
      where: { id_collaborator: parseInt(id) },
    });

    res.json({ message: 'Colaboradora eliminada correctamente' });
  } catch (error) {
    console.error('Error deleting collaborator:', error);
    res.status(500).json({ message: 'Error al eliminar colaboradora' });
  }
};

// Obtener datos específicos para tabla
const getCollaboratorsTable = async (req, res) => {
  try {
    const collaborators = await prisma.collaborators.findMany({
      select: {
        id_collaborator: true,
        name: true,
        email: true,
        phone_number: true,
        groups: {
          select: {
            id_group: true,
            venues: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    const formatted = collaborators.map((collab) => ({
      id_collaborator: collab.id_collaborator,
      name: collab.name,
      venue: collab.groups?.venues?.name || null,
      group: collab.groups?.id_group || null,
      email: collab.email,
      phone_number: collab.phone_number,
    }));

    res.json(formatted);
  } catch (error) {
    console.error('Error fetching collaborators table:', error);
    res.status(500).json({ message: 'Error al obtener datos de la tabla de colaboradoras' });
  }
};

// Actualizar solo nombre, sede, correo, teléfono y grupo
const updateCollaboratorBasicInfo = async (req, res) => {
  const { id } = req.params;
  const { name, paternal_name, maternal_name, email, phone_number, id_group } = req.body;

  if (isNaN(parseInt(id))) {
    return res.status(400).json({ message: 'ID de colaboradora inválido' });
  }

  try {
    const updatedCollaborator = await prisma.collaborators.update({
      where: { id_collaborator: parseInt(id) },
      data: {
        name,
        paternal_name,
        maternal_name,
        email,
        phone_number,
        id_group,
      },
    });

    res.json(updatedCollaborator);
  } catch (error) {
    console.error('Error updating basic collaborator info:', error);
    res.status(500).json({ message: 'Error al actualizar datos básicos de la colaboradora' });
  }
};

module.exports = {
  createCollaborator,
  getAllCollaborators,
  getCollaboratorById,
  updateCollaborator,
  deleteCollaborator,
  getCollaboratorsTable,
  updateCollaboratorBasicInfo,
};
