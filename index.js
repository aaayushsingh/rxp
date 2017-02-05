var express=require('express');
var app = express();
var bodyParser = require('body-parser');
var request=require('request');

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'),function(){
console.log("Your server is now running...");
});

app.use(bodyParser.json());


app.get('/',function(req,res){

    console.log(req.method+" request received at "+req.url);
	res.sendFile(__dirname+'/index.html');


});

app.get('/ayush',function(req,res){

    console.log(req.method+" request received at "+req.url);
	res.sendFile(__dirname+'/ayush.html');


});


app.get('/pranav',function(req,res){

    console.log(req.method+" request received at "+req.url);
	res.sendFile(__dirname+'/pranav.html');


});
