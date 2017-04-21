<template>
  <div id="app">
    <todos :todos="todoList" v-on:todoAdded="addTodo"/>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Todos from "./components/todos.vue"
import { Todo } from "@/todos"

@Component({
  components: {
    Todos
  }
})
export default class App extends Vue {
  name =  "app";
  todoList: Array<Todo> = [];
  addTodo(name: string){
      let todo = new Todo(this.todoList.length + 1, name, false);
      this.todoList.push(todo);
  }
};
</script>

<style>
body { padding-top: 70px; }
</style>

