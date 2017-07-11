/**
 *   动态网页测试
 */
var http = require('http');
var url = require('url');
var dynamicRoute = require("../models/dynamic/dynamic_route");
http.createServer(function(request,response){
	var address = request.url;
	if( "/favicon.ico" != address ){
		
		var path = url.parse(address).pathname;
		path = path.replace(/^\//,'');
		dynamicRoute[path](request,response);
		
	}else{
		
		response.writeHeader(200,{"content-type":"text/html;charset=utf-8"});
		response.end();
	}
}).listen(8000);
console.log("服务器启动 地址： http://localhost:8000");