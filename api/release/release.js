import http from '@/utils/http.js'


export function release(data){
	return http({
		url:"/release",
		method:'POST',
		data:data,
	})
}

