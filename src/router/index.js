import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./../components/MainPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("./../components/NotFound.vue"),
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () => import("./../components/ProfilePage.vue"),
  },
  {
    path: "/Product",
    name: "Product",
    component: () => import("./../components/ProductPage.vue"),
  },
  {
    path: "/Contact",
    name: "Contact",
    component: () => import("./../components/ContactUs.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
