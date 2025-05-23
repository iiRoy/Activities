const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'mi_clave_secreta');

    let user;
    if (decoded.role === 'superuser') {
      user = await prisma.superusers.findUnique({
        where: { id_superuser: decoded.userId },
      });
    } else if (decoded.role === 'venue_coordinator') {
      user = await prisma.venue_coordinators.findUnique({
        where: { id_venue_coord: decoded.userId },
      });
    }

    if (!user || user.tokenVersion !== decoded.tokenVersion) {
      return res.status(403).json({ message: 'Token inválido' });
    }

    req.user = {
      id: decoded.userId,
      email: decoded.email,
      username: decoded.username,
      role: decoded.role,
    };

    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token inválido o expirado' });
  }
};

const roleMiddleware = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'No tienes permisos suficientes' });
    }
    next();
  };
};

module.exports = { authMiddleware, roleMiddleware };
