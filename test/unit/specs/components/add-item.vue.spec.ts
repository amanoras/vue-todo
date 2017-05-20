import render from "@/../test/helpers/render";

import Vue from "vue";
import AddTodo from "@/components/add-todo.vue";
import { Todo } from "@/todos"

describe("add-todo.vue", () => {
    let vm: any,
        addTodo: HTMLElement | null;

    describe("The Add Item UI", () => {
        beforeEach(() => {
            vm = render(AddTodo);
            addTodo = vm.$el;
        });

        it("should render the component", () => {
            expect(addTodo).toBeDefined();
        });
        
        it("should render the root element as a FORM", () => {
            if(addTodo != null){
                expect(addTodo.tagName).toBe("FORM");
            }
        });

        it("should display an input to add todos", () => {
            let todoText = vm.$el.querySelector("input[type=text]");
            expect(todoText).toBeDefined();
        });

        it("should display a placeholder in the input field", () => {
            let todoText = vm.$el.querySelector("input[type=text]");

            if(todoText != null){
                let placeHolder = todoText.getAttribute("placeholder");

                expect(placeHolder).toBe("Enter a todo...");
            }
        });

    });

    describe("The Add Item button", () => {
        let todoButton: HTMLElement | null;

        beforeEach(() => {
            vm = render(AddTodo);
            addTodo = vm.$el;
            todoButton = <HTMLElement> vm.$el.querySelector("input[type=button]")
        });

        it("should display a button to add todos", () => {
            expect(todoButton).toBeDefined();
        });

        it("should emit an event when the button is clicked", () => {
            spyOn(vm, "$emit");

            if(todoButton != null){
                todoButton.click();
            }

            
            expect(vm.$emit).toHaveBeenCalled();
        });

        it("should reset name", () => {
            vm.name = "Something";

            if(todoButton != null){
                todoButton.click();
            }

            expect(vm.name).toBeFalsy();
        });
    });
  
});
