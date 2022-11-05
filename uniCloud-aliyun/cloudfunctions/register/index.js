'use strict';
exports.main = async (event, context) => {
	console.log(event);
	const db = uniCloud.database()
	const collection = db.collection('user_account')
	if(event.type == 0){
		return {
			code:1002,
			data:null,
			message:'暂时无法验证码注册',
		}
	}
	if(event.type == 1){
		const res = await collection.where({phone:event.phone}).get()
		if(res.affectedDocs){
			return {
				code:1001,
				data:null,
				message:'账号已注册',
			}
		}else{
			collection.add({phone:event.phone,password:event.password})
			return {
				code:200,
				data:true,
				message:'添加成功',
			}
		}
	}
};
