import Vue from 'vue'
import App from './App'
import plugins from './Plugins'

Vue.use(plugins)

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render:h=>h(App)
})