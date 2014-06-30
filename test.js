var http = require("http");
var server=http.createServer(function(request,response){
	url=require("url");
	var path=url.parse(request.url).pathname;

	if (path.indexOf("..")!=-1){
		path="/";
	}

	if(path=="/"){
		path="/index.html";
	}
});

//8080ポートで待つ
server.listen(8080);
