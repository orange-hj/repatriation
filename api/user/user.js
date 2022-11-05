
export function registerPSW(data){
	return uniCloud.callFunction({
		name:'user',
		data:data,
		success:(res) => {
			console.log(res);
		}
	})
}