/**
 *  读取文件的路由
 */
var readImg = require("./read_img");
module.exports = {
	readImg:function (res){
		readImg.readImg("../imgs/123.gif",res);
	}
};