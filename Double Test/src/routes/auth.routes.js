const express = require('express');
const router = express.Router();
const { validateLogin } = require('../validators/auth.validator');
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/authMiddleware').authMiddleware;

router.post('/login', validateLogin, authController.login);
router.post('/logout', authMiddleware, authController.logout);

module.exports = router;
