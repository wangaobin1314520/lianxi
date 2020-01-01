import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/tab1"
  },
  {
    path: '/tab1',
    name: 'tab1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tab1.vue')
  },
  {
    path: '/tab2',
    name: 'tab2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tab2.vue')
  },
  {
    path: '/tab3',
    name: 'tab3',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tab3.vue')
  },
  {
    path: '/tab4',
    name: 'tab4',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tab4.vue'),
    meta:{
      isAuto:true // 导航守卫终端
    }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail/Detail.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to,"到哪里去");

  if(to.meta.isAuto){
    console.log("需要导航守卫")
    // 判断本地存储中是否有token
    if(localStorage.getItem("token")){
      // 如果有token，继续向下走
      next()
    }else{
      // 如果没有token,跳转登录页面
      next({
        path:"/login"
      })
    }
  }

  // 如果不加next，所有的路由都不会走了
  next()
})

export default router
