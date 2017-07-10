/**
 *  定义 简单 路由
 */

module.exports = {
	login:function (request,response){
		console.log( "访问登录方法" );
		response.write( "访问登录方法" );
	},
	register:function(request,response){
		console.log( "访问注册方法" );
		response.write( "访问注册方法" );
	}
};