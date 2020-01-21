import Vue from 'vue'
import Options from './Options'

global.browser = require('webextension-polyfill')

new Vue({
  el: '#options',
  render: h => h(Options)
})
