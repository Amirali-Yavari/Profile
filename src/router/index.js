import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./../components/MainPage.vue";
import Member from "./../components/member.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: MainPage,
  },
  {
    path: "/members",
    name: "Member",
    component: Member,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
