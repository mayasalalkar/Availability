const express = require('express');
const { getAllUsers, scheduleSession } = require('../controllers/adminController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/users', authMiddleware, adminMiddleware, getAllUsers);
router.post('/schedule', authMiddleware, adminMiddleware, scheduleSession);

module.exports = router;
