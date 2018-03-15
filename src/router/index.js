import Vue from 'vue'
import Router from 'vue-router'
import SignupPage from '@/components/SignupPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignupPage',
      component: SignupPage
    }
  ]
})
