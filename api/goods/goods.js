import http from '@/utils/http.js'

//首页商品列表
export function homeGoodsList(data){
	return http({
		url:"/getGoodsList",
		method:'GET',
		data:data,
	})
}

//商品详情
export function getGoodsDetail(data){
	return http({
		url:"/getGoodsDetail",
		method:'GET',
		data:data,
	})
}


