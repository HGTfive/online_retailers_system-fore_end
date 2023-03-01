import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login"
import Home from "../components/Home"
import Goods from "../views/Goods"
import Register from "../views/Register"
import Detail from "../views/Detail"
import MyMessage from "../views/MyMessage"
import ChangeMsg from "../views/ChangeMsg"
import Store from '../views/Store'


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:'/register'
  },
  {
    path:'/login',
    name:"login",
    component:Login
  },
  {
    path:'/home',
    component:Goods,
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:"/mymessage",
    component:MyMessage
  },
  {
    path:'/detail',
    component:Detail
  },
  {
    path:'/changemsg',
    component:ChangeMsg
  },
  {
    path:'/store',
    component:Store
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router;
