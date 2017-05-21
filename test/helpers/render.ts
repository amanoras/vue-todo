import Vue from "vue";

export default function(component: Vue.Component, options: any = {}): Vue {
    const ctor = Vue.extend(component),
          vm = new ctor(options);
    
    vm.$mount();

    return vm;
}