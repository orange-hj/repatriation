'use strict';
exports.main = async (event, context) => {
	console.log(event);
	const db = uniCloud.database()
	const collection = db.collection('user_account')
	if(event.type == 0){
		return {
			code:1002,
			data:null,
			message:'暂时无法验证码登录',
		}
	}
	if(event.type == 1){
		const res = await collection.where({phone:event.phone}).get()
		console.log(res);
		if(res.affectedDocs){
			if(res.data[0].password == event.password){
				return {
					code:200,
					data:true,
					message:'登录成功',
				}
			}else{
				return {
					code:1004,
					data:null,
					message:'密码不正确',
				}
			}
		}else{
			return {
				code:1003,
				data:null,
				message:'账号未注册',
			}
		}
	}
};
