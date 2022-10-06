// import Vue from 'vue/dist/vue'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // render: h => h(App),
  el:"#app",
  render(createElement){
    
    return createElement(App)
  }
  // template:`<App></App>`,
  // components:{App}
})
// .$mount('#app')


