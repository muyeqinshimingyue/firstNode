/**
 *   类目 路由
 *    关于类目的操作，都由该路由负责
 *    express 3 对于路由模块独立，没有express4 支持的好
 */
var queryString = require("querystring");
function route(req,res){

     /*
     * request 对象 的相关操作
     */
    console.log( req.method );  // 获取访问的方法
    console.log( req.baseURI );  // 获取访问路由的路径
    console.log( req.path );     //获取访问的路径

    console.log( req.query ) ;  // 获取查询字符串的json对象
    console.log( req.query.id ) ;// 获取查询字符串的json对象中的某个信息
    console.log(  req.headers );  // 获取 请求头
    console.log( "  获取请求头中的客户端信息 ： "+req.headers['user-agent'] ); // 获取请求头中的摸个信息
    console.log( "  获取请求头中的客户端信息 ： "+req.get('user-agent') ); // 获取请求头中的某个信息

    var  postdata ='';
    req.on('data',function (chunk) {
        postdata += chunk;
    });
    req.on('end',function () {
        console.log("post 请求参数："+  postdata  );
    });

    res.send("获取类目列表");
}
module.exports = route;