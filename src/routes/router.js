import VueRouter from 'vue-router'
import Vue from 'vue'


Vue.use(VueRouter)


import Home from "./Home.vue";
import Me from "./Me.vue";

export default new VueRouter({routes: [
  {path: '/', component: Home},
  {path: '/me', component: Me},
]})