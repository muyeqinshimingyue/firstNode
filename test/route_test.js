/**
 *  测试Node.js 路由初步
 */

var http = require("http");     // 获取http
var url = require("url");		// 获取路径对象
var route = require("../models/route"); //引入路由对象
http.createServer(function (request,response){
	response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"}); // 设置开头
	
	if( request.url != "/favicon.ico" ){  // 防止重复加载

		var pathname = url.parse( request.url ).pathname;  // 格式化路径
		
		console.log( "访问路径：" + url.parse( request.url ) );
		console.log( "访问路径：" + pathname);
		
		pathname = pathname.replace( /^\//  ,'');  // 匹配正在表达式
		console.log( "格式化后的访问路径：" + pathname);
		
		route[pathname](request,response);   // 调用路由中的功能
		
	}
	response.end();
}).listen(8000);

console.log( "服务器启动，地址：http://localhost:8000");
