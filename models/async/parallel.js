/**
 *  测试 异步流程控制  --- 并发无关联  parallel
 */
var async = require( "async" );  // 引入异步流程控制 模块
/**
 *  语法  异步流程控制  并发无关联  parallel
 * @returns
 */
function exce(){
	async.parallel(
		{
			one:function(done){
				console.log("并发无关联 one 运行");
				/*
				 * //此处回调函数，如果抛出异常，会导致下一个流程的回调函数不执行，即done 不执行
				 * 但是流程可能会走完，也有可能走不完
				 */
				done("444","并发无关联 one 运行完毕");  
			},
			two:function(done){
				console.log("并发无关联 two 运行");
				done(null,"并发无关联 two 运行完毕");
			}
		},function ( erro ,rs){
			console.log(erro);
			console.log(rs);
		}
	);
}

// exce();

/**
 *   示例代码
 * @returns
 */
function exce1(){
	async.parallel(
		{
			one:function(done){
				var i = 0;
				setInterval(function (){
					i++;
					console.log("并发无关联 one 运行 ,时间："+new Date() );
					if( i >= 3 ){
						clearInterval(this);
						done("4444","并发无关联 one 运行完毕");
					}
				},1000);
			},
			two:function(done){
				var i = 0;
				setInterval(function (){
					i++;
					console.log("并发无关联 two 运行 ,时间："+new Date() );
					if( i >= 3 ){
						clearInterval(this);
						done("","并发无关联 two 运行完毕");
					}
				},1000);
			}
		},function(erro,data){
			console.log(erro);
			console.log(data);
		}
	);
}

exce1();
