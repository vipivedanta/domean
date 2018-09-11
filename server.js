const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

app.get('/index.html',function(req,res){
	res.send('This is a nodejs page')
});

const server = http.createServer(app);
server.listen(3000,function(){
	console.log('listening to 3000')
});

