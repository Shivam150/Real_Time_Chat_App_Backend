import express from  'express';
let app = express();
import http from  'http';

const Port = process.env.PORT ||9001;













let Server =  http.createServer(app);

Server.listen(Port , ()=> {
    console.log(`server is running on port-  http://locolhost:${Port}`);
});