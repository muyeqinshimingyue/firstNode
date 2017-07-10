/**
 *  异常抛出 测试
 * 
 */
var http = require('http');
var excep = require('../models/throw/excep');
http.createServer(function(request,response){
	response.writeHeader(200,{"Content-Type":"text/html;charset=utf-8"});
	if( "/favicon.ico" != request.url ){
		try {
			data = excep.exceptCat(0);
			response.write( e.toString() );
		} catch (e) {
			console.log("异常发生：" + e);
			response.write( e.toString() );
		}
	}
	response.end();
}).listen(8000);


console.log( "服务器启动，地址：http://localhost:8000");