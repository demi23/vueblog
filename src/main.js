// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/index'
import App from './App'
import router from './router'
import $ from 'jquery' ;

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

// import VueResource from 'vue-resource'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
import webUrl from '../src/assets/js/public.js'
import dateFormat from '../src/assets/js/date.js';
Vue.prototype.webUrl= webUrl 
Vue.prototype.dateForma=dateFormat 
/* eslint-disable no-new */
//Vue.use(dateFormat)
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
  
Vue.use(VueQuillEditor)


new Vue({
  el: '#app',
  store,
  router,
  //VueQuillEditor,
  components: { App },
  template: '<App/>',
 
})
