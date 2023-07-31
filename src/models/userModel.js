const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    passwordCheck: {
        type: String,
        required: true
    }
}, { timestamps:true });

const UserModel = model('user', userSchema);

module.exports = UserModel;