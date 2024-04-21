import express from  'express';
let app = express();
import http from  'http';
import connect from './connection/connect';
let routes = require("./routes");
const Port = process.env.PORT ||9001;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/images/", express.static(__dirname + "/public/files"));




app.use("/chat/api", routes);















let Server =  http.createServer(app);
Server.listen(Port , async ()=> {
    console.log(`server is running on port-  http://locolhost:${Port}`);
    await connect();
});