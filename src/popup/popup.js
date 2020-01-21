import Vue from 'vue'
import App from './App'
import store from '../store/index'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VeeValidate from 'vee-validate';
 
Vue.use(VeeValidate);
Vue.use(VueAxios, axios)

require('./assets/css/main.scss');

global.browser = require('webextension-polyfill')
Vue.prototype.$browser = global.browser

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

// POP-UP LOGIC 
class PopUp{
  static getUrl(callback) {
    chrome.tabs.executeScript({
      code:"window.location.origin;"
    }, (origin) => {
      console.log(origin);
      callback(origin);
    });
  }
  static trigger(){
    this.getUrl((p)=>alert(p))
  }
}
//triggers when extension pop-up shows up
PopUp.trigger();


