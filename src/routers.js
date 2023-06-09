import { createRouter, createWebHistory } from "vue-router"
import Users from "./components/Users.vue"
import Todos from "./components/Todos.vue"
import Albums from "./components/Albums.vue"
import Posts from "./components/Posts.vue"
import Photos from "./components/Photos.vue"




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
   {
      name: 'Posts',
      component: Posts,
      path: '/posts/:id',
   },
   {
      name: 'Albums',
      component: Albums,
      path: '/albums/:id',
   },
   {
      name: 'Photos',
      component: Photos,
      path: '/albums/photos/:id',
   },
];

const router =createRouter({
   history:createWebHistory(),
   routes
})

export default router

