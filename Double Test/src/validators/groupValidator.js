const { body, validationResult } = require('express-validator');

const validateGroup = [
  body('name').isString().withMessage('El nombre debe ser un texto'),
  body('max_places').isInt({ min: 1 }).withMessage('Debe tener al menos un lugar'),
  body('id_venue').isInt().withMessage('Debe ser un ID numérico de sede'),

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

module.exports = { validateGroup };
