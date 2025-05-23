const express = require('express');
const router = express.Router();

const {
  generateDiplomas,
  getDiplomaFilters,
  getDiplomaUsers,
} = require('../controllers/diploma.controller');

// POST /api/diplomas/generate
router.post('/generate', generateDiplomas);

// GET /api/diplomas/filtros
router.get('/filtros', getDiplomaFilters);

// GET /api/diplomas/users
router.get('/users', getDiplomaUsers);

module.exports = router;
