/**
 *   测试 覆盖exports对象 
 */

// 获取js 模块
var Hello = require("./hello.js");

// 实例化对象
he = new Hello();
he2 = new Hello();

he.setName("abc");
he2.setName("123123")


he.sayHello();
he2.sayHello();

console.log( Hello.num );
