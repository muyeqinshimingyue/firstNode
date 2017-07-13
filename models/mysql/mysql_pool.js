/**
 *  mysql 连接池
 */
var mysql = require( 'mysql' );

function MysqlPool(){
	this.flag = true; // 是否连接的标识
	
	this.pool = mysql.createPool({  // 创建连接池
		"host":"localhost",
		"port":"3306",
		"database":"test",
		"user":"root",
		"password":"root"
	});
	
	this.getPool = function (){
		if(this.flag){
			// 监听连接事件 （当连接池发生连接时，执行以下语句）
			this.pool.on("connection",function(connection){
				connection.query("SELECT 1+1 FROM DUAL");
				console.log("连接开始");
				this.flag = false;
			});
		}
		return this.pool;
	};
}

// var mysqlPool = new MysqlPool();  //实例化对象

// var pool = mysqlPool.getPool();   // 回去连接池

// module.exports = pool;
module.exports = MysqlPool;