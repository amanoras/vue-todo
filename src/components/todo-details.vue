<template>
  <div id="todo-detail">
    <form @submit.prevent="updateTodo">
        <div class="form-group">
            <label for="todo-name">Name</label>
            <input type="text" v-model="name" class="form-control" id="todo-name" placeholder="Enter a todo..." />
        </div>
        <div class="form-group">
            <label for="todo-done">Done</label>
            <input type="checkbox" v-model="done" class="form-control" id="todo-done" />
        </div>
        <div class="form-group">
          <input type="button" value="Update" @click="updateTodo" class="btn btn-default" />
        </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    id: Number
  }
})
export default class TodoDetail extends Vue {

  newName = "";
  newStatus = false;
  
  get name(): string{
    let todo = this.$store.getters.getTodo(this.$props.id);

    if(!todo){
      return "";
    }

    return todo.name;
  };

  set name(val: string){
    this.newName = val;
  }

  get done(): boolean{
    let todo = this.$store.getters.getTodo(this.$props.id);

    if(!todo){
      return false;
    }

    return todo.done;
  };

  set done(val: boolean){
    this.newStatus = val;
  }

  updateTodo(){
    this.$store.commit({
        type: "updateTodo", 
        id: this.$props.id,
        name: this.newName,
        done: this.newStatus
      });

      this.$router.push({ name: "Todos" });
  };
};
</script>

<style>
</style>
