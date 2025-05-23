const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.routes');
const venueRoutes = require('./venue.routes');
const participantRoutes = require('./participant.routes');

router.use('/auth', authRoutes);
router.use('/venues', venueRoutes);
router.use('/participants', participantRoutes);

module.exports = router;
