import store from "@/store";

describe("Todo Store", () => {
    describe("initialization", () => {
        it("should be initialized", () => { 
            expect(store).toBeDefined();
        });

        it("should add todoList to state", () => {
            expect(store.state.todoList).toBeDefined();
        });

        it("should add addTodo to mutations", () => {
            //expect(store.mutations.addTodo).toBeDefined();
        });

        it("should add toggleStatus to mutations", () => {
            //expect(store.mutations.toggleStatus).toBeDefined();
        });
    });

    describe("mutations", () => {
        describe("addTodo", () => {

        });

        describe("toggleStatus", () => {

        });
    });
});