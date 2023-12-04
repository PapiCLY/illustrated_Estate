const express = require('express')
const app = express()
const connectDB = require('./config/database')
const userRoutes = require('./routes/api/user')
const listingRoutes = require('./routes/api/listingRoute')


//.env folder for environment variables
require('dotenv').config()

connectDB()

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use('/user', userRoutes)
app.use('/listing', listingRoutes)

//Server Running
app.listen(process.env.PORT, () => {
    console.log(`Server is running ${process.env.PORT}`);
  });