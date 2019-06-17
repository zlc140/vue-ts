import Vue from 'vue'
import App from './App.vue'
import * as ElementUI from 'element-ui'
import router from './router'
import store from './store'
import './permission'
import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/index.js'


Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
