import Vue from "vue";
import store from "@/store";
import router from "@/router";

export default function(component: Vue.Component, options: any = {}): Vue {
    options.router = router;
    const ctor = Vue.extend(component),
          vm = new ctor(options);
    
    vm.$mount();

    return vm;
}