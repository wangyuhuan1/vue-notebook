import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.axios = axios
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  store.state.isLoading = true
  return config;
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  store.state.isLoading = false
  return response;
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
