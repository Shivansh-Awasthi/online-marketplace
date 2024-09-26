const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        emum: ["Admin", "User"],
        default: "User"
    },
    profilePicture: {
        type: String,
        default: "https://images.hitpaw.com/topics/3d/profile-photo-1.jpg"
    }
}, { timestamps: true })



const User = mongoose.model("User", userSchema);


module.exports = User;