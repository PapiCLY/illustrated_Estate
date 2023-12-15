const mongoose = require('mongoose');



//"fixerUpper"|"classic"|"new"');


const PropertySchema = new mongoose.Schema({
    currentOwner: {
        //657810ea02ea5aaa886e14bf - ObjectId("657810ea02ea5aaa886e14bf") of user
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true,
        min: 8,
    },
    type: {
        type: String,
        enum: ["fixerUpper", "classic", "new"],
        required: true,
    },
    desc: {
        type: String,
        required: true,
        min: 20,
    },
    img: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    sqfeet: {
        type: Number,
        required: true,
    },
    beds: {
        type: Number,
        required: true,
        min: 2,
    },
    featured: {
        type: Boolean,
        default: true,
    },
}, {timestamps: true});

module.exports = mongoose.model("Property", PropertySchema);