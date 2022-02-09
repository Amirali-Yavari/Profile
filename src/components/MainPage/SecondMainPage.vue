<template>
  <div class="w-full h-[92vh] relative">
    <div
      @click="ScrollLeft"
      class="absolute mb-1 sm:hidden animate-bounce bottom-[50%] left-4 cursor-pointer text-pink-500 font-bold select-none"
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
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </div>
    <img
      src="./../../../public/MyImage/vv-min-removebg.png"
      class="object-cover w-full z-10 h-[92vh]"
      alt=""
    />
  </div>
</template>
<script>
import { useStore } from "vuex";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
export default {
  setup() {
    const breakepoints = useBreakpoints(breakpointsTailwind);
    const smLarger = breakepoints.isGreater("sm");
    // vueX composition api
    const store = useStore();
    //functions
    function ScrollLeft() {
      store.commit("changeMainpageShowFirst");
    }
    return { ScrollLeft, smLarger };
  },
  components: {  },
};
</script>
<style></style>
