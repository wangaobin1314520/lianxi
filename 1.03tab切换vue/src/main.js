import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引用vant
import Vant from 'vant';
import 'vant/lib/index.css';
// 注册vant
Vue.use(Vant);

// 引用element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// 注册element-ui
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
