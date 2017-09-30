import Vue from 'vue'
import Router from 'vue-router'
import Vueresource from 'vue-resource'
import Index from '../my/index/index.vue'

Vue.use(Router)
Vue.use(Vueresource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
