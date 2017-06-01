<template>
    <form class="form-inline" @submit.prevent="addTodo">
        <div class="form-group">
            <label for="todo" class="sr-only">Todo</label>
            <input type="text" v-model="name" class="form-control" id="todo" placeholder="Enter a todo..." />
        </div>
        <input type="button" value="Add" @click="addTodo" class="btn btn-default"/>
    </form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Todo } from "@/todos"

@Component
export default class AddTodo extends Vue {
    name = "";

    addTodo(): void {
      this.$store.commit({
            type: "addTodo", 
            name: this.name
        });
        this.name = "";
    }
};
</script>

<style scoped>
.form-inline {
  margin-bottom: 10px;
}

#todo{
  width: 300px;
}

</style>
