import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import UserCenter from './views/userCenter/UserCenter'
import Login from './views/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
        children:[
            {
                path:'/userCenter',
                name:'userCenter',
                component:UserCenter,
            }
        ]
    },
      {
          path:'/login',
          name:'login',
          component:Login,
      }


  ]
})
