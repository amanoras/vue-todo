<template>
  <div id="app">
    <transition enter-active-class="animated slideInDown">
      <router-view></router-view>
    </transition>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Todos from "./components/todos.vue"

@Component({
  components: {
    Todos
  }
})
export default class App extends Vue {
  name =  "app";
  
};
</script>

<style>
body { padding-top: 70px; }
</style>

