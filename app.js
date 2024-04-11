import express from  'express';
let app = express();
import http from  'http';

import os  from 'os'


// check my cpu core how much?
console.log('CPU available:', os.cpus().length); // CPU available: 4

const Port = process.env.PORT ||9001;





let Server =  http.createServer(app);


Server.listen(Port , ()=> {
    console.log(`server is running on port-  http://locolhost:${Port}`);
});