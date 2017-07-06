/**
 *  测试 Node.js的函数调用
 */

var otherFun = require("../models/function_other.js");  // 调用当前目录的父目录下models文件夹的 function_other.js 模块
var others = require("../models/function_others.js");
var http = require("http");  // 获取http协议模块
http.createServer( function( request , response ) {
	response.writeHead(200,{'Content-Type':  'text/html;charset=utf-8'}); //编写返回头
	
	if( "/favicon.ico" != request.url ){  // 手动清除两次访问
		console.log("有人访问,url是：" + request.url );
		response.write("hello world"); // 向页面输出
		
		fun1(response);		// 调用本地函数
		
		otherFun(response);  // 调用其他模块的函数(单函数)
		
		others.fun3(response);  // 调用其他模块的函数(多函数)
		
		others['fun4'](response);  // 调用其他模块的函数(多函数) 使用字符串调用方法，该种方式还可以使用变量 *****
		
		response.end();	 // 不写则没有http协议尾,但写了会产生两次访问  
	}
	
	response.end();	 // 不写则没有http协议尾,但写了会产生两次访问
}).listen(8000) ;


console.log(" 服务启动，监听8000端口 ");


// 本地函数
function fun1( res ){
	console.log(" 调用本地函数 fun1 ");
	
	res.write(" </br>调用本地函数 fun1 ");
}