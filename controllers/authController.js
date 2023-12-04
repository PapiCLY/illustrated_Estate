const User = require('../models/user');


module.exports = {
    signup: (req, res) => {
        res.render('auth/signup');
    },
}