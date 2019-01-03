// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Income from './Income'
import Result from './Result'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#income',
  components: { Income },
  template: '<Income/>'
})

new Vue({
  el: '#result',
  components: { Result },
  template: '<Result/>'
})
