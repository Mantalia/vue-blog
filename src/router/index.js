import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import blog from '@/components/blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
