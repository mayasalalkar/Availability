const express = require('express');
const { updateAvailability, getAvailability } = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/availability', authMiddleware, updateAvailability);
router.get('/myavailability', authMiddleware, getAvailability);

module.exports = router;
