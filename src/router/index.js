import { createRouter, createWebHistory } from 'vue-router'
import ajouterconge from "../views/ajouterconge.vue"
import ListeEmploye from"../views/ListeEmploye.vue"
import Login from"../views/Login.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:"/ajouterconge",
    name:"ajouterconge",
    component:ajouterconge
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
