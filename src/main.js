// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import i18n from './language'
import axios from './axios'
import ElementUI from 'element-ui'
import common from './common'

// 去掉告警消息
Vue.config.productionTip = false

Vue.use(ElementUI)

// 注册axios
Vue.prototype.$axios = axios

// 注册common方法
Object.keys(common).forEach(objName => {
	Vue.prototype[objName] = common[objName]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  i18n,
  render: h => h(App),
  router
})
