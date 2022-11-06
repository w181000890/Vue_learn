import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource' 
import store from './store/index'

Vue.config.productionTip = false

Vue.use(vueResource)
new Vue({
  el:'#app',
  render:h=>h(App),
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
})