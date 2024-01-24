import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/LoginView.vue"
import ListeEmploye from"../views/ListeEmploye.vue"
import Login from"../views/Login.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:"/ert",
    name:"loginView",
    component:LoginView
   },{
    path:"/listeEmploye",
    name:"listeEmploye",
    component:ListeEmploye
  
   },{
    path:"/login",
    name:"Login",
    component:Login
   }
  ]
})
  
export default router
