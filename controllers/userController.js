const User = require('../models/user'); // Import User model

const userController = {
  // GET /users/:id - Get user by ID
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // GET /users/listings/:id - Get listings for a user by ID
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

  // PUT /users/update/:id - Update user by ID
  updateUser: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            username: req.body.userName,
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
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // POST /users/create/:id - Create a new user
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
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // DELETE /users/delete/:id - Delete user by ID
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
