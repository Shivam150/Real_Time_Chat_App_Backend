const  express = require('express');
let app = express();
const  http=  require( 'http');
const path =   require("path");
// const  connect = require('./connection/connect.js');
const connection = require('./connection/connect.js');
const router = require("./routes/index.js");
const constant = require("./messages/message.js");
const Port = process.env.PORT ||9001;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/images/", express.static(__dirname + "/public/files"));


app.use(function (req, res, next) {
    if (req.headers && req.headers.lang && req.headers.lang == "ar") {
      process.lang = constant.MESSAGES.arr;
    }
    if (req.headers && req.headers.lang && req.headers.lang == "fr") {
      process.lang = constant.MESSAGES.fr;
    } else {
      process.lang = constant.MESSAGES.en;
    }
    next();
  });



app.use("/chat/api", router);


app.use("/", function (req, res) {
    res.status(400).send({
      code: 400,
      status: "success",
      message: "Parcel Pending API",
      data: {},
    });
  });


 




let Server =  http.createServer(app);
Server.listen(Port , async ()=> {
    console.log(`server is running on port-  http://locolhost:${Port}`);
    await connection.mongoDbconnection();
});