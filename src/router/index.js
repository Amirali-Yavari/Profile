import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./../components/MainPage.vue";
import Member from "../components/MemberPage.vue";
import Product from "./../components/ProductPage.vue";
import Contact from "./../components/ContactUs.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: MainPage,
  },
  {
    path: "/members",
    name: "Members",
    component: Member,
  },
  {
    path:"/Product",
    name:"Product",
    component:Product,
  },
  {
    path:"/Contact",
    name:"Contact",
    component:Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
