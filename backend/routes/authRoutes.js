const express = require('express');
const { registerUser, authUser } = require('../controllers/authController');

const router = express.Router();

// Register Route
router.post('/register', registerUser);

// Login Route
router.post('/login', authUser);

module.exports = router;
