// 项目配置案例
let IsDevtools = uni.getSystemInfoSync().platform === 'devtools'; // 默认测试地址, 根据平台决定是否使用线上地址

// let BaseUrl = 'https://school-admin.scjfu.com'; //旧接口调用

let BaseUrl = 'https://gx.scjfu.com' //正式环境
// let BaseUrl = 'http://gxcj-dev.scjfu.com' //测试环境

if (IsDevtools) {
	BaseUrl = 'http://gxcj-dev.scjfu.com' //测试环境
}

let AppId = "wx49ed84a58c6d9fc1";

let WhiteList = [
	"/api/miniprogram/home/getLocationList",	//定位数据
	"/api/miniprogram/home/getContactList",		//客服数据
	"/api/miniprogram/home/getBannerList",		//banner数据
	"/api/miniprogram/home/getRecommendList",	//推荐板块数据
	"/api/miniprogram/home/getMatchList",		//双创赛事板块数据
	// "/api/miniprogram/personal/getCourseList",	//课程板块数据
	// "/api/miniprogram/coupon/getCouponDetailById",	//优惠卷详情
	// "/api/miniprogram/coupon/getCouponPage",		//全部优惠卷
	"/api/miniprogram/policy/getPolicyById",	//政策详情
	"/api/miniprogram/policy/getPolicyPage",	//全部政策
	"/api/miniprogram/policy/getPolicyRecDegreePage",	//推荐政策
	"/api/miniprogram/policy/getPolicyInfoById",	//政策原文
]

module.exports = {
    IsDevtools: IsDevtools,
    BaseUrl: BaseUrl,
	AppId:AppId,
	WhiteList:WhiteList,
};
