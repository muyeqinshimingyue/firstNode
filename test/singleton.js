/**
 *  测试Node.js的模块加载 ， 其模块加载为单例模式，只会加载一次
 *  
 */

var name ;

//exports 是Node.js模块公开的接口,该对象无需再定义 ,并且该对象为空(即{})
//该模块通过  exports 对象把 setName  和  sayHello 作为模块的访问接口

exports.setName = function ( username ){
	name = username;
};

exports.setHello = function (  ){
	console.log( " Hello " + name +" !!!! " );
};