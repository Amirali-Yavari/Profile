<template>
  <div
    class="w-full sm:w-1/2 flex flex-col items-center gap-3 relative"
    ref="el"
  >
    <div
      class="absolute mb-1 sm:hidden -bottom-10 left-4 cursor-pointer text-pink-500 font-bold select-none"
      @click="ScrollLeft"
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
    <input
      type="text"
      placeholder="FullName"
      class="w-3/4 p-2 ring-1 ring-gray-400 shadow-md"
    />
    <input
      type="email"
      placeholder="Email"
      class="w-3/4 p-2 ring-1 ring-gray-400 shadow-md"
    />
    <textarea
      cols="30"
      rows="10"
      class="w-3/4 p-2 ring-1 ring-gray-400 shadow-md"
      placeholder="Message text"
    ></textarea>
    <div
      class="w-1/3 ring-1 ring-blue-900 p-2 text-lg flex items-center justify-center text-blue-900 shadow-lg hover:bg-blue-900 hover:text-white font-semibold cursor-pointer transition"
    >
      Send
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useSwipe } from "@vueuse/core";
import { useStore } from "vuex";
export default {
  setup() {
    //functions
    function ScrollLeft() {
      store.commit("changeContactShowFirst");
    }
    // vueX composition api
    const store = useStore();
    //swipe to
    const el = ref(null);
    const { isSwiping, direction } = useSwipe(el, {
      onSwipeEnd() {
        if (direction.value == "RIGHT") {
          store.commit("changeContactShowFirst");
        }
      },
    });
    return { el, isSwiping, ScrollLeft };
  },
};
</script>
