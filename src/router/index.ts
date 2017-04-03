import Vue from "vue";
import Router from "vue-router";
import Todos from "@/components/todos";
import TodoDetails from "@/components/todo-details";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todos',
      component: Todos,
    },
    {
      path: '/todo/{id}',
      name: 'TodoDetails',
      component: TodoDetails,
    }
  ],
});
