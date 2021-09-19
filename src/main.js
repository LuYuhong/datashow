import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from 'vue-router'
import routers from './routers'
// import axios from "axios"

// axios.defaults.baseURL = 'http://127.0.0.1:8080/api'

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

const bus = new Vue()
Vue.prototype.$bus = bus;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
