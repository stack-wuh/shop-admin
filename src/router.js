import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      redirect: '/index/dashboard',
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/index/dashboard',
          component: () => import('@/views/indexManage/overview')
        },
        {
          path: '/index/statistic',
          component: () => import('@/views/indexManage/statistic')
        }
      ]
    },
  ]
})
