import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/books-list",
    name: "books",
    component: () => import("../views/BooksView.vue"), // <- lazy loading / macht app "schlanker" und schneller
  },
  {
    path: "/books-list/:id",
    name: "booksDetail",
    component: () => import("../views/BooksDetailView.vue"), // <- lazy loading / macht app "schlanker" und schneller
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
