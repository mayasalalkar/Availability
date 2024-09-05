const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');  // <-- Include this

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Auth Routes
app.use('/api/auth', authRoutes);  // <-- Auth routes here

// User and Admin Routes
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});