// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 引入路由
import store from './store/index' // 引入vuex
import './plugins/element-ui/index' // 引入element-ui
import './service/index' // 引入http服务
import '../theme/index.css' // 引入自定义element-ui样式
import './assets/scss/app.scss' // 引入基础样式

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
