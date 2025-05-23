const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentor.controller');
const { authMiddleware, roleMiddleware } = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, mentorController.getAll);
router.get('/:id', authMiddleware, mentorController.getSpecific);
router.post('/', authMiddleware, roleMiddleware(['superuser']), mentorController.create);
router.put('/:id', authMiddleware, roleMiddleware(['superuser']), mentorController.update);
router.put(
  '/update-basic/:id',
  authMiddleware,
  roleMiddleware(['superuser']),
  mentorController.updateBasicData,
);
router.delete('/:id', authMiddleware, roleMiddleware(['superuser']), mentorController.remove);
router.get('/groups/:id_mentor', authMiddleware, mentorController.getGroupMentor);
router.put(
  '/groups/remove-mentor/:id_group',
  authMiddleware,
  roleMiddleware(['superuser']),
  mentorController.removeMentorFromGroup,
);

module.exports = router;
