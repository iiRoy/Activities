const express = require('express');
const router = express.Router();
const participantsController = require('../controllers/participants.controller');
const { authMiddleware, roleMiddleware } = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, participantsController.getAllParticipants);
router.post('/', authMiddleware, participantsController.createParticipant);
router.get('/:id', authMiddleware, participantsController.getParticipantById);
router.get('/table', authMiddleware, participantsController.getParticipantsTable);
router.put(
  '/:id',
  authMiddleware,
  roleMiddleware(['superuser']),
  participantsController.updateParticipant,
);
router.put(
  '/:id/basic-info',
  authMiddleware,
  roleMiddleware(['superuser']),
  participantsController.updateParticipantBasicInfo,
);
router.delete(
  '/:id',
  authMiddleware,
  roleMiddleware(['superuser']),
  participantsController.deleteParticipant,
);

module.exports = router;
