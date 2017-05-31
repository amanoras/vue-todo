import render from "@/../test/helpers/render";

import Vue from "vue";
import TodoItem from "@/components/todo-item.vue";
import Vuex from "vuex";
import { state, mutations } from "@/../test/helpers/mock_store"

import { Todo } from "@/todos"

describe("todo-item.vue", () => {
    let vm: any,
        todoItem: HTMLElement;

    describe("component setup", () => {
        beforeAll(() => {
            let options = {
                propsData: {
                    todo: new Todo(1, "Something", false)
                },
                store: new Vuex.Store({
                    state,
                    mutations
                })
            };
            vm = render(TodoItem, options);
            todoItem = vm.$el;
        });

        it("should render the root container", () => {
            expect(todoItem).toBeDefined();
        });
        
        it("should render the root container as a TR", () => {
            if(todoItem != null){
                expect(todoItem.tagName).toBe("TR");
            }
        });
    });
    
    describe("todo item", () => {
        it("should display the todo name", () => {
            let options = {
                propsData: {
                    todo: new Todo(1, "Something", false)
                },
                store: new Vuex.Store({
                    state,
                    mutations
                })
            };
            vm = render(TodoItem, options);
            todoItem = vm.$el;

            expect(todoItem.querySelectorAll("tr>td")[0].textContent).toBe("Something");
        });

        describe("toggling the checkbox", () => {
            beforeEach(() => {
                spyOn(vm.$store, "commit");
            });

            it("should call commit when the done setter is called", () => {
                vm.done = true;

                expect(vm.$store.commit).toHaveBeenCalled();
            });
        });

        describe("when todo.done is true", () => {
            beforeEach(() => {
                let options = {
                    propsData: {
                        todo: new Todo(1, "Something", true)
                    },
                    store: new Vuex.Store({
                        state,
                        mutations
                    })
                };
                vm = render(TodoItem, options);
                todoItem = vm.$el;
            });

            it("should set the done class when todo.done is true", () => {
                let target: HTMLElement | null = null;

                if(todoItem != null){
                    target = <HTMLElement> todoItem.querySelector("tr>td.done");
                }

                expect(target).toBeTruthy();
            });

            it("should check the checkbox when todo.done is true", () => {
                let target: HTMLInputElement | null = null,
                    checked = false;

                if(todoItem != null){
                    target = <HTMLInputElement> todoItem.querySelector("input[type=checkbox]");
                    checked = target.checked;
                }

                expect(checked).toBeTruthy();
            });
        });

        describe("when todo.done is false", () => {
            beforeEach(() => {
                let options = {
                    propsData: {
                        todo: new Todo(1, "Something", false)
                    },
                    store: new Vuex.Store({
                        state,
                        mutations
                    })
                };
                vm = render(TodoItem, options);
                todoItem = vm.$el;
            });

            it("should not set any class when todo.done is false", () => {
                let target: HTMLElement = document.createElement("td");

                if(todoItem != null){
                    target = <HTMLElement> todoItem.querySelector("tr>td.done");
                }

                expect(target).toBeFalsy();
            });

            it("should uncheck the checkbox when todo.done is false", () => {
                let target: HTMLInputElement | null = null,
                    checked = true;

                if(todoItem != null){
                    target = <HTMLInputElement> todoItem.querySelector("input[type=checkbox]");
                    checked = target.checked;
                }

                expect(checked).toBeFalsy();
            });
        });
    });
});