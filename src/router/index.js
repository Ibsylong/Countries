import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Edit from '../views/Edit.vue'
import Add from '../views/Add.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/add/:id',
    name: 'Add',
    component: Add
  },
  {
    path: '/overview',
    name: 'Overview',
    component: () => import('../views/Overview.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
