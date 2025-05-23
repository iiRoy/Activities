const { body, validationResult } = require('express-validator');

const validateLogin = [
  body('emailOrUsername').notEmpty().withMessage('El correo o nombre de usuario es obligatorio'),

  body('password').notEmpty().withMessage('La contraseña es obligatoria'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = {
  validateLogin,
};
