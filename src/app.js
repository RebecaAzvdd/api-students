const express = require('express');
const connectDB = require('./config/Database');
const userRoutes = require('./routes/UserRoutes');
const cors = require('cors');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

module.exports = app;