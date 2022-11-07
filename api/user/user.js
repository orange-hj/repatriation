import http from '@/utils/http.js'


export function getUserInfo(){
	return http({
		url:"/getUserInfo",
		method:'GET',
		showLoading:false
	})
}
