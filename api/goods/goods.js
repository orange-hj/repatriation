import http from '@/utils/http.js'


export function homeGoodsList(data){
	return http({
		url:"/getGoodsList",
		method:'GET',
		data:data,
	})
}

