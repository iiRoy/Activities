const { body, validationResult } = require('express-validator');

// Utility function to transform flat keys into nested objects
const parseNestedBody = (body) => {
  const result = {};

  for (const key in body) {
    const parts = key.split('[');
    if (parts.length === 1) {
      result[key] = body[key];
    } else {
      let current = result;
      for (let i = 0; i < parts.length; i++) {
        let part = parts[i];
        if (part.endsWith(']')) {
          part = part.slice(0, -1);
        }
        if (i === parts.length - 1) {
          current[part] = body[key];
        } else {
          current[part] = current[part] || {};
          current = current[part];
        }
      }
    }
  }

  return result;
};

const validateVenue = [
  // Venue fields
  body('name').notEmpty().withMessage('El nombre del venue es obligatorio'),
  body('location').notEmpty().withMessage('La localización del venue es obligatoria'),
  body('address').notEmpty().withMessage('La dirección del venue es obligatoria'),

  // General Coordinator fields
  body('generalCoordinator[name]')
    .notEmpty()
    .withMessage('El nombre de la coordinadora general es obligatorio'),
  body('generalCoordinator[lastNameP]')
    .notEmpty()
    .withMessage('El apellido paterno de la coordinadora general es obligatorio'),
  body('generalCoordinator[email]')
    .notEmpty()
    .withMessage('El correo electrónico de la coordinadora general es obligatorio')
    .isEmail()
    .withMessage('El correo electrónico de la coordinadora general debe ser válido'),
  body('generalCoordinator[phone]')
    .notEmpty()
    .withMessage('El celular de la coordinadora general es obligatorio'),
  body('generalCoordinator[gender]')
    .notEmpty()
    .withMessage('El sexo de la coordinadora general es obligatorio'),
  body('generalCoordinator[username]')
    .notEmpty()
    .withMessage('El nombre de usuario de la coordinadora general es obligatorio'),
  body('generalCoordinator[password]')
    .notEmpty()
    .withMessage('La contraseña de la coordinadora general es obligatoria')
    .isLength({ min: 8 })
    .withMessage('La contraseña debe tener al menos 8 caracteres')
    .matches(/[A-Z]/)
    .withMessage('La contraseña debe contener al menos una mayúscula')
    .matches(/[a-z]/)
    .withMessage('La contraseña debe contener al menos una minúscula')
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage('La contraseña debe contener al menos un carácter especial'),

  // Associated Coordinator fields (optional)
  body('associatedCoordinator[email]')
    .if(body('associatedCoordinator[name]').notEmpty())
    .notEmpty()
    .withMessage(
      'El correo electrónico de la coordinadora asociada es obligatorio si se proporciona un nombre',
    )
    .isEmail()
    .withMessage('El correo electrónico de la coordinadora asociada debe ser válido'),
  body('associatedCoordinator[phone]')
    .if(body('associatedCoordinator[name]').notEmpty())
    .notEmpty()
    .withMessage(
      'El celular de la coordinadora asociada es obligatorio si se proporciona un nombre',
    ),

  // Staff Report Coordinator fields (optional)
  body('staffCoordinator[email]')
    .if(body('staffCoordinator[name]').notEmpty())
    .notEmpty()
    .withMessage(
      'El correo electrónico de la coordinadora de informes (staff) es obligatorio si se proporciona un nombre',
    )
    .isEmail()
    .withMessage('El correo electrónico de la coordinadora de informes (staff) debe ser válido'),
  body('staffCoordinator[phone]')
    .if(body('staffCoordinator[name]').notEmpty())
    .notEmpty()
    .withMessage(
      'El celular de la coordinadora de informes (staff) es obligatorio si se proporciona un nombre',
    ),

  // Participants Report Coordinator fields (optional)
  body('participantsCoordinator[email]')
    .if(body('participantsCoordinator[name]').notEmpty())
    .notEmpty()
    .withMessage(
      'El correo electrónico de la coordinadora de informes (participantes) es obligatorio si se proporciona un nombre',
    )
    .isEmail()
    .withMessage(
      'El correo electrónico de la coordinadora de informes (participantes) debe ser válido',
    ),
  body('participantsCoordinator[phone]')
    .if(body('participantsCoordinator[name]').notEmpty())
    .notEmpty()
    .withMessage(
      'El celular de la coordinadora de informes (participantes) es obligatorio si se proporciona un nombre',
    ),

  // Middleware to validate files, transform req.body, and capture errors
  (req, res, next) => {
    // Check for participation_file in req.files
    if (!req.files || !req.files['participation_file']) {
      return res.status(422).json({
        message: 'Error de validación',
        errors: [{ msg: 'El archivo de participación es obligatorio' }],
      });
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        message: 'Error de validación',
        errors: errors.array(),
      });
    }

    // Transform req.body to nested structure for downstream middleware/controller
    req.body = parseNestedBody(req.body);

    next();
  },
];

module.exports = { validateVenue };
