<template>
  <div class="h-screen md:h-[92vh] w-full snap-center relative flex">
    <OnlineError v-if="online === false" />
    <div
      @click="ScrollRight"
      class="absolute mb-1 sm:hidden animate-bounce bottom-[50%] right-4 cursor-pointer font-bold select-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 bg-pink-500 rounded-full text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
    <div class="p-10 flex flex-col gap-8">
      <MyLogo />
      <MyTitle />
      <MySummary />
      <ReadMore />
    </div>
    <NavbarBottom />
  </div>
</template>
<script>
import MyTitle from "./MainPage/MyTitle.vue";
import MySummary from "./MainPage/MySummary.vue";
import ReadMore from "./MainPage/ReadMore.vue";
import NavbarBottom from "./NavbarBottom.vue";
import MyLogo from "./MainPage/MyLogo.vue";
import OnlineError from "./OnlineError.vue";
// import { ref } from "vue";
import { useOnline, useTitle } from "@vueuse/core";
import { useStore } from "vuex";
export default {
  setup() {
    // vueX composition api
    const store = useStore();
    //online status
    const online = useOnline();
    //change title
    const title = useTitle();
    title.value = "Amirali Yavari";
    //Hooks
    //Functions
    function ScrollRight() {
      store.commit("changeMainpageShowSecond");
    }
    return {
      online,
      ScrollRight,
    };
  },
  components: {
    OnlineError,
    MyTitle,
    MySummary,
    ReadMore,
    MyLogo,
    NavbarBottom,
  },
};
</script>
<style scoped></style>
>
