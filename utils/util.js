

//选择框
export function showActionSheet(menus){
	console.log(menus);
	return new Promise((resolve, reject) => {
		uni.showActionSheet({
			itemList: menus.map((menu) => menu.title),
			success:({tapIndex}) =>{
				resolve(tapIndex)
			}
		})
	});
}