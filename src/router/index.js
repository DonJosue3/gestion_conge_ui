import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/LoginView.vue"
import ListeEmploye from"../views/ListeEmploye.vue"
import ListeConge from"../views/ListeConge.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:"/login",
    name:"loginView",
    component:LoginView
   },{
    path:"/listeEmploye",
    name:"ListeEmploye",
    component:ListeEmploye
  
   },{
    path:"/listeConge",
    name:"ListeConge",
    component:ListeConge
   }
  ]
})
  
export default router
