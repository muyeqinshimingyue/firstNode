/**
 *  路由改造测试
 *  
 */
var http = require('http');
var url = require('url');
var routeEnhance = require("../models/route/rout_enhance");
http.createServer(function(request,response){
	if( "/favicon.ico" != request.url ){
		var path = url.parse(request.url).pathname;
		path = path.replace(/^\//,'');
		routeEnhance[path](response);
	}else{
		response.writeHeader(200,{"Content-type":"text/html;charset=utf-8"});
		response.end();
	}
}).listen(8000);

console.log( "服务器启动，地址：http://localhost:8000");