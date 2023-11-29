const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: { 
        type: String, 
        required: true, 
        unique: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: {
        String, 
        required: true
    }
  }, { timestamp: true })

module.exports = mongoose.model('User', userSchema)

