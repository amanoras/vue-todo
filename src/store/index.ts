import Vue from "vue";
import Vuex from "vuex";
import { Todo } from "@/todos"


Vue.use(Vuex);

export const getters = {
  getTodo: (state: any, getters: any) => (id: Number) : Todo | undefined => {
    let todos: Array<Todo> = state.todoList;

    let todo = todos.find((todo) => {
      return todo.id == id;
    });

    return todo;
  }
};

export const mutations = {
  addTodo(state: any, payload: any){
      let todo = new Todo(state.todoList.length + 1, payload.name, false);
      state.todoList.push(todo);
  },
  toggleStatus(state: any, payload: any) {
      let index = payload.id - 1;
      state.todoList[index].done = !state.todoList[index].done;
  }
};

export default new Vuex.Store({
  state: {
    todoList: new Array<Todo>()
  },
  mutations
});
