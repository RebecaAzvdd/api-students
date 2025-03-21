const express = require('express');
const connection= require('./config/Database');
const userRoutes = require('./routes/UserRoutes');
const cors = require('cors');

const app = express();
connection();

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

module.exports = app;