<template> 
  <div id="todos">
    <div class="row">
      <div class="col-md-8">  
        <add-todo/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <todo-list />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import TodoList from "./todo-list.vue"
import AddTodo from "./add-todo.vue"

@Component({
  components: {
    TodoList,
    AddTodo
  }
})
export default class Todos extends Vue {
  
};
</script>

<style scoped>
</style>
