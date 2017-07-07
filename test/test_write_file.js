/**
 *	 测试文件写入
 */
var http = require('http');
var url = require("url");
var writeFileRoute = require("../models/writeFile_route");
http.createServer(function (request,response){
	response.writeHeader(200,{"Content-type":"text/html;charset=utf-8"});
	if( "/favicon.ico" != request.url ){
		var path = url.parse(request.url).pathname;
		path = path.replace(/^\//,"");
		
		writeFileRoute[path](response);
		console.log("主程序结束");
	}else{
		response.end();
	}
}).listen(8000);
console.log("服务启动，地址是http://localhost:8000");
