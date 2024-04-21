const  bcrypt = require('bcrypt');


const  hashed_Password = async (password) => {
    try {
        const hashedPassword = await  bcrypt.hash(password, 10);
        return hashedPassword;
    } catch (error) {
        console.log('Error hashing password: ', error);
        throw error;
    }
};

module.exports= {
    hashed_Password: hashed_Password,
}