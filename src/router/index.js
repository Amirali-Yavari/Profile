import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/gholam",
    name: "gholam",
    component: () => import("./../components/MainPage/vilvilak.vue"),
  },
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
    path: "/members",
    name: "Members",
    component: () => import("../components/MemberPage.vue"),
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
