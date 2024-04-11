import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    content : {
        type: String,
    },
    sender : {
        type: mongoose.Types.ObjectId,
        ref:"User"
    },
    chat: {
        type: mongoose.Types.ObjectId, 
        ref: 'Chat'
    },
    atatchments: {
        type: String // Array of image URLs
    },
},
{timestamps: true}
);

const messageModel = mongoose.model("Message", messageSchema);

module.exports = messageModel;