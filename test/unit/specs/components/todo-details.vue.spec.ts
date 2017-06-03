import render from "@/../test/helpers/render";

import Vue from "vue";
import Vuex from "vuex";

import TodoDetails from "@/components/todo-details.vue";
import { state } from "@/../test/helpers/mock_store";
import { mutations, getters } from "@/store";

import { Todo } from "@/todos"

describe("todo-details.vue", () => {
    let vm: any,
        todoDetails: HTMLElement;

    describe("component setup", () => {
        it("should initialise newName with name value", () => {
            state.todoList = [ new Todo(1, "Something", true) ];
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

            expect(vm.newName).toBe("Something");
        });

        it("should initialise newStatus with done value", () => {
            state.todoList = [ new Todo(1, "Something", true) ];
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

            expect(vm.newStatus).toBe(true);
        });
    });

    describe("name", () => {
        describe("get", () => {
            it("should return a name when store contains a Todo with the same ID", () => {
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

                let name = vm.name;

                expect(name).toBeDefined();
                expect(name).toEqual(state.todoList[0].name);
            });

            it("should return an empty string when store does not contain a Todo with the same ID", () => {
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

                let name = vm.name;

                expect(name).toBe("");
            });
        });

        describe("set", () => {
            it("should set newName to the new value", () => {
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

                vm.name = "A new name";

                expect(vm.newName).toBe("A new name");
            })
        });
    });

    describe("done", () => {
        describe("get", () => {
            it("should return done when store contains a Todo with the same ID", () => {
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

                let done = vm.done;

                expect(done).toBeDefined();
                expect(done).toEqual(state.todoList[0].done);
            });

            it("should return false when store does not contain a Todo with the same ID", () => {
                state.todoList = [ new Todo(1, "Something", true) ];
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

                let done = vm.done;

                expect(done).toBe(false);
            });
        });

        describe("set", () => {
            it("should set newStatus to the new value", () => {
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

                vm.done = true;

                expect(vm.newStatus).toBe(true);
            })
        });
    });

    describe("Update button", () => {
        let updateButton: HTMLElement;

        beforeEach(() => {
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

            updateButton = <HTMLElement> vm.$el.querySelector("input[type=button]");
        });
        
        it("should call commit on the store when the button is clicked", () => {
            spyOn(vm.$store, "commit");
            vm.newName = "New Name";
            vm.newStatus = true;

            if(updateButton != null){
                updateButton.click();
            }

            expect(vm.$store.commit).toHaveBeenCalledWith({
                type: "updateTodo", 
                id: 1,
                name: vm.newName,
                done: vm.newStatus
            });
        });

        it("should navigate to the todo list", () => {
            spyOn(vm.$router, "push");

            if(updateButton != null){
                updateButton.click();
            }

            expect(vm.$router.push).toHaveBeenCalledWith({ name: "Todos" });
        });
    });
});
