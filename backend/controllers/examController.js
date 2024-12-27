const Exam = require("../models/examModel");

exports.getExams = async (req , res) => {
    try {
        const exames = await Exam.find();
        res.json(exames);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching items', error });
    }
};

exports.createExam = async (req ,res) => {
    const { name, date } = req.body;
    const newExam = new Exam({ name, date });
    try {
        await newExam.save();
        res.status(201).json(newExam);
    } catch (error) {
        res.status(400).json({ message: 'Error creating item', error });
    }
};

exports.updateExame = async (req, res) => {
    const { id } = req.params;
    const { name, date } = req.body;
    try {
        const updateExame = await Exam.findByIdAndUpdate(id, { name, date }, { new: true });
        res.json(updateExame);
    } catch (error) {
        res.status(400).json({ message: 'Error updating item', error });
    }
};


exports.deleteExam = async (req, res) => {
    const { id } = req.params;
    try {
        await Exam.findByIdAndDelete(id);
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting item', error });
    }
};

