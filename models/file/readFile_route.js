/**
 *  编写读取文件的路由模块
 *  分为同步读取和异步读取
 *  
 */
var readFile = require("./read_file");
module.exports = {
	sync:function (res){  // 同步读取文件
		/**
		 *  同步读取文件
		 */
		console.log("开始同步读取文件");
		res.write("开始同步读取文件<br/>");
		
		/*
		 * 	./ 是指 启动的JS文件所在路径的上一级路径（启动JS所在的文件夹路径）
		 *   ../ 路径是相对于启动的JS文件所在路径上两级路径,不是当前JS的路径(require除外)，
		 *   require的不同 ； require中的./ 指的是当前JS文件所在的上级目录
		 *   一般推荐使用绝对路径，因为启动js的路径可能会变化
		 */
		var data = readFile.syncReadFile("../models/readFileSync.html"); // 同步读取文件，传入文件位置，(注意路径)
		res.write("文件内容是：<br/>"+data+"<br/>");
		res.write("<br/>同步读取文件完成");
		res.write("<br/>主程序结束");
		res.end();
		
	},
	async:function(res){  // 异步读取文件
		/**
		 * 异步读取文件
		 */
		console.log("开始异步读取文件");
		res.write("开始异步读取文件<br/>");
		
		/**
		 *  此处采用js闭包写法，（就在于会将变量保存，就是当前线程结束，只要该方法没有执行完，就不会释放）
		 *  让线程读取文件完毕后，回调该方法 ，位置在哪里并不重要的
		 *  
		 *  将文件内容返回前端
		 */
		function callb(data){    
			res.write( "文件内容是：<br/>"+data+"<br/>" );
			res.write("<br/>异步读取文件完成");
			res.end();
		}
		
		readFile.readFile("../models/readFileAys.html", callb );
		res.write("<br/>主程序结束");
		
	}
};