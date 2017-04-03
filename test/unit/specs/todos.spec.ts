import { expect } from "chai";

import Vue from "vue";
import Todos from "@/components/todos";

describe("todos.vue", () => {
  it("should render correct contents", () => {
    const vm = new Vue({
      el: document.createElement("div"),
      render: (h) => h(Todos),
    });
    const todos: Element | null = vm.$el.querySelector("#todos");
    if (todos !== null) {
      expect(todos.textContent).to.equal("This is where the list of todo's goes...");
    }
  });
});
