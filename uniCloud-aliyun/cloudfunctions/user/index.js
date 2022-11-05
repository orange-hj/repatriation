'use strict';
exports.main = async (event, context) => {
	
	console.log(event);
	console.log("context",context);
	const db = uniCloud.database()
	const collection = db.collection('cc_user')
	const phone = await collection.where({
		phone:event.phone
	}).get()
	console.log(phone);
	return event
};
