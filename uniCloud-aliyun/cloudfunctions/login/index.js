'use strict';
const uniID = require('uni-id');

exports.main = async (event, context) => {
	let res = await uniID.loginByWeixin({code:event.code})
	
	return res
};