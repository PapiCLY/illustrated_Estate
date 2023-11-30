const express = require('express')
const app = express()
const connectDB = require('./config/database')
const routes = require('./routes')


//.env folder for environment variables
require('dotenv').config({ path: './config/.env' })

connectDB()

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)

//Server Running
app.listen(process.env.PORT, () => {
    console.log(`Server is running ${process.env.PORT}`);
  });