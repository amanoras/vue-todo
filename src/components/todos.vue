<template> 
  <div id="todos">
    <div class="row">
      <div class="col-md-8">  
        <add-todo v-on:todoAdded="addTodo"/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <todo-list :todos="todos"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import TodoList from "./todo-list.vue"
import AddTodo from "./add-todo.vue"
import { Todo } from "@/todos"

@Component({
  props: {
    todos: Array
  },
  components: {
    TodoList,
    AddTodo
  }
})
export default class Todos extends Vue {
  addTodo(name: string){
      this.$emit("todoAdded", name);
    }
};
</script>

<style scoped>
</style>
