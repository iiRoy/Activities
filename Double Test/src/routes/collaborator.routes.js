const express = require('express');
const router = express.Router();
const collaboratorsController = require('../controllers/collaborator.controller');
const { authMiddleware, roleMiddleware } = require('../middlewares/authMiddleware');

router.post(
  '/',
  authMiddleware,
  roleMiddleware(['superuser']),
  collaboratorsController.createCollaborator,
);
router.get('/table/all', authMiddleware, collaboratorsController.getCollaboratorsTable); // <- primero rutas específicas
router.get('/', authMiddleware, collaboratorsController.getAllCollaborators);
router.put(
  '/basic/:id',
  authMiddleware,
  roleMiddleware(['superuser']),
  collaboratorsController.updateCollaboratorBasicInfo,
);
router.get('/:id', authMiddleware, collaboratorsController.getCollaboratorById); // <- rutas dinámicas al final
router.put(
  '/:id',
  authMiddleware,
  roleMiddleware(['superuser']),
  collaboratorsController.updateCollaborator,
);
router.delete(
  '/:id',
  authMiddleware,
  roleMiddleware(['superuser']),
  collaboratorsController.deleteCollaborator,
);

module.exports = router;
