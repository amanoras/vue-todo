<template>
  <tr>
    <td :class="{ done: todo.done }"><router-link :to="{ name: 'TodoDetails', params:{ id: todo.id }}">{{ todo.name }}</router-link></td>
    <td>
      <input type="checkbox" v-model="done" />
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
  get done() {
    return this.$props.todo.done;
  };

  set done(val: Boolean){
    this.$store.commit({
      type: "toggleStatus",
      id: this.$props.todo.id
    });
  };
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
