/**
 *  参数接收测试类
 */
var http = require('http');
var url = require('url');
/*
 * 	./ 是指 启动的JS文件所在路径的上一级路径（启动JS所在的文件夹路径）
 *   ../ 路径是相对于启动的JS文件所在路径上两级路径,不是当前JS的路径(require除外)，
 *   require的不同 ； require中的./ 指的是当前JS文件所在的上级目录
 *   一般推荐使用绝对路径，因为启动js的路径可能会变化
 */
var param_route = require('../models/param_receive/param_route');  // 参数路由
http.createServer(function(request,response){
	var address = request.url;
	if( "/favicon.ico" != address ){
		var path = url.parse(address).pathname;
		path = path.replace('/','');
		param_route[path](request,response);
	}else{
		response.writeHeader(200,{"Content-type":"text/html;charset=utf-8"});
		response.end();
	}
}).listen(8000);

console.log("服务启动，监听8000端口 http://localhost:8000");