const User = require('..models/user')

module.exports = {
    getUser(req,res){
        User.find()
        .then((users)=> res.json(users))
        .catch((err)=> res.status(400).json(err))
    },

    getUserListings(req,res){
        User.findOne({ _id: req.params.userId })
        .then((user)=> {
            if(!user){
                res.status(404).json({ message: 'No user found' })
                return;
            }
            res.json(user)
        })
        .catch((err)=> res.status(400).json(err))
    },

    async createUser(req,res){
        try{
            const dbUserData = await User.create(req.body);
            res.json(dbUserData);
        } catch (err){
            res.status(400).json(err);
        }
    },

    updateUser(req,res){
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((user)=>
        !user ? res.status(404).json({message: 'No user found'}) : res.json({
            updatedUser: user,
            message: 'User updated'
        })
        )
        .catch((err)=> {
            console.log(err);
            return res.status(400).json(err);
        })
    },

    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) => {
            if (!user) {
                res.status(404).json({ message: 'No user found' });
                return;
            }
            Thought.deleteMany({ _id: { $in: user.thoughts } })
                return res.json ({
                    deletedUser: user,
                    message: 'User and thoughts'
                });
            })
        .catch((err) => {
            console.log(err);
            return res.status(400).json(err);
        });
    }
}