/**
 * Created by QCL on 2017/5/18.
 */
import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.prototype.$ajax = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
