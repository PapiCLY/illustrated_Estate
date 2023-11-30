const express = require('express')
const app = express()
const connectDB = require('./config/database')
const userRoutes = require('./routes/user')


//.env folder for environment variables
require('dotenv').config({ path: './config/.env' })

connectDB()

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/user', userRoutes)

//Server Running
app.listen(process.env.PORT, () => {
    console.log(`Server is running ${process.env.PORT}`);
  });