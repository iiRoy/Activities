const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

const getAll = async (req, res) => {
  const users = await prisma.superusers.findMany();
  res.json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await prisma.superusers.findUnique({
    where: { id_superuser: parseInt(id) },
  });

  if (!user) {
    return res.status(404).json({ message: 'Superuser no encontrado' });
  }

  res.json(user);
};

const create = async (req, res) => {
  const { username, email, password } = req.body;

  const newUser = await prisma.superusers.create({
    data: {
      username,
      email,
      password, // ⚠️ Recomendación: Hashear la contraseña aquí
    },
  });

  res.status(201).json({ message: 'Superuser creado', data: newUser });
};

const update = async (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;

  const updated = await prisma.superusers.update({
    where: { id_superuser: parseInt(id) },
    data: { username, email, password },
  });

  res.json({ message: 'Superuser actualizado', data: updated });
};

const remove = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    await prisma.superusers.delete({ where: { id_superuser: id } });
    res.json({ message: `Superuser con ID ${id} eliminado correctamente` });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return res.status(404).json({ message: `El superuser con ID ${id} no existe` });
    }

    console.error('Error al eliminar superuser:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
