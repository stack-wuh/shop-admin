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
        },
        {
          path: '/website/banner',
          component: () => import('@/views/websiteManage/banner/banner')
        },
        {
          path: '/website/bottom',
          alias: ['/website/news', '/website/notice', '/website/integral'],
          component: () => import('@/views/websiteManage/bottom/index')
        },
        {
          path: '/website/agreement',
          component: () => import('@/views/websiteManage/agreement')
        },
        {
          path: '/website/classify',
          component: () => import('@/views/websiteManage/classify')
        },
        {
          path: '/website/partner',
          component: () => import('@/views/websiteManage/partner')
        }
      ]
    },
  ]
})
