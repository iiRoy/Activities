const express = require('express');
const router = express.Router();
const { getEntityStatusByID } = require('../controllers/status.Controller');

router.get('/:id', getEntityStatusByID);

module.exports = router;
