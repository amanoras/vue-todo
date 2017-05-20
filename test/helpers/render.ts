import Vue from "vue";

export default function(component: Vue.Component): Vue {
    const ctor = Vue.extend(component),
          vm = new ctor();
    
    vm.$mount();

    return vm;
}