import store, { mutations, getters } from "@/store";
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

        describe("updateTodo", () => {
            beforeEach(() => {
                payload = { 
                    id: 1,
                    name: "Something else",
                    done: true
                };
                state.todoList = [ new Todo(1, "Something", false) ];
            });

            it("should update name", () => {
                mutations.updateTodo(state, payload);

                expect(state.todoList[0].name).toBe(payload.name);
            });

            it("should update done", () => {
                mutations.updateTodo(state, payload);

                expect(state.todoList[0].done).toBe(payload.done);
            });
        });
    });

    describe("getters", () => {
        describe("getTodo", () => {
            let state: any = {};

            beforeEach(() => {
                state.todoList = [ 
                    new Todo(1, "Something", false),
                    new Todo(2, "Something else", false)
                ];
            });

            it("should return the todo with the matching ID", () => {
                let todo = getters.getTodo(state, null)(1);

                expect(todo).toBeDefined();
                expect(todo).toEqual(state.todoList[0]);
            });

            it("should return undefined if the todo cannot be found", () => {
                let todo = getters.getTodo(state, null)(0);

                expect(todo).toBeUndefined();
            });
        });
    });
});