import Vue from 'vue'
import Vuex from 'vuex'

//用户响应式组件中的动作
const actions = {
  // jia(context,value){
  //   context.commit('JIA',value)
  // },
  // jian(context, value) {
  //   context.commit('JIAN',value)
  // },
  jiaOdd(context, value) {
    console.log(context)
    if(context.state.sum%2!=0){
      context.commit('JIA', value)
    }
    
  },
  jiaWait(context, value) {
    setTimeout(() => {
      context.commit('JIA', value)
    }, 1000);
    
  },

}
const getters ={
  bigSum(state){
    return state.sum*10
  }
}

//用于操作数据
const mutations = {
  JIA(state,value){
    state.sum += value
  },
  JIAN(state,value){
    state.sum -= value
  },
  
 
}


//用于存储数据
const state = {
  sum: 0,
  school:'尚硅谷',
  subject:'前端'
}
Vue.use(Vuex)

const vuex = new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
export default vuex 