const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        min: 3,
        max: 20,
        unique: true,
    },
    email: {
        type: String, 
        require: true, 
        max: 50,
        unique: true,
    },
    password: {
        type: String, 
        required,
        min: 6,
    },
}, 

    { timestamps: true }
);

module.exports = moongoose.model("User", UserSchema);