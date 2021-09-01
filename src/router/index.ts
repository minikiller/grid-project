import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import BaseGridView from '../views/BaseGridView.vue'
import SelectGridView from '../views/SelectGridView.vue'
import SortGridView from '../views/SortGridView.vue'
import FilterGridView from '../views/FilterGridView.vue'
import CheckboxGridView from '../views/CheckboxGridView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/base',
    name: 'base',
    component: BaseGridView
  },
  {
    path: '/select',
    name: 'select',
    component: SelectGridView
  },
  {
    path: '/sort',
    name: 'sort',
    component: SortGridView
  }, {
    path: '/filter',
    name: 'filter',
    component: FilterGridView
  }, {
    path: '/check',
    name: 'check',
    component: CheckboxGridView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
