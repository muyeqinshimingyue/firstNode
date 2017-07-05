/**
 *  测试http协议模块
 */

var http = require("http");  // 获取http协议模块
http.createServer( function( request , response ) {
	response.writeHead(200,{'Content-Type':  'text/html;charset=utf-8'}); //编写返回头
	
	if( "/favicon.ico" != request.url ){  // 手动清除两次访问
		console.log("有人访问,url是：" + request.url );
		response.write("hello world"); // 向页面输出
		
		response.end();	 // 不写则没有http协议尾,但写了会产生两次访问  
	}
	
	response.end();	 // 不写则没有http协议尾,但写了会产生两次访问
}).listen(8000) ;


console.log(" 服务启动，监听8000端口 ");