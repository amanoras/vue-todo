import Vue from "vue";

export default function(component: Vue.Component): Vue {
    const vm = new Vue({
      el: document.createElement("div"),
      render: (h) => h(component)
    });

    return vm;
}