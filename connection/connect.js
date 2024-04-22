const mongoose = require( 'mongoose' );

let mongoDbconnection = async function () {
    var url = process.env.MONGO_URL;
    console.log(url);
    await mongoose.connect(url);
    
  };


module.exports = {
    mongoDbconnection,
}