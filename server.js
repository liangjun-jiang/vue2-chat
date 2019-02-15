const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');


let app = express();
app.use(serveStatic(__dirname + "/weixin"));
const port = process.env.PORT || 80;
app.listen(port);
console.log('server started '+ port);