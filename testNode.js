/**
 *  测试Node.js模块
 *  
 */
var name;

// exports 是Node.js模块公开的接口,该对象无需再定义 
// 该模块通过  exports 对象把 setName  和  sayHello 作为模块的访问接口
exports.setName = function ( exportsName ){
	name = exportsName;
}

exports.sayHello = function ( exportsName ){
	console.log( name + ' hello !!' );
}

exports.setNa = function(){
	console.log( name + ' hello NA !!' );
}