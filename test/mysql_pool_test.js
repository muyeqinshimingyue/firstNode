/**
 *  Mysql数据库连接池 测试 
 */
var MysqlPool = require("../models/mysql/mysql_pool"); // 引入连接池对象

var mysqlPool = new MysqlPool();  //实例化对象

var pool = mysqlPool.getPool();   // 回去连接池

/**
 *  从连接池中获取连接  
 *  
 *  注意：该方法是异步的，所以是通过回调函数返回错误和连接
 */
for( var i =0 ;i<=100 ;i++ ){
	pool.getConnection(function(error,connection){
		try { // 防止代码异常
			if( error ){
				console.log("获取连接失败");
				return;
			}
			var insertSql = "INSERT INTO USERS(NAME,PWD) VALUES (?,?)";
			var insertParam = ['eeee','eeeee'];
			connection.query(insertSql,insertParam,function(error,data){
				if( error ){
					console.log("插入数据失败");
					console.log(error);
				}else{
					console.log("插入数据成功");
					// connection.release();  // 释放链接
				}
			});
			
			var selectSql = "select * from users";
			connection.query(selectSql,function(error,data){
				if( error ){
					console.log("查询数据失败");
					console.log(error);
				}else{
					console.log("查询数据成功");
					console.log(data);
					// connection.release();  // 释放链接
				}
			});
			
			var deleteSql = "DELETE FROM USERS WHERE NAME = ?";
			var deleteParam ='eeee';
			connection.query(deleteSql,deleteParam,function(error,data){
				if( error ){
					console.log(" 删除数据失败");
					console.log(error);
				}else{
					console.log("删除数据成功");
					console.log(data);
					// connection.release();  // 释放链接
				}
			});
		} catch (e) {
			
		}finally{
			//connection.commit();
			connection.release();  // 释放链接
		}
	});
}

