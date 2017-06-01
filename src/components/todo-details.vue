<template>
  <div id="todo-detail">
    This is the detail for todo {{id}}
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
  get todo(){
    console.log(this.$store.getters);
    return this.$store.getters.getTodo(this.id);
  }
};
</script>

<style>
</style>
