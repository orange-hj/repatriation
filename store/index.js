// 页面路径：store/index.js 
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state:{
		matchDetailData:{},
		studyDetailData:{},
		QRCode:'',
		companyData:null,
		shareRoute:'',
		shareRoute2:'',
		shareParam_code:null
	},
	mutations:{
		setMatchDetailData(state,data){
			state.matchDetailData = data
		},
		setStudyDetailData(state,data){
			state.studyDetailData = data
		},
		setQRCode(state,data){
			state.QRCode = data
		},
		setCompanyData(state,data){
			state.companyData = data
		},
		setShareRoute(state,data){
			state.shareRoute = data
		},
		setShareRoute2(state,data){
			state.shareRoute2 = data
		},
		setShareParam_code(state,data){
			state.shareParam_code = data
		},
	}
})


export default store
