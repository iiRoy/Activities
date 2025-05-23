// routes/venueCoordinator.routes.js

const express = require('express');
const router = express.Router();
const { authMiddleware, roleMiddleware } = require('../middlewares/authMiddleware');
const coordinatorController = require('../controllers/venueCoordinator.controller');

// Ruta para obtener todos los coordinadores
router.get(
  '/',
  authMiddleware,
  roleMiddleware(['admin']),
  coordinatorController.getAllCoordinators,
);

// Ruta para obtener coordinadores con datos específicos (ID, NOMBRE, SEDE, CORREO, TELÉFONO)
router.get(
  '/specific',
  authMiddleware,
  roleMiddleware(['admin']),
  coordinatorController.getSpecific,
);

// Ruta para crear un nuevo coordinador
router.post(
  '/',
  authMiddleware,
  roleMiddleware(['admin']),
  coordinatorController.createCoordinator,
);

// Ruta para actualizar un coordinador completamente
router.put(
  '/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  coordinatorController.updateCoordinator,
);

// Ruta para actualizar solo los campos específicos de un coordinador
router.put(
  '/specific/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  coordinatorController.updateCoordinatorFields,
);

// Ruta para eliminar un coordinador
router.delete(
  '/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  coordinatorController.deleteCoordinator,
);

module.exports = router;
