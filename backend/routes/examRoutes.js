const express = require('express');
const router = express.Router();
const { getExams, createExam, updateExame, deleteExam } = require('../controllers/examController');

// Routes for CRUD operations
router.get('/', getExams);
router.post('/', createExam);
router.put('/:id', updateExame);
router.delete('/:id', deleteExam);

module.exports = router;