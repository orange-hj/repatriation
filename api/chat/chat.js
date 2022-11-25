import http from '@/utils/http.js'

//创建聊天
export function createChat(data){
	return http({
		url:"/createChat",
		method:'GET',
		data:data,
	})
}

//聊天列表
export function chatList(data){
	return http({
		url:"/chatList",
		method:'GET',
		data:data,
	})
}





