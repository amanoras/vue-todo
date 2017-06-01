import Vue from "vue";
import Router from "vue-router";
import Todos from "@/components/todos.vue";
import TodoDetails from "@/components/todo-details.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/:id',
      name: 'TodoDetails',
      component: TodoDetails,
      props: true
    }
  ]
});
