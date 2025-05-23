const express = require('express');
const router = express.Router();
const { validateSuperUser } = require('../validators/superuserValidator');
const superuserController = require('../controllers/superuser.controller');
const { authMiddleware, roleMiddleware } = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, roleMiddleware(['admin']), superuserController.getAll);
router.post('/', validateSuperUser, superuserController.create);
router.get('/:id', authMiddleware, superuserController.getById);
router.put(
  '/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  validateSuperUser,
  superuserController.update,
);
router.delete('/:id', authMiddleware, roleMiddleware(['admin']), superuserController.remove);

module.exports = router;
