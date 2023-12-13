const authControllers = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//register - http://localhost:5000/auth/register
authControllers.post('/register', async (req, res) => {
  try {
    const isExisting = await User.findOneAndDelete({email: req.body.email})
    if(isExisting){
        throw new Error("Already registered!")
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await User.create({...req.body, password: hashedPassword});

    const {password, ...others} = newUser._doc;
    const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: "1d"});

    return res.status(201).json({others, token: token});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



//login - http://localhost:5000/auth/login
authControllers.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user){
            throw new Error("User not found!")
        }

        const comparePass = await bcrypt.compare(req.body.password, user.password);
        if(!comparePass){
            throw new Error("Wrong password!")
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"});
        const {password, ...others} = user._doc;

        return res.status(200).json({others, token: token})
    }catch(error){
        return res.status(500).json({error: error.message})
    }
})

module.exports = authControllers;
