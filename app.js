/**
 * Module dependencies.
 */

/*
 * // 因为 express 框架是依赖 connect 框架（Node的一个中间件框架）创建而成的，
 *   可查阅 connect 文档：http://www.senchalabs.org/connect/
 *   和 express 官方文档：http://expressjs.com/api.html 了解更多内容。
 */
var express = require('express')   
  , routes = require('./routes')  // routes  是一个文件夹形式的本地模块
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments

/*
 * 设置端口为 process.env.PORT 或 3000 process.env.PORT 为环境变量中设置
 * 在linux下  依次执行
 *	只设置一次有效 $ PORT=1234 
 *	只设置永久有效  $ export PORT=1234
 *  node xxoo.js
 * 在window下  依次执行
 *	默认是永久情况
 *  set PORT=1234
 *  node xxoo.js
 */ 
app.set('port', process.env.PORT || 3000); 
// 设置 views 文件夹为视图文件的目录，存放模板文件，__dirname 为全局变量，存储着当前正在执行脚本所在文件夹的绝对路径
app.set('views', __dirname + '/views');
app.set('view engine', 'jade'); // 设置视图模版引擎为 jade
/* 
 *  Express 依赖于 connect，提供了大量的中间件，可以通过  app.use 启用
 *  
 * app.use([path], function)：使用中间件 function，可选参数path默认为"/" 
 * app.use(express.favicon())：connect 内建的中间件，使用默认的 favicon 图标，
 * 如果想使用自己的图标，需改为app.use(express.favicon(__dirname + '/public/images/favicon.ico')); 
 * 这里我们把自定义的 favicon.ico 放到了 public/images 文件夹下。
 */
app.use(express.favicon());
/*
 *  connect 内建的中间件，在开发环境下使用，在终端显示简单的不同颜色的日志，比如在启动 app.js 后访问 localhost:3000，终端会输出：
 *  Express server listening on port 3000 GET / 200 21ms - 206b GET /stylesheets/style.css 304 4ms 
 *  数字200显示为绿色，304显示为蓝色。假如你去掉这一行代码，不管你怎么刷新网页，终端都只有一行 Express server listening on port 3000。
 */
app.use(express.logger('dev'));
/* 
 * bodyParser作用是对post请求的请求体进行解析
 * bodyParser用于解析客户端请求的body中的内容,内部使用JSON编码处理,url编码处理以及对于文件的上传处理
 */
app.use(express.bodyParser());
// 方法覆盖  可以将post和get请求转换成put delete请求    用于支持定制的 HTTP 方法
app.use(express.methodOverride());
/*
 * 里边会创建一个路由map，把类似app.get、app.post等的所有路由的url和callback做一个映射保存，
 * 当req.url命中路由时执行相应的回调。如果不显式调用app.use(app.router);则会在第一条路由里边隐式调用。
 * 
 * 注意： 其与静态资源路由的位置
 */
app.use(app.router);
/*
 * 	//设置静态文件目录 
 *  express.static指定了静态页面的查找目录，如果定义express.static('/var/www')，
 *  当用户向node请求http://server/file.html，node将会自动查找/var/www下面找server/file.html
 *  
 *  注意： 与 app.use(app.router);的位置
 */
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler()); // errorHandler 是错误控制器
}

/*
 * 是一个路由控制器，用户如果访问“ / ”路径，则由  routes.index来控制。
 * Express 在处理路由规则时，会优先匹配先定义的路由规则，因此后面相同的规则被屏蔽，
 * 但是可以通过 回调函数的第三个参数next,手动执行下一个匹配规则
 * 
 */  
app.all('/', routes.index);  // 将所有方式的对 ‘/’请求,都交给 routes.index 处理
app.get('/time', routes.time); // get 请求
app.get('/users', user.list);
app.all('/users/:username',function(req,res,next){
	 console.log("登录用户是：%s", req.params.username );
	 next();  // 通过调用 回调函数的第三个参数next，执行下一个拦截
});
app.get('/users/:username', user.username);  // 使用变量路径进行匹配   注意：此时的匹配会被上一个 /users/:username 拦截，而不会执行
app.get( '\/user\/([\^/]+)\/?' ,user.reg );  // 使用正则表达式匹配路径


http.createServer(app).listen(app.get('port'), function(){
	var port = this.address().port;
	var host = this.address().address;
	console.log('Express server listening on port ' + app.get('port'));
	// console对象的上面5种方法，都可以使用printf风格的占位符。不过，占位符的种类比较少，只支持字符（%s）、整数（%d或%i）、浮点数（%f）和对象（%o）四种。
	console.log('%s:%s',port,host); 
	console.log('服务器对象是：%o',this.address() );
	console.log('当前文件运行的路径是：%s',__dirname);
});



/*// 测试Node.js的代码
var testNode = require("./testNode");
testNode.setName("哈哈哈");
testNode.sayHello();*/