/**
 *  读取文件模块
 */
var fs = require('fs'); //获取读取文件模块
module.exports = {
	syncReadFile:function ( path ){   // 同步读取文件 ,采用同步会导致Node.js性能损失
		var data = fs.readFileSync( path ,"utf-8");
		console.log("文件内容：/n"+data);
		return data;
	},
	readFile:function (path,callback){  // 异步读取文件
		/*fs.readFile(path,{"encoding":"utf-8"},function(erro,data){
			if(erro){
				console.log( erro );
			}else if( data ){
				console.log( data );
				callback(data);
			}
		});
		*/
		
		fs.readFile(path,{"encoding":"utf-8"},(erro,data)=>{
			if(erro){
				console.log( erro );
			}else if( data ){
				console.log( data );
				callback(data);   // 回调callback函数
			}
		});
		
	}
};