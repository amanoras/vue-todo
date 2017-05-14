import { expect } from "chai";
import render from "@/../test/helpers/render";

import Vue from "vue";
import Todos from "@/components/todos.vue";
import { Todo } from "@/todos"

describe("todos.vue", () => {
  let vm: Vue,
      todos: Element | null;

  before(() => {
    this.vm = render(Todos);
    this.todos = this.vm.$el;
  });

  it("should render the root container", () => {
    expect(this.todos).to.exist;
  });
  
  it("should render the root container as a DIV", () => {
    expect(this.todos.tagName).to.equal("DIV");
  });

  it("should render the root container with an ID", () => {
    let id = this.todos.getAttribute("id");
    expect(id).to.equal("todos");
  });
});
