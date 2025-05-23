const { body, validationResult } = require('express-validator');

const validateCoordinator = [
  body('name').notEmpty().withMessage('El nombre es obligatorio'),
  body('paternal_name').notEmpty().withMessage('El apellido paterno es obligatorio'),
  body('maternal_name').notEmpty().withMessage('El apellido materno es obligatorio'),
  body('email').isEmail().withMessage('Correo inválido'),
  body('phone_number').isString().withMessage('Número de teléfono obligatorio'),
  body('gender').notEmpty().withMessage('El género es obligatorio'),
  body('username').notEmpty().withMessage('El usuario es obligatorio'),
  body('password').notEmpty().withMessage('La contraseña es obligatoria'),
  body('id_venue').isInt().withMessage('ID de sede inválido'),

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

module.exports = { validateCoordinator };
