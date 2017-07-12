/**
 *  测试 异步流程控制 --- series 串行无关联
 *  
 *  首先 安装完Async 对象
 */

var async = require('async'); //引入异步流程控制对象


/**
 *  异步流程控制模块  串行无关联  语法
 * @returns
 */
function exec(){
	/*
	 *  异步流程控制模块  串行无关联
	 */
	async.series(
		{
			one:function( done ){   // 函数①  done 指的是回调函数
				console.log("one  执行完毕 ");
				/*done(error,data) 回调函数  
				 * 参数：一个是错误信息，一个是结果 
				 * 注意：如果此处的错误不为 null ，而是其他值,  比如 :done('ssssss',"one  执行完毕")  
				 *     就会导致运行中断，下面的two 函数不会执行
				 * 该函数必须有 否则流程会被中断  不在执行，如果done函数没有执行，那么该函数就不会继续向下执行
				 */
				done(null,"one  执行完毕"); 
			},
			two:function( done ){   // done 指回调函数
				console.log("two  执行完毕 ");
				done(null,"two  执行完毕");
			}
		},function ( error,rs ){  // 回调函数，此函数是整个流程结束后的回调函数，其中 error是流程运行的错误,rs是流程运行的结果集{}
			console.log( "错误是: "+error );
			console.log( "结果是: " );
			console.log( rs );
		}
	); 
}


// 运行语法演示   () 在js中是 表示运行的意思
// exec();


/**
 *   演示 
 * @returns
 */
function exce1(){
	async.series(
			{
				one:function (done){
					var i = 0 ;
					setInterval(function(){  // js 定时函数,定时执行操作
						i++;
						console.log(" 串行无关联 one 顺序 开始执行  ，时间：" + new Date() );
						if( i >= 3 ){
							clearInterval(this);  // 清除定时函数
							done(null,"one 运行完毕");
						}
					}, 1000);
				},
				two:function (done){
					var i = 0 ;
					setInterval(function(){  // js 定时函数,定时执行操作
						i++;
						console.log(" 串行无关联 two 顺序 开始执行， 时间： " + new Date() );
						if( i >= 3 ){
							clearInterval(this);
							done(null,"two 运行完毕");
						}
					}, 1000);
				}
			},function (error,rs){
				//console.log( "错误是: "+error );
				//console.log( "结果是: " );
				//console.log( rs );
				
				oneFun();
				twoFun();
			}
	);
}


 exce1();


/**
 *  对比函数
 * @returns
 */
function oneFun(){
	var i = 0 ;
	setInterval(function(){  // js 定时函数,定时执行操作
		i++;
		console.log(" oneFun 开始执行  ，时间：" + new Date() );
		if( i >= 3 ){
			clearInterval(this);
		}
	}, 1000);
}

function twoFun(){
	var i = 0 ;
	setInterval(function(){  // js 定时函数,定时执行操作
		i++;
		console.log(" twoFun 开始执行， 时间： " + new Date() );
		if( i >= 3 ){
			clearInterval(this);
		}
	}, 1000);
}


// oneFun();
// twoFun();
