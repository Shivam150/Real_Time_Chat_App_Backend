import userModel from  "../models/user";
const utility = require("../utilities/utility");
const functions = require("../utilities/functions")



const signUp = async (data) => {
     try {
        let user;
        data.password = await utility.hashed_Password(data.password);
        // check if user already exist
        user = await userModel.findOne({
            email: data.email,
            isDeleted: false,
            // isEmailVerify: true
        });

        if(!user) {
            user = await userModel.create(data);
            await functions.sendOtpToMail(data.email);
        }else {
            throw process.lang.DUPLICATE_EMAIL;
        }

        return user;

    } catch (error) {
        throw error;
    }
}


module.exports = {
    signUp,
}