/**
 *  写文件路由
 */
var writeFile = require("./write_file");
module.exports = {
	wirteFileSync:function(res){
		writeFile.writeFileSync("./file/one.txt","我的Node.js写文件，--同步");
		res.write("文件写入完成");
		res.write("<br/>主程序结束<br/>");
		res.end();
	},
	wirteFile:function(res){
		writeFile.writeFile("./file/two.txt","我的Node.js写文件，--异步",cal);
		function cal(data){
			res.write(data);
			res.end();
		}
		res.write("<br/>主程序结束<br/>");
	}
};