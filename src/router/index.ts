// import { Resolve } from 'element-ui/types/cascader-panel'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// const helloWorld = (resolve: Resolve<NodeRequire>) => {
//   require.ensure(['@/views/HomeWork.vue'], () => {
//     resolve(require('@/views/HomeWork.vue'))
//   }, (err) => {}, 'helloWorld')
// }

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: 'homepage',
    children: [
      {
        path: 'homepage',
        name: 'homepage',
        component: () => import(/* webpackChunkName: "about" */ '../views/HomeView/HomeContent.vue')
      },
      {
        path: 'classify',
        name: 'classify',
        component: () => import(/* webpackChunkName: "about" */ '../views/classify/classify.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/game',
    name: 'game',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewGame.vue')
  },
  {
    path: '/work',
    name: 'work',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeWork.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
