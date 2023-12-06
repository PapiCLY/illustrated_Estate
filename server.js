const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const connectDB = require('./config/database')
const userRoutes = require('./routes/api/user')
const listingRoutes = require('./routes/api/listingRoute')


//.env folder for environment variables
require('dotenv').config()

//connct to database
connectDB()

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log(`Lets see the secret ${process.env.SECRET}`)
//setup sessions - store in MongoDB
app.use(
    session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

//routes
app.use('/api/user', userRoutes)
app.use('/api/listing', listingRoutes)

//Server Running
app.listen(process.env.PORT, () => {
    console.log(`Server is running ${process.env.PORT}`);
  });