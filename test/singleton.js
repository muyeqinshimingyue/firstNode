/**
 *  测试Node.js的模块加载 ， 其模块加载为单例模式，只会加载一次
 *  
 */

var name ;
/***
 * exports 是Node.js模块公开的接口,该对象无需再定义 ,并且该对象为空(即{})该模块通过  
 * exports 对象把 setName  和  sayHello 作为模块的访问接口
 * 
 * 
 * 不可以通过对  exports 直接赋值代替对  module.exports 赋值。
 * exports 实际上只是一个和  module.exports 指向同一个对象的变量，
 * 它本身会在模块执行结束后释放，但  module  不会，
 * 因此只能通过指定module.exports  来改变访问接口
 * 
 */
exports.setName = function ( username ){
	name = username;
};

exports.setHello = function (  ){
	console.log( " Hello " + name +" !!!! " );
};