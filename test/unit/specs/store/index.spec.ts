import store, { mutations } from "@/store";
import { Todo } from "@/todos"

describe("Todo Store", () => {
    describe("initialization", () => {
        it("should be initialized", () => { 
            expect(store).toBeDefined();
        });

        it("should add todoList to state", () => {
            expect(store.state.todoList).toBeDefined();
        });
    });

    describe("mutations", () => {
        let state: any = {},
            payload: any;

        describe("addTodo", () => {
            beforeEach(() => {
                payload = { name: "Something" };
                state.todoList = new Array<Todo>();
            });
        
            it("should add a new todo to state.todoList", () => {
                mutations.addTodo(state, payload);

                expect(state.todoList.length).toBe(1);
                expect(state.todoList[0]).toBeDefined()
            });

            it("should set the todo ID", () => {
                mutations.addTodo(state, payload);

                expect(state.todoList[0].id).toBe(1);
            });

            it("should set the todo name", () => {
                mutations.addTodo(state, payload);

                expect(state.todoList[0].id).toBe(1);
            });

            it("should set the todo done to false", () => {
                mutations.addTodo(state, payload);

                expect(state.todoList[0].name).toBe(payload.name);
            });
        });

        describe("toggleStatus", () => {
            beforeEach(() => {
                payload = { id: 1 };
                state.todoList = [ new Todo(1, "Something", false) ];
            });

            it("should reverse the value of done for the todo ID passed", () => {
                mutations.toggleStatus(state, payload);

                expect(state.todoList[0].done).toBe(true);
            });
        });
    });
});