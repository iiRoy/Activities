const { body, validationResult } = require('express-validator');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const validateSuperUser = [
  body('username').notEmpty().withMessage('El nombre de usuario es obligatorio'),
  body('email')
    .isEmail()
    .withMessage('Correo electrónico no válido')
    .custom(async (email) => {
      const existingUser = await prisma.superusers.findUnique({
        where: { email },
      });
      if (existingUser) {
        throw new Error('El correo ya está registrado');
      }
    }),
  body('password')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres'),

  // Middleware final para capturar errores
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        message: 'Error de validación',
        errors: errors.array(),
      });
    }
    next();
  },
];

module.exports = { validateSuperUser };
