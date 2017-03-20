import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Tutorial from '@/components/tutorial'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/tutorial',
      name: 'Tutorial',
      component: Tutorial
    }
  ]
})
