/**
 *  读取图片的模块
 */
var fs = require("fs");
module.exports = {
	readImg:function(path,res){
		fs.readFile(path, 'binary', (error,data) => {
			if( error ) throw error;
			res.write(data,'binary');
			res.end();
		});
	}
		
};