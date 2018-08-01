import VueRouter from 'vue-router'
import Vue from 'vue'


Vue.use(VueRouter)


import Home from "./Home.vue";

export default new VueRouter({routes: [
  {path: '/', component: Home}
]})