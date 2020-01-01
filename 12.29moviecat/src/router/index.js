import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由配置文件
Vue.use(VueRouter) //注册插件使用

const routes = [
    {
        path: '/',
        name: 'home',
        component: () =>
            import ( /* webpackChunkName: "about" */ "../components/Home.vue")
    },
    {
        path: '/upcoming',
        name: 'upcoming',
        component: () =>
            import ( /* webpackChunkName: "about" */ "../components/Upcoming.vue")
    }, 
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router