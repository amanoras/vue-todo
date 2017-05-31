import render from "@/../test/helpers/render";

import Vue from "vue";
import Vuex from "vuex";
import { state, mutations } from "@/../test/helpers/mock_store"
import TodoList from "@/components/todo-list.vue";
import { Todo } from "@/todos"

describe("todo-list.vue", () => {
    let vm: any,
        todoList: Element;

    describe("component setup", () => {
        beforeAll(() => {
            let mock_store = new Vuex.Store({
                state,
                mutations
            })
            vm = render(TodoList, { store: mock_store });
            todoList = vm.$el;
        });

        it("should render the root container", () => {
            expect(todoList).toBeDefined();
        });
        
        it("should render the root container as a TABLE", () => {
            if(todoList != null){
                expect(todoList.tagName).toBe("TABLE");
            }
        });

        it("should set the table class", () => {
            if(todoList != null){
                expect(todoList.classList[0]).toBe("table");
            }
        });

        it("should set the table-striped class", () => {
            if(todoList != null){
                expect(todoList.classList[1]).toBe("table-striped");
            }
        });

        it("should set the table-bordered class", () => {
            if(todoList != null){
                expect(todoList.classList[2]).toBe("table-bordered");
            }
        });
    });
    
    describe("todo items", () => {
        it("should have no rows when todos is empty", () => {
            let mock_state = {
                    todoList: new Array<Todo>()
                },
                mock_store = new Vuex.Store({
                state: mock_state, 
                mutations
            });
            vm = render(TodoList, { store: mock_store });
            todoList = vm.$el;

            expect(todoList.querySelectorAll("tbody>tr").length).toBe(0);
        });

        it("should have rows when todos is not empty", () => {
            let todos = [new Todo(1, "Do something", false), new Todo(2, "Do something else", false)],
                mock_state = {
                    todoList: todos
                },
                mock_store = new Vuex.Store({
                    state: mock_state, 
                    mutations
                });
            
            vm = render(TodoList, { store: mock_store });
            todoList = vm.$el;

            expect(todoList.querySelectorAll("tbody>tr").length).toBe(2);
        });
    });
});