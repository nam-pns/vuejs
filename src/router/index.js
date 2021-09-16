import {createRouter, createWebHistory} from 'vue-router'

import HelloWorld from '../pages/HelloWorld.vue'
import Counter from '../pages/Counter.vue'
import Todo from '../pages/Todo.vue'
import Blog from '../pages/Blog.vue'

const routes = [
  {
    path: '/',
    component: HelloWorld
  },
  {
    path: '/counter',
    component: Counter
  },
  {
    path: '/todo',
    component: Todo
  },
  {
    path: '/blog',
    component: Blog
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
