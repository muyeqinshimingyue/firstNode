/**
 *    测试Node.js 读取文件
 *    Node.js 包含两种读取文件的方式：同步和异步
 *    
 *    以下是同步读取文件
 *  
 */

var http = require("http");
var url = require("url");
var readFileRoute = require("../models/readFile_route");   //  获取读取文件模块
http.createServer(function (request,response){
	response.writeHeader(200,{"Content-Type":"text/html;charset=utf-8"});
	if( "/favicon.ico" != request.url ){
		var path = url.parse( request.url ).pathname;
		path = path.replace(/^\//,'');
		
		readFileRoute[path](response);  // 使用路由来判断是使用哪种方式读取
	
		console.log("主程序完成");
	}else{
		response.end();
	}
}).listen(8000);

console.log("服务启动，地址是http://localhost:8000");