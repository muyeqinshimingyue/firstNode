/**
 *  读取文件的路由
 */
var readImg = require("./read_img");
module.exports = {
	readImg:function (res){
		/*
		 * 	./ 是指 启动的JS文件所在路径的上一级路径（启动JS所在的文件夹路径）
		 *   ../ 路径是相对于启动的JS文件所在路径上两级路径,不是当前JS的路径(require除外)，
		 *   require的不同 ； require中的./ 指的是当前JS文件所在的上级目录
		 *   一般推荐使用绝对路径，因为启动js的路径可能会变化
		 */
		readImg.readImg("../imgs/123.gif",res);  
	}
};