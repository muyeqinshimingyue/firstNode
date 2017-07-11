/**
 *  动态网页 路由
 */
var fs = require('fs');
var querystring = require('querystring');
module.exports = {
	login:function ( req,res ){
		/**
		 *  采用闭包处理 1
		 */
		// var call = getCall(req,res);
		// readFile('../views/login1.html',call);
		
		/**
		 *  采用闭包处理 2  如果嵌套函数使用了外面函数的变量或者参数，那么这个嵌套函数就形成了一个闭包（Closure）
		 */
		res.writeHeader(200,{"content-type":"text/html;charset=utf-8"});
		var querystr ="";
		req.on("data",function(chunk){
			querystr += chunk;
		});
		var arr = ['name','pwd'];
		req.on("end",function(){
			querystr = querystring.parse(querystr);
			function callback(data){   // 定义回调函数
				var dataStr = data.toString();
				for(var i=0;i<arr.length;i++){
		            re = new RegExp('{'+arr[i]+'}','g'); // 
		            dataStr = dataStr.replace(re,querystr[arr[i]]);
		        }
		        res.write(dataStr);
		        res.end();//不写则没有http协议尾
			}
			readFile('../views/login1.html',callback); 
		});
		
		
	},
	showImg:function( req,res ){
		var call = getCallBack(res);
		readImg("../imgs/123.gif",call);
	}
};

/**
 *  读取图片
 * @param path   路径
 * @param callback  回调
 * @returns
 */
function readImg(path,callback){
	fs.readFile(path, 'binary', (error,data)=>{
		if( error ){
			return ;
		}else{
			callback(data);
		}
	});
}

/**
 *  闭包  处理 图片返回
 * @param res
 * @returns
 */
function getCallBack(res){
	res.writeHeader(200,{"content-type":"image/jpeg"});
	function callback(data){
		res.write(data,'binary');
		res.end();
	}
	return callback;
}

/**
 *  读取文件
 * @param path   路径
 * @param callback  回调
 * @returns
 */
function readFile(path,callback){
	fs.readFile(path, {"encoding":"utf-8"}, (error,data) => {
		if( error  ){
			callback( error.toString() );
		}else{
			callback( data.toString() );
		}
	});
}

/** 
 *  闭包 --- 输出文件到页面
 * 
 * @param res
 * @returns
 */
function getCall( req,res ){
	res.writeHeader(200,{"content-type":"text/html;charset=utf-8"});
	var querystr ="";
	req.on("data",function(chunk){
		querystr += chunk;
	});
	var arr = ['name','pwd'];
	
	req.on("end",function(){
		querystr = querystring.parse(querystr);
	});
	function callback(data){
		var dataStr = data.toString();
		for(var i=0;i<arr.length;i++){
            re = new RegExp('{'+arr[i]+'}','g'); // 
            dataStr = dataStr.replace(re,querystr[arr[i]]);
        }
        res.write(dataStr);
        res.end();//不写则没有http协议尾
	}
	return callback;
}
