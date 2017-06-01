import render from "@/../test/helpers/render";

import Vue from "vue";
import Vuex from "vuex";

import TodoDetails from "@/components/todo-details.vue";
import { state } from "@/../test/helpers/mock_store"
import { mutations, getters } from "@/store"

import { Todo } from "@/todos"

describe("todo-details.vue", () => {
    let vm: any,
        todoDetails: HTMLElement;

    describe("todo", () => {
        beforeEach(() => {
            
        });

        it("should return a Todo when store contains a Todo with the same ID", () => {
            state.todoList = [ new Todo(1, "Something", false) ];
            let options = {
                propsData: {
                    id: 1
                },
                store: new Vuex.Store({
                    state,
                    getters,
                    mutations
                })
            };
            vm = render(TodoDetails, options);

            let todo = vm.todo;

            expect(todo).toBeDefined();
            expect(todo).toEqual(state.todoList[0]);
        });

        it("should return undefined when store does not contain a Todo with the same ID", () => {
            state.todoList = [ new Todo(1, "Something", false) ];
            let options = {
                propsData: {
                    id: 2
                },
                store: new Vuex.Store({
                    state,
                    getters,
                    mutations
                })
            };
            vm = render(TodoDetails, options);

            let todo = vm.todo;

            expect(todo).toBeUndefined();
        })
    });
});
