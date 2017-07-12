/**
 *  测试瀑布流 waterfall   串行有关联
 */
var async = require('async'); // 引入 异步流程控制模块
/**
 *  语法  串行有关联
 * @returns
 */
function exce(){
	async.waterfall(
		[   // 瀑布流中函数不再是对象，而是数组，所有他的函数也不能是命名函数
		    function(done){
		    	console.log(" 瀑布流 1 完成 ");
		    	/*
		    	 * 此时的回调函数 第一个是错误，第二是结果，该结果会传递给下一个函数
		    	 */
		    	done(null,"瀑布流 1 结果 ");
		    },
		    function (preValue,done){//第二个函数： preValue指代第一个函数的结果 ，done 回调
		    	console.log(" 瀑布流 2完成 ");
		    	console.log("  上一个函数 的结果是： " + preValue);
		    	done(null,"瀑布流 2 结果 ");
		    }
		  
		],function ( error,data){
			console.log(error); // 错误
			console.log(data); // 结果： 只会打出第二个函数执行的结果
		}
	);
}


// exce();

/**
 *  示例代码 
 * @returns
 */
function exce1(){
	async.waterfall(
		[
		 function(done){
			var i = 0;
			setInterval(function (){
				i++;
				console.log("瀑布流 1 运行 ,时间："+new Date() );
				if( i >= 3 ){
					clearInterval(this);
					done("","瀑布流 1 运行完毕");
				}
			},1000);
		 },
		 function( pervalue,done){
			console.log("瀑布流 1 的 结果："+pervalue );
			var i = 0;
			setInterval(function (){
				i++;
				console.log("瀑布流 2 运行 ,时间："+new Date() );
				if( i >= 3 ){
					clearInterval(this);
					done("","瀑布流 2 运行完毕");
				}
			},1000);
		 }
		],function( error,data ){
			console.log(error); // 错误
			console.log(data); // 结果： 只会打出第二个函数执行的结果
		}
	);
}

exce1();