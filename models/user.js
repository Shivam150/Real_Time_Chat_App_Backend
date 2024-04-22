const  mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName : {
        type: String,  
        required: true 
    },
    email: {
        type: String ,
        required: true,
        unique: true
    },
    password: {
        type : String,
        required: true
    },
    bio: {
        type: String,
    },
    profilePic : {
        type:String,
        default:"default.jpg"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {timestamps:true});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;