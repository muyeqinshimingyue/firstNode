/**
 *  Node.js  异常的抛出
 */
module.exports = {
	exceptCat:function( num ){
		if( num == 0 ){
			throw '错误';
		}
		return 'sucess';
	}
}