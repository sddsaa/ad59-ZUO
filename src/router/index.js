import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'reco-user',
      component: reco-user,
      children:[
        {
          path: 'u',
          component: person,
        }
      ]
    }

  ]
})
