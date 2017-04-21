<template>
  <tr>
    <td :class="{ done: todo.done }">{{ todo.name }}</td>
    <td>
      <input type="checkbox" v-model="todo.done" />
    </td>
  </tr>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Todo } from "@/todos"

@Component({
  props: {
    todo: Todo
  }
})
export default class TodoItem extends Vue {

};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
