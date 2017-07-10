/**
 *  测试Node.js模块调用
 *	
 */
var User = require("../models/entity/User");  // 调用User模块
var Teacher = require("../models/entity/Teacher");

var http = require("http");  // 获取http协议模块
http.createServer( function( request , response ) {
	response.writeHead(200,{'Content-Type':  'text/html;charset=utf-8'}); //编写返回头
	
	if( "/favicon.ico" != request.url ){  // 手动清除两次访问
		console.log("有人访问,url是：" + request.url );
		response.write("hello world"); // 向页面输出
		
		
		user = new User(); // 使用无参构造方法实例化User
		user.id = 1;
		user.name = "张三";
		user.age = 20;
		user.enter();
		
		
		user1 = new User(1,'李四',16);  // 使用有参构造方法
		user1.enter();
		
		
		teacher = new Teacher(2,'王五',23);  // 实例化子类
		teacher.enter();
		teacher.teach();
		
		
		response.end();	 // 不写则没有http协议尾,但写了会产生两次访问  
	}
	
	response.end();	 // 不写则没有http协议尾,但写了会产生两次访问
	
}).listen(8000) ;


console.log(" 服务启动，监听8000端口 ");