import http from "@/utils/http.js"
import Vue from 'vue'

export function login(){
	return new Promise((resolve,reject) =>{
		uni.login({
			provider: 'weixin',
			success:async (res) => {
				if (res.errMsg == 'login:ok') {
					resolve(res)
				}
			},
			fail:(err) =>{
				reject(err)
			}
		})
	})
}

export function getToken(data) {
	return new Promise((resolve,reject) =>{
		uniCloud.callFunction({
			name:'login',
			data:{
				code:data.code
			},
			success:(res) => {
				resolve(res)
			},
			fail:(err) => {
				reject(err)
			}
		})
	})
}
