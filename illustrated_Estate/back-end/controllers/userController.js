const User = require('../models/user'); // Import User model

const userController = {
  //Get user by ID -- http://localhost:2641/users/:id
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error:error.message });
    }
  },

  //Get listings for a user by ID -- http://localhost:2641/users/listings/:id
  getUserListings: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate('listings');
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user.listings);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  //Update user by ID -- http://localhost:2641/users/update/:id
  updateUser: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            avatar: req.body.avatar
          },
        },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.status(200).json(updatedUser);
      //res.send('user updated')
    } catch (error) {
      res.status(500).json({ error: error.message});
    }
  },

  //Create a new user -- http://localhost:2641/user/create
  createUser: async (req, res) => {
    try {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar
      });

      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  //Delete user by ID -- http://localhost:2641/users/delete/:id
  deleteUser: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);

      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.status(200).json(deletedUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = userController;
