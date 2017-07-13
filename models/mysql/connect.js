/**
 *  测试直连Mysql
 */
var mysql = require('mysql');  // 导入Mysql连接模块
// 获取连接对象connection ,此时并未和数据库连接
var connection = mysql.createConnection({
	host:'localhost',
	port:"3306",
	user:"root",
	password:"root",
	database:"test"
}); 

// 连接数据库
connection.connect(function(error){
	if( error ){
		console.log("连接数据库异常");
		console.log(error);
		return ;	// 连接异常 ，就没有必要再继续执行
	}
	console.log("连接数据库成功");
});

/*
 *   执行SQL语句
 */
// 插入
var insertSql = ' INSERT INTO USERS(NAME,PWD) VALUES(?,?)';
var insertParam =['插入','插入'];
connection.query(insertSql,insertParam,function(error,rs){
	try { // 出现异常后，代码依然可以正常关闭连接
		if(error){
			console.log( "插入数据失败" );
			console.log( error );
		}else{
			console.log( "插入数据成功" );
			console.log( rs );
		}
	} catch (e) {
	
	}
	
});

// 查询
var selectSql = 'SELECT * FROM USERS';
connection.query(selectSql,null,function(error,rs){
	try { // 出现异常后，代码依然可以正常关闭连接
		if(error){
			console.log( "查询数据失败" );
			console.log( error );
		}else{
			console.log( "查询数据成功" );
			console.log( rs ); // 结果数组
			console.log( rs[0].NAME );  //打印第一行结果
		}
	} catch (e) {
		// TODO: handle exception
	}
	
});

// 删除 
var deleteSql = "delete from Users where name = ? ";
var deleteParam ='插入';  // var deleteParam =['插入'];
connection.query(deleteSql,deleteParam,function(error,data){
	try {  // 出现异常后，代码依然可以正常关闭连接
		if(error){
			console.log( "删除数据失败" );
			console.log( error );
		}else{
			console.log( "删除数据成功" );
			console.log( data );
		}
	} catch (e) {
	}
});

// 更新
var updateSql = 'update Users set name="ccc" where id = ? ';
var updateParam ='1';
connection.query(updateSql,updateParam,function(error,rs){
	try { // 出现异常后，代码依然可以正常关闭连接
		if(error){
			console.log( "修改数据失败" );
			console.log( error );
		}else{
			console.log( "修改数据成功" );
			console.log( rs );
		}
	} catch (e) {
		console.log( e );
	}
});

// 关闭连接
connection.end(function(error){
	if(error){
		console.log( "关闭连接失败" );
		console.log( error );
		return;
	}
	console.log("关闭连接成功");
});