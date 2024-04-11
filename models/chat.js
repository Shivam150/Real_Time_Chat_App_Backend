import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    chatName : {
        type: String,
        required: true,
    },
    members: [{type: mongoose.Types.ObjectId, ref:'User'}],
    creater :  {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    isGroupChat : {
        type: Boolean,
        default: false
    },

}, {timestamps: true }

);

const chatModel =  mongoose.model("Chat", chatSchema);

module.exports = chatModel;