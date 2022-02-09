<template>
  <div class="h-screen md:h-[92vh] w-full snap-center relative flex" ref="el">
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
  </div>
</template>
<script>
import MyTitle from "./MainPage/MyTitle.vue";
import MySummary from "./MainPage/MySummary.vue";
import ReadMore from "./MainPage/ReadMore.vue";
import MyLogo from "./MainPage/MyLogo.vue";
import OnlineError from "./OnlineError.vue";
import { ref } from "vue";
import { useOnline, useTitle, useSwipe } from "@vueuse/core";
import { useStore } from "vuex";
export default {
  setup() {
    //Swipe to
    const el = ref(null);
    const { isSwiping, direction } = useSwipe(el, {
      onSwipeEnd() {
        if (direction.value == "LEFT") {
          store.commit("changeMainpageShowSecond");
        }
      },
    });
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
      isSwiping,
      el,
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
  },
};
</script>
<style scoped></style>
>
