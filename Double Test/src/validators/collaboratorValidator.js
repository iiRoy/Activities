const { body, validationResult } = require('express-validator');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const validateCollaborator = [
  body('email')
    .isEmail()
    .withMessage('Correo electrónico no válido')
    .custom(async (email) => {
      const existing = await prisma.collaborators.findFirst({
        where: { email },
      });
      if (existing) {
        throw new Error('El correo ya está registrado');
      }
    }),

  // Puedes agregar más validaciones si deseas:
  body('name').notEmpty().withMessage('El nombre es obligatorio'),

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

module.exports = { validateCollaborator };
