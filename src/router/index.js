import Vue from 'vue'
import Router from 'vue-router'
import Pocetna from '@/components/Pocetna'
import Home from '@/components/Home'
import NewWorkout from '@/components/NewWorkout'
import Login from '@/views/Login'
import Signup from '@/views/Signup'

Vue.use(Router)
Vue.use(require('vue-moment'))

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pocetna',
      component: Pocetna
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/new',
      name: 'new-workout',
      component: NewWorkout
    }
  ]
})
