import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import animated from 'animate.css'
Vue.use(animated)

new Vue({
  el:'#app',
  render:h=>h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  }
})