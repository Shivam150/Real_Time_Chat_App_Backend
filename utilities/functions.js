const OTP = require("../models/otp");
const sendEmail = require("./mail");
const moment  = require('moment');


const  generateOTP = () => {
    const otp = Math.floor((Math.random() * 9000 + 50)); // Generate a random number between 50 and 9499
    return otp;
}

const sendOtpToMail = async (email) => {
    try {
        const Otp = generateOTP();
        await OTP.deleteMany({ email: email }); // Delete any existing OTP for the user
        let data = {
            email: email,
            otp : Otp,
            expiredAt: moment().add(10, "minutes").toDate(),
        };

        await sendEmail.sendEmail(email , Otp);

        let  newOtp = await OTP.create(data);

        return newOtp;

    } catch (error) {
        console.log(`Error in sending OTP ${error}`);
        return error;
    }
}

const verifyOtp = async (email , otp) => {
    try {
        const storedOtp = await OTP.findOne({ email: email, otp: otp});
        
        if (storedOtp) {
            await OTP.deleteOne({email: email, otp : otp}) ;// delete the OTP after it has been used once
            return true;
        } else {
            return false;
        } 
    } catch (error) {
        console.log("Error in verifying OTP" + error);
        throw  error;
    }
}


module.exports= {
    sendOtpToMail,
    verifyOtp,
};
