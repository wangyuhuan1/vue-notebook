import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// import {Button} from 'vant'
Vue.config.productionTip = false
Vue.prototype.axios=axios
// Vue.use(Button)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
