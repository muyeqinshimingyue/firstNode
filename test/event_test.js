/**
 *  事件机制  测试
 */
var http = require('http');
var User = require("../models/event/user");
http.createServer(function(request,response){
	var address = request.url;
	if( "/favicon.ico" != address ){
		var user = new User();
		/*
		 *   监听注册事件   异步
		 *   如果注册抛出事件信息，该方法就会捕捉
		 */
		user.eventEmit.once("register",function(data){
			console.log("监听注册事件，注册的结果是：************ "+data);
			user.login(response); // 启用登录事件
		});
		user.register(); // 启动注册方法，该方法会抛出注册事件的信息
	}else{
		
		response.writeHeader(200,{"content-type":"text/html;charset=utf-8"});
		response.end();
	}
}).listen(8000);
console.log("服务器启动 地址： http://localhost:8000");