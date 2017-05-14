var express=require('express');
var app = express();
var bodyParser = require('body-parser');
var request=require('request');
var router = express.Router();


app.use(express.static(__dirname+'/required/'));
app.set('port', (process.env.PORT ||8080));

app.listen(app.get('port'),function(){
console.log("Your server is now running...");
console.log(app.get('port'));
});

app.use(bodyParser.json());


app.get('/gu',function(req,res){

	request({
	     url:"https://sc.productrx.com/public/schema/survey",
	     method:"GET",
		 qs:{query:"survey",data_type:"JSON"}
		 },function(err,response,body){
	          if(err){
		          console.log(err);
				  res.status(300).json(error.apiError);
	            }
	          else{
		          //console.log());
				  var body=JSON.parse(body);
				  res.status(200).json(body);
	            }
			});
});

app.get('/',function(req,res){

    console.log(req.method+" request received at "+req.url);
	res.sendFile(__dirname+'/index.html');


});

