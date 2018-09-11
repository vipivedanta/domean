const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static( path.join( __dirname ,'dist' ) ));

app.get('/index.html',function(req,res){
	res.sendFIle( path.join(__dirname,'dist/index.html') );
});

const server = http.createServer(app);
server.listen(3000,function(){
	console.log('listening to 3000')
});

