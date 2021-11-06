const { Schema, model } = require('mongoose');
/*const bcrypt = require('bcrypt');*/

const userSchema = new Schema({
    username: {
        type: String,
        min: 3,
        max: 20,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String, 
        required: true,
        min: 6,
    },
}, 

    { timestamps: true }
);

const User = model('User', userSchema);

module.exports = User;