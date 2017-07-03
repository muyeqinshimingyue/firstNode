/**
 *  测试 单例模式
 */

var sing = require("./singleton.js");

sing.setName("sdfdsafsa");

var sing2 = require("./singleton.js");  // 此处虽然再次加载了模块，但是实际上并没有直接加载

sing2.setName("sing2");    // 此处会将上次定义的名称覆盖

sing.setHello();          // 打印   Hello sing2 !!!! 

sing2.setHello();         // 打印   Hello sing2 !!!! 