import Vue from "vue";
import Router from "vue-router";

// import all routes
import Index from "@/views/Index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: Index
    }
  ]
});
