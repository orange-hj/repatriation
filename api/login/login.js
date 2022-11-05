import http from '@/utils/http.js'

const user = uniCloud.importObject('user') // 导入云对象

export function getUserInfo(data){
	return http({
		url:"https://9f4ac7c2-5851-4e96-bf4d-26837649e2dc.bspapp.com/user",
		method:'GET',
		data:data
	})
}

