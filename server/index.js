const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authControllers = require('./controllers/authControllers');
const propertyControllers = require('./controllers/propertyControllers');
const uploadController = require('./controllers/uploadControllers')
const app = express();


require('dotenv').config();


// MongoDB connection
mongoose.connect(process.env.DB_STRING || 'mongodb://localhost:27017/illustratedEstate');

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('MongoDB has been started successfully!');
});

// Routes/middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authControllers);
app.use("/property", propertyControllers);
app.use('/upload', uploadController)

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server Running successfully on port: ${process.env.PORT}`);
});
