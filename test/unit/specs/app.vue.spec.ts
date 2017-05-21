import render from "@/../test/helpers/render";
import App from "@/app.vue";

import Vue from "vue";
import { Todo } from "@/todos"

describe("app.vue", () => {
    describe("initialisation", () => {
        let vm: any;

        beforeAll(() => {
            vm = render(App);
        })

        it("should create todoList", () => {
            expect(vm.todoList).toBeDefined();
        });

        it("should initialise todoList", () => {
            expect(vm.todoList.length).toBe(0);
        });
    });
});