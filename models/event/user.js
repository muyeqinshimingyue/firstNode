/**
 *  编写注册事件 
 */
var events = require('events'); //引入事件模块
function User(){
	this.eventEmit = new events.EventEmitter(); // 实例化事件发生器
	
	// 注册方法
	this.register = function (){
		console.log("注册");
		this.eventEmit.emit('register',"注册成功");  // 抛出事件信息，如果有事件监听，则会触发事件
	};
	
	this.login = function (res){
		res.writeHeader(200,{"content-type":"text/html;charset=utf-8"});
		res.write("登录成功");
		res.end();
		console.log("登录成功");
	};
}

module.exports = User;