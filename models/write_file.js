/**
 *  写文件模块
 *  
 *  包含 同步写文件 和异步写文件
 */
var fs = require("fs");
module.exports={
	/**
	 *  同步写文件
	 */
	writeFileSync:function(path,data){
		fs.writeFileSync(path, data, {"encoding":"utf-8"});
		console.log("同步写文件成功");
	},
	writeFile:function(path,data,callback){  // 异步写文件方法
		fs.writeFile(path, data, {"encoding":"utf-8"}, (error,data)=>{
			if( error ) throw error;
			else {
				console.log("异步写文件成功");
				callback("异步写文件成功");
			}
		});
	}

};