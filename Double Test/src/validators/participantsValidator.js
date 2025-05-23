const { body, validationResult } = require('express-validator');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const validateParticipant = [
  body('email')
    .optional()
    .isEmail()
    .withMessage('Correo electrónico no válido')
    .custom(async (email) => {
      const existing = await prisma.participants.findFirst({
        where: { email },
      });
      if (existing) {
        throw new Error('El correo ya está registrado');
      }
    }),

  body('participation_file').notEmpty().withMessage('El archivo de participación es obligatorio'),

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

module.exports = { validateParticipant };
