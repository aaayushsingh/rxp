app.get('/',function(req,res){

    console.log(req.method+" request received at "+req.url);
	res.sendFile(__dirname+'/index.html');


});
