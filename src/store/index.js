import Vue from 'vue'
import Vuex from 'vuex'
import { mapState } from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
state : {
  token:sessionStorage.getItem(`token`)||``,
  userInfo:JSON.parse(sessionStorage.getItem(`userInfo`))||{},
  roleInfoList:JSON.parse(sessionStorage.getItem(`roleInfoList`))||[],
  activeIndex: '1',//导航选中
  isSignIn: 0,//0未登录，1admin，2游客
},

 getters: {
},

mutations: {
  changeIndex(state, n) {
    state.activeIndex = n
  },
  changeIsSignIn(state, n) {
    state.isSignIn = n
  },
//保存token
  setToken(state,token){
    sessionStorage.setItem(`token`,token)
    state.token=token;
  },
//保存用户登录信息
  setUserInfo(state, userInfo) {
    sessionStorage.setItem(`userInfo`, JSON.stringify(userInfo))
    state.userInfo = userInfo;
  },
  //保存菜单
  setRoleInfoList(state,roleInfoList){
    sessionStorage.setItem(`roleInfoList`, JSON.stringify(roleInfoList))
    state.roleInfoList=roleInfoList
  }
 
  },

actions:{
  updateToken(context,value){
    context.commit('setToken',value)
  },
  updateUserInfo(context,value){
    context.commit('setUserInfo',value)
  },
  updateRoleInfoList(context,value){
    context.commit('setRoleInfoList',value)
  }
  }
})
//  export default {
//   namespaced: true,
//   state,
//   getters,
//   mutations,
//   actions
// }