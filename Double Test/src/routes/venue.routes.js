const express = require('express');
const multer = require('multer');
const path = require('path');
const venueController = require('../controllers/venue.controller');
const { validateVenue } = require('../validators/venueValidator');
const { authMiddleware, roleMiddleware } = require('../middlewares/authMiddleware');

// Configure multer to store files on disk
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Save files to uploads/tmp directory
    cb(null, path.join(__dirname, '..', 'uploads', 'tmp'));
  },
  filename: (req, file, cb) => {
    // Generate unique filename with appropriate extension
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = file.fieldname === 'participation_file' ? '.pdf' : '.jpg';
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB limit
  fileFilter: (req, file, cb) => {
    if (file.fieldname === 'participation_file' && file.mimetype !== 'application/pdf') {
      return cb(new Error('El archivo de participación debe ser un PDF'));
    }
    if (
      (file.fieldname === 'logo' || file.fieldname === 'generalCoordinator.profileImage') &&
      !file.mimetype.startsWith('image/')
    ) {
      return cb(new Error('Los archivos de logo y foto de perfil deben ser imágenes'));
    }
    cb(null, true);
  },
});

const router = express.Router();

// Routes
router.get('/', authMiddleware, venueController.getAll);
router.post(
  '/',
  upload.fields([
    { name: 'participation_file', maxCount: 1 },
    { name: 'logo', maxCount: 1 },
    { name: 'generalCoordinator.profileImage', maxCount: 1 },
  ]),
  validateVenue,
  venueController.create,
);
router.get('/specific', authMiddleware, venueController.getSpecificData); // Nueva ruta para obtener solo los datos específicos
router.get('/:id', authMiddleware, venueController.getById);
router.put(
  '/:id',
  upload.fields([
    { name: 'participation_file', maxCount: 1 },
    { name: 'logo', maxCount: 1 },
  ]),
  authMiddleware,
  roleMiddleware(['admin']),
  validateVenue,
  venueController.update,
);
router.delete('/:id', authMiddleware, roleMiddleware(['admin']), venueController.remove);

// Serve files from uploads/tmp
router.get('/files/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, '..', 'uploads', 'tmp', filename);

  // Check if file exists
  fs.access(filePath)
    .then(() => {
      // Set appropriate headers
      const ext = path.extname(filename).toLowerCase();
      const contentType = ext === '.pdf' ? 'application/pdf' : 'image/jpeg';
      res.setHeader('Content-Type', contentType);
      res.setHeader('Content-Disposition', `inline; filename="${filename}"`);

      // Serve the file
      res.sendFile(filePath);
    })
    .catch(() => {
      res.status(404).json({ message: 'Archivo no encontrado' });
    });
});

module.exports = router;
