import { createRouter, createWebHistory } from "vue-router"
import Users from "./components/Users.vue"
import Todos from "./components/Todos.vue"



const routes=[
   {
      name: 'Users',
      component: Users,
      path: '/',
   },
   {
      name: 'Todos',
      component: Todos,
      path: '/todos/:id',
   },
];

const router =createRouter({
   history:createWebHistory(),
   routes
})

export default router

