import Vue from "vue";
import Vuex from "vuex";
import { Todo } from "@/todos"

Vue.use(Vuex);

export const state = {
    todoList: new Array<Todo>()
};

export const getters = {
    getTodo: (state: any) => (id: Number): Todo | undefined => {
        return;
    }
}

export const mutations = {
    addTodo(state: any, payload: any){

    },

    toggleStatus(state: any, payload: any) {
        
    }
};
