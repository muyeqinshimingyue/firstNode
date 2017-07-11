/**
 *  参数接收路由
 */
var fs = require("fs");
var url = require("url");
var querystring = require("querystring");  // post 方式需要导入  查询字符串  模块
module.exports = {
	login:function(req,res){  //登录
		
		/**
		 *   get方式 获取 参数  设置表单的提交方式为 get  同步方式
		 */
		var queryStr = url.parse(req.url,true).query;  // 此时的取得的是参数对象  类似：{ email: '123', passwd: '3412' }
		console.log(queryStr);
		if( queryStr['email'] ){
			console.log( "get请求参数："+queryStr['email'] ); // 取出某个参数的值
		}
		
		
		/**
		 *  post 方式 获取参数  异步
		 */
		var querySt = ""  ; // 定义一个变量 ，用于暂存post提交参数
		req.on("data",function(chunk){ // 通过监听 request的data事件，只要data事件被触发，说明有请求传输数据到后台
			console.log("   "+chunk+"   \n");
			querySt +=chunk;   // 每当接收到请求体的参数时，附加到post上
		});
		req.on("end",function(){  // 通过监听request的end事件，完成对请求体数据的接收，只要此事件发生，就表示请求结束
			if( querySt ){
				querySt = querystring.parse( querySt ); //  格式化请求参数
				console.log(querySt);
			}

		});
		
		var callb = getRecal(res);
		/*
		 * 	./ 是指 启动的JS文件所在路径的上一级路径（启动JS所在的文件夹路径）
		 *   ../ 路径是相对于启动的JS文件所在路径上两级路径,不是当前JS的路径(require除外)，
		 *   require的不同 ； require中的./ 指的是当前JS文件所在的上级目录
		 *   一般推荐使用绝对路径，因为启动js的路径可能会变化
		 */
		readFile("../views/login.html",callb);  
	},
	showImg:function(req,res){
		var callb = getImgRecal(res);
		/*
		 * 	./ 是指 启动的JS文件所在路径的上一级路径（启动JS所在的文件夹路径）
		 *   ../ 路径是相对于启动的JS文件所在路径上两级路径,不是当前JS的路径(require除外)，
		 *   require的不同 ； require中的./ 指的是当前JS文件所在的上级目录
		 *   一般推荐使用绝对路径，因为运行js的路径可能会变化
		 */
		readImg("../imgs/123.gif",callb);  
	}
};


/**
 *  定义公共方法 ，用以返回html
 *  采用闭包写法
 * @param res
 * @returns
 */
function getRecal( res ){
	res.writeHeader(200,{"Content-type":"text/html;charset=utf-8"});
	function callback(data){
		res.write( data.toString() );
		res.end();
	}
	return callback;
}

/**
 * 定义公共方法 ，用以返回图片
 * @param res
 * @returns
 */
function getImgRecal( res ){
	res.writeHeader(200,{"Content-type":"image/jpeg"});
	function callback(data){
		res.write( data ,"binary");
		res.end();
	}
	return callback;
}


/**
 *  文件读取模块 --- 异步
 * @param path
 * @param callback
 * @returns
 */
function readFile(path,callback){
	fs.readFile(path,{"encoding":"utf-8"}, (error,data) =>{
		if(error){
			callback(error);
		}else{
			callback(data);
		}
	} );
}

/**
 *  读取图片
 * @returns
 */
function readImg(path,callback){
	fs.readFile( path, 'binary', (error,data) => {
		if( error){
			return ;
		}else{
			callback(data);
		}
	});
}