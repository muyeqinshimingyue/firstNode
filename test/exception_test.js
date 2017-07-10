/**
 * 	异常处理
 *  
 */
var http = require('http');
var url = require('url');
var routeEnhance = require("../models/route/rout_enhance");
http.createServer(function(request,response){
	if( "/favicon.ico" != request.url ){
		var path = url.parse(request.url).pathname;
		path = path.replace(/^\//,'');
		
		/**
		 *   同步异常处理 
		 */
		try {   
			routeEnhance[path](response);
		} catch (e) {
			console.log("异常发生：" + e);
			response.writeHeader(200,{"Content-type":"text/html;charset=utf-8"});
			response.write( e.toString() );
			response.end();
		}
		
	}else{
		response.writeHeader(200,{"Content-type":"text/html;charset=utf-8"});
		response.end();
	}
}).listen(8000);

console.log( "服务器启动，地址：http://localhost:8000");