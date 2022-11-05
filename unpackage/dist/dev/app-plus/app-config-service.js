
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/home","pages/index/policy","pages/index/match","pages/index/mine","pages/index/login","pages/index/otherLogin","pages/index/register"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#8a8a8a","selectedColor":"#2c2c2c","borderStyle":"black","list":[{"selectedIconPath":"static/icon/home_selected.png","iconPath":"static/icon/home.png","pagePath":"pages/index/home","text":"首页"},{"selectedIconPath":"static/icon/policy_selected.png","iconPath":"static/icon/policy.png","pagePath":"pages/index/policy","text":"政策"},{"selectedIconPath":"static/icon/match_selected.png","iconPath":"static/icon/match.png","pagePath":"pages/index/match","text":"赛事"},{"selectedIconPath":"static/icon/user_selected.png","iconPath":"static/icon/user.png","pagePath":"pages/index/mine","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"Repatriation","compilerVersion":"3.5.3","entryPagePath":"pages/index/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#3781C3","navigationBarTextStyle":"white","navigationStyle":"custom"}},{"path":"/pages/index/policy","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"政策","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#F0B519","navigationBarTextStyle":"white","navigationStyle":"custom"}},{"path":"/pages/index/match","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"赛事","enablePullDownRefresh":false,"navigationBarTextStyle":"white","navigationStyle":"custom"}},{"path":"/pages/index/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/index/login","meta":{},"window":{"navigationBarTitleText":"登录","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/index/otherLogin","meta":{},"window":{"navigationBarTitleText":"登录","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/index/register","meta":{},"window":{"navigationBarTitleText":"注册","enablePullDownRefresh":false,"navigationStyle":"custom"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
