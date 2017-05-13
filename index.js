var express=require('express');
var app = express();
var bodyParser = require('body-parser');
var request=require('request');


app.use(express.static(__dirname+'/required/'));
app.set('port', (8080));

app.listen(app.get('port'),function(){
console.log("Your server is now running...");
console.log(app.get('port'));
});

app.use(bodyParser.json());


app.get('/',function(req,res){

    console.log(req.method+" request received at "+req.url);
	res.sendFile(__dirname+'/index.html');


});

