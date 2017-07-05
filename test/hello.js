/**
 *  测试Node.js模块   hello 模块  覆盖exports对象
 *  
 *  因为exports对象是Node.js模块的公共接口，所以模块都会有一个exports的接口，
 *  现在定义一个模块直接覆盖exports对象，让外部调用方法直接获取模块定义的对象
 *  
 *  exports  本身仅仅是一个普通的空对象，即 {} ，它专门用来声明接口，本质上是
 *  通过它为模块闭包① 的内部建立了一个有限的访问接口。因为它没有任何特殊的地方，所以
 *  可以用其他东西来代替
 */

// 定义对象
function Hello(){
	
	var name;  // 对象属性
	
	this.setName = function ( username){
		name = username;
	};
	
	this.sayHello = function (){
		console.log( "hello " + name );
	};
	
}


/***
 * 不可以通过对  exports 直接赋值代替对  module.exports 赋值。
 * exports 实际上只是一个和  module.exports 指向同一个对象的变量，
 * 它本身会在模块执行结束后释放，但  module  不会，
 * 因此只能通过指定module.exports  来改变访问接口
 * 
 */ 
module.exports= Hello;  //  只支持一个=函数的