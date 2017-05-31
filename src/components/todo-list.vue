<template>
  <table class="table table-striped table-bordered">
    <thead>
    <tr>
        <th>Todo</th>
        <th>&nbsp;</th>
    </tr>
    </thead>
    <tbody>
        <todo-item v-for="todo in todos" :key="todo.id" :todo="todo"></todo-item>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import TodoItem from "./todo-item.vue"
import { Todo } from "@/todos"

@Component({
  components: {
    TodoItem
  }
})
export default class TodoList extends Vue {
  get todos(){
    return this.$store.state.todoList;
  };
};
</script>

<style scoped>
</style>
