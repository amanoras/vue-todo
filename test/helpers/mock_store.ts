import Vue from "vue";
import Vuex from "vuex";
import { Todo } from "@/todos"

Vue.use(Vuex);

export const state = {
    todoList: new Array<Todo>()
};

export const mutations = {
    addTodo(state: any, payload: any){

    },

    toggleStatus(state: any, payload: any) {
        
    }
};
