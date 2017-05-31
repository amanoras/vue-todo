import Vue from "vue";
import Vuex from "vuex";
import { Todo } from "@/todos"


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: new Array<Todo>()
  },
  mutations: {
    addTodo(state, payload){
        let todo = new Todo(state.todoList.length + 1, payload.name, false);
        state.todoList.push(todo);
    },
    toggleStatus(state, payload) {
        let index = payload.id - 1;
        state.todoList[index].done = !state.todoList[index].done;
    }
  }
});
