// src/server.js
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const next = require('next');
const path = require('path');

const logRequestMiddleware = require('./middlewares/logRequestMiddleware');
const authRoutes = require('./routes/auth.routes');
const venueRoutes = require('./routes/venue.routes');
const participantsRoutes = require('./routes/participants.routes');
const superuserRoutes = require('./routes/superuser.routes');
const collaboratorRoutes = require('./routes/collaborator.routes');
const dataRoutes = require('./routes/data.routes');
const statusRoutes = require('./routes/status.routes');
const venueCoordinatorRoutes = require('./routes/venueCoordinator.routes');
const mentorRoutes = require('./routes/mentor.routes');
const diplomaRoutes = require('./routes/diploma.routes');

const dev = process.env.NODE_ENV !== 'production';
const appNext = next({ dev, dir: path.join(__dirname, '..') });
const handle = appNext.getRequestHandler();

const app = express();
const PORT = process.env.PORT || 3000;

const cron = require('node-cron');
const fs = require('fs').promises;

const cleanupTmpFiles = async () => {
  const tmpDir = path.join(__dirname, 'uploads', 'tmp');
  const files = await fs.readdir(tmpDir);
  const now = Date.now();
  const maxAge = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  for (const file of files) {
    const filePath = path.join(tmpDir, file);
    const stats = await fs.stat(filePath);
    if (now - stats.mtimeMs > maxAge) {
      await fs.unlink(filePath);
      console.log(`Deleted old file: ${file}`);
    }
  }
};

// Run cleanup every hour
cron.schedule('0 * * * *', cleanupTmpFiles);

// Run once on startup
cleanupTmpFiles();

appNext.prepare().then(() => {
  // Middlewares globales
  app.set('trust proxy', 1);
  app.use(express.json({ limit: '50mb' })); // Increase JSON payload limit
  app.use(express.urlencoded({ limit: '50mb', extended: true })); // Optional: for form-urlencoded data
  app.use(morgan('dev'));
  app.use(logRequestMiddleware);

  // Rutas backend
  app.use('/api/auth', authRoutes);
  app.use('/api/venues', venueRoutes);
  app.use('/api/participants', participantsRoutes);
  app.use('/api/diplomas', diplomaRoutes);
  app.use('/api/superusers', superuserRoutes);
  app.use('/api/data', dataRoutes);
  app.use('/api/collaborators', collaboratorRoutes);
  app.use('/api/status', statusRoutes);
  app.use('/api/venue-coordinators', venueCoordinatorRoutes);
  app.use('/api/mentors', mentorRoutes);

  app.get('/api', (req, res) => {
    res.send('¡API corriendo!');
  });

  // Todas las demás rutas serán manejadas por Next.js
  app.use(async (req, res) => {
    try {
      return await handle(req, res);
    } catch (err) {
      console.error('Error al manejar la ruta en Next.js:', err);
      res.status(500).send('Error interno al manejar la ruta.');
    }
  });

  app.listen(PORT, () => {
    console.log(`Servidor combinado corriendo en http://localhost:${PORT}`);
  });
});
