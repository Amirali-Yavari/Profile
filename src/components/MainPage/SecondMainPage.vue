<template>
  <div class="w-1/2 relative">
    <div
      @click="ScrollLeft"
      class="absolute mb-1 sm:hidden animate-bounce bottom-0 left-4 cursor-pointer text-pink-500 font-bold select-none"
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
      class="object-cover w-full z-10 h-full"
      alt=""
    />
  </div>
</template>
<script>
import { onKeyStroke } from "@vueuse/core";
export default {
  setup() {
    //use arrow key for going to first page
    onKeyStroke("ArrowLeft", () => {
      window.scrollTo({
        top: 0,
        left: -100000,
        behavior: "smooth",
      });
    });
    //functions
    function ScrollLeft() {
      window.scrollTo({
        top: 0,
        left: -100000,
        behavior: "smooth",
      });
    }
    return { ScrollLeft };
  },
  components: {},
};
</script>
<style></style>
