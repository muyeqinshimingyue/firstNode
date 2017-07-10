/**
 *  测试读取图片
 */

var http = require("http");
var url = require("url");
var readImgRoute = require("../models/img/readImg_route");
http.createServer(function(request,response){
	response.writeHeader(200,{"content-type":"image/jpeg"});  // 设置头文件为 图片格式 "image/jpeg"
	if( "/favicon.ico" != request.url ){
		
		/**
		 *  在读取图片和显示图片的过程中，是不能添加其他文件的输出，否则会报错
		 *  这需要我们对我们的路由进行修改
		 */
		readImgRoute.readImg(response);  
		
	}else{
		response.end();
	}
	
}).listen(8000);

console.log("服务启动，地址是http://localhost:8000");