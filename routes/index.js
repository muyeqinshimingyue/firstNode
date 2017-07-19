
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { title: 'Express' });
};
exports.time = function(req,res){
	/*
	 * res.writeHeader(200,{'content-type':"text/html;charset=utf-8;"});
		res.write("欢迎您，访问该网站，现在是： "+ new Date().toString() );
		res.end();
	*/
	res.send( "欢迎您，访问该网站，现在是： "+ new Date().toString() );
};