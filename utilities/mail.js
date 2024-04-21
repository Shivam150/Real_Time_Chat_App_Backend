require("dotenv/config");

const nodemailer = require( "nodemailer" );

const  transporter = nodemailer.createTransport({
    host : process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

const sendEmail = async (email , otp) => {
    const mailoptions = {
        from : process.env.EMAIL,
        to : email,
        subject : 'One Time Password',
        text : `Your One Time Password is ${otp}`,
    };

    await transporter.sendMail(mailoptions);
}



module.exports= {
    sendEmail
};