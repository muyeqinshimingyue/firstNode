/**
 *  编写User模块，包含成员变量与成员方法
 *  
 *  使用this.属性名  来表示成员变量 
 *  js 面向对象的不严谨，所以它不存在私有，公有全是公有
 *  
 *  
 */

// 无参方法定义对象
function User(){
	this.id;			// this.属性名  表示该模块的成员属性     编号
	this.name;			// 姓名
	this.age;			// 年龄
	
	var num;			// 此处仅仅是一个变量，并不是成员变量
	
	this.enter = function (){   // 成员方法
		console.log( this.name + "进入图书馆!" );
	};
	
}



// 有参方法定义对象
function User1(id,name,age){
	this.id = id ;				// this.属性名  表示该模块的成员属性     编号
	this.name = name ;			// 姓名
	this.age = age ;			// 年龄
	
	var num;			// 此处仅仅是一个变量，并不是成员变量
	
	this.enter = function (){   // 成员方法
		console.log( this.name + "进入图书馆!" );
	};
	
}

// module.exports = User ;  // 输出User
module.exports = User1 ;