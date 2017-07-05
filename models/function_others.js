/**
 *  其他模块函数调用测试  多函数调用
 */

/**
 *  exports  本身仅仅是一个普通的空对象，即 {} ，它专门用来声明接口，本质上是
 *  通过它为模块闭包① 的内部建立了一个有限的访问接口。因为它没有任何特殊的地方，所以
 *  可以用其他东西来代替
 *  
 *  
 *  不可以通过对  exports 直接赋值代替对  module.exports 赋值。
 * exports 实际上只是一个和  module.exports 指向同一个对象的变量，
 * 它本身会在模块执行结束后释放，但  module  不会，
 * 因此只能通过指定module.exports  来改变访问接口
 * 
 */

// 多函数调用
module.exports = {
	fun3:function(res){   // fun3 是一个匿名函数
		console.log(" 调用模块函数 fun3 ");
		
		res.write(" </br>调用模块函数 fun3 ");
	},
	fun4:function(res){
		console.log(" 调用模块函数 fun4 ");
		
		res.write(" </br>调用模块函数 fun4 ");
	}
};