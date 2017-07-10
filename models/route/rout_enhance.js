/**
 *  路由改造：以适应图文混排的效果
 *  
 */
var readFile = require("../file/read_file");
var fs = require("fs");

module.exports = {
	login:function(res){  // 登录方法（ 返回登录页面）
		
		var recall = getRecal( res ); // 调用公共函数，此时getRecal()函数被触发，
								  //但是内层的recal()函数并未被触发，而是宰实例化后，被return回来，交由其他方法触发
		readFile.readFile("../views/login.html", recall ); // 此处将触发内层的recal()函数；
	},
	showImg:function(res){
		var recall = getRecalImg(res);
		fs.readFile("../imgs/123.gif", "binary", recall );
	}
};



/**
 *  采用闭包方式，用来提取公共函数，方便调用  =====> 编写处理html页面的公共方法
 *  
 *  闭包： 函数结束后，其对应的参数并没有马上被回收，而是在在其调用函数完成后，回收
 *  
 * @param res
 * @returns
 */
function getRecal(res){
	res.writeHeader(200,{"Content-Type":"text/html;charset=utf-8"}); // 编写返回头
	function recal(data){  //定义需要执行的函数
		res.write(data);
		res.end();
	}
	return recal; // 将该函数返回，已完成闭包，让该函数在运行完成后，其对应的参数不会被回收掉。
}

/**
 *  采用闭包方式，用来提取公共函数，方便调用 ====> 编写图片处理的公共方法
 *  
 *  闭包： 函数结束后，其对应的参数并没有马上被回收，而是在在其调用函数完成后，回收
 *  
 * @param res
 * @returns
 */
function getRecalImg(res){
	res.writeHeader(200,{"Content-Type":"image/jpeg"});  // 编写返回头
	function recal(error,data){  //定义需要执行的函数
		if(error) throw error;
		res.write(data,'binary');
		res.end();
	}
	return recal; // 将该函数返回，已完成闭包，让该函数在运行完成后，其对应的参数不会被回收掉。
}

