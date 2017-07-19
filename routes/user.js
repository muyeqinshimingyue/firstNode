
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};
/**
 *  用于测试路径中存在变量
 */
exports.username= function (req,res){
	var username = req.params.username;
	res.send("当前访问的用户是："+username);
}
/**
 *  正在匹配路径
 */
exports.reg = function (req,res){
	var username = req.params[0];
	var username1 = req.params[1];
	res.send("当前访问的用户是( 正则)："+req.params);
}