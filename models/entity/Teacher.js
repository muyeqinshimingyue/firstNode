/**
 *  编写 Teacher 模块 ，继承与User 模块
 *  
 */

var User = require("./User");  // 引入 User对象

function Teacher(id,name,age){
	User.apply(this,[id,name,age]);		// Teache 继承  User类
	
	this.teach = function (){
		console.log( this.name + "正在上课！" );
	};
	
}

module.exports = Teacher;  // 导出Teacher对象
