import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Search from "../views/Search.vue";
import Form from "../views/Form.vue";
import Auth from "../views/Auth.vue";
import Approve from "../views/Approve.vue";
import NotFound from "../views/404.vue";
// import word from '../views/word.vue'
// const currentUser = Firebase.auth().currentUser;
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Approve",
    name: "Approve",
    component: Approve,
  },
  {
    path: "/Auth",
    name: "Auth",
    props: true,
    component: Auth,
  },

  {
    path: "/Form",
    name: "Form",
    component: Form,
    props: true,
    meta: { requiresAuth: true },
    // beforeEnter: (to, from, next) => {
    //   if (to.params.name) {
    //     next();
    //   } else {
    //     next({ name: "Home" });
    //   }
    // }
  },
  {
    path: "/word",
    name: "word",
    //component: word
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Word.vue"),
    props: true,
  },
  {
    path: "/Search",
    name: "Search",
    component: Search,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
