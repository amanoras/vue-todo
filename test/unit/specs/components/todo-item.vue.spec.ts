import render from "@/../test/helpers/render";

import Vue from "vue";
import TodoItem from "@/components/todo-item.vue";
import { Todo } from "@/todos"

describe("todo-item.vue", () => {
    let vm: Vue,
        todoItem: HTMLElement;

    describe("component setup", () => {
        beforeAll(() => {
            let options = {
                data: {
                    todo: new Todo(1, "Something", false)
                }
            };
            
            vm = render(TodoItem, options);
            todoItem = vm.$el;
        });

        it("should render the root container", () => {
            expect(todoItem).toBeDefined();
        });
        
        it("should render the root container as a TR", () => {
            console.log(todoItem);

            if(todoItem != null){
                expect(todoItem.tagName).toBe("TR");
            }
        });
    });
    
    describe("todo item", () => {
        it("should display the todo name", () => {
            let options = {
                data: {
                    todo: new Todo(1, "Something", false)
                }
            };
            vm = render(TodoItem, options);
            todoItem = vm.$el;

            expect(todoItem.querySelectorAll("tr>td")[0].textContent).toBe("Something");
        });

        describe("when todo.done is true", () => {
            beforeEach(() => {
                let options = {
                    data: {
                        todo: new Todo(1, "Something", true)
                    }
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

            it("should set check the checkbox when todo.done is true", () => {
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
                    data: {
                        todo: new Todo(1, "Something", false)
                    }
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