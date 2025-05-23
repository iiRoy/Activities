const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/authMiddleware');
const { data } = require('../controllers/data.controller');

router.get('/', authMiddleware, data);

module.exports = router;
