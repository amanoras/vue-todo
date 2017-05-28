// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";

import App from "./app.vue";
import Todos from "./components/todos.vue"
import { Todo } from "@/todos"

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: Todos
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  //router,
  template: "<App />",
  components: { App },
  router
});
