let mongoDbconnection = async function () {
    var url = process.env.MONGO_URL;
    console.log(url);
    await mongoose.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
    
  };
  
  module.exports = {
    mongoDbconnection: mongoDbconnection,
  };
  