import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
    status : {
        type: String,
        default : "pending",
        enum: ["approved","rejected","pending"],
    },
    sender : {
        type: mongoose.Types.ObjectId, 
        ref:"User"
    },
    receiver :{
        type: mongoose.Types.ObjectId ,
        ref: "User"
    }
},
    {timestamps:true}
);

const requestModel =  mongoose.model("Request",requestSchema);

module.exports = requestModel;