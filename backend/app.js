const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const examRoutes = require('./routes/examRoutes');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

 //Routes
app.use('/api/exam', examRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;