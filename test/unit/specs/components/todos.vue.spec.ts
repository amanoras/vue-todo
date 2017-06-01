import render from "@/../test/helpers/render";

import Vue from "vue";
import Vuex from "vuex";

import { state, mutations } from "@/../test/helpers/mock_store"
import Todos from "@/components/todos.vue";
import { Todo } from "@/todos"

describe("todos.vue", () => {
  let vm: Vue,
      todos: Element | null;

  beforeAll(() => {
    let mock_store = new Vuex.Store({
        state,
        mutations
    })
    vm = render(Todos, { store: mock_store });
    todos = vm.$el;
  });

  it("should render the root container", () => {
    expect(todos).toBeDefined();
  });
  
  it("should render the root container as a DIV", () => {
    if(todos != null){
      expect(todos.tagName).toBe("DIV");
    }
  });

  it("should render the root container with an ID", () => {
    if(todos != null){
      let id = todos.getAttribute("id");
      expect(id).toBe("todos");
    }
  });
});
