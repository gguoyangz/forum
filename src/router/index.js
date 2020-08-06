import Vue from 'vue'
import VueRouter from 'vue-router'
import All from '../views/All.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'All',
    component: All
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import('../views/Experience.vue')
  },
  {
    path: '/position',
    name: 'Position',
    component: () => import('../views/Position.vue')
  },
  {
    path: '/interview',
    name: 'Interview',
    component: () => import('../views/Interview.vue')
  },
  {
    path: '/other',
    name: 'Other',
    component: () => import('../views/Other.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
