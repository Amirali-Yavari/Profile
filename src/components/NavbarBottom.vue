<template>
  <transition name="navhide">
    <NavHide v-if="show" />
  </transition>

  <div
    class="w-[100vw] h-16 flex flex-row justify-between items-center z-30 gap-8 fixed bottom-0 bg-white border-t border-gray-300"
  >
    <div class="flex flex-row gap-1 items-center">
      <div
        @click="ShowNavHide"
        ref="target"
        class="w-10 h-10 ring-1 ring-gray-300 rounded-md flex items-center justify-center ml-2 cursor-pointer shadow-md hover:bg-gray-100 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <select
        class="cursor-pointer w-10 appearance-none hidden bg-white select-none"
      >
        <option value="en">en</option>
        <option value="fa">fa</option>
      </select>
    </div>

    <div class="text-blue-900 text-3xl mr-2 font-bold font-logo select-none">
      Amirali Yavari
    </div>
  </div>
</template>
<script>
import NavHide from "./NavHide.vue";
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
export default {
  setup() {
    //data
    let show = ref(false);
    //functions
    function ShowNavHide() {
      show.value = !show.value;
    }
    //click out side
    const target = ref(null);
    onClickOutside(target, () => {
      show.value = false;
    });
    return {
      target,
      show,
      ShowNavHide,
    };
  },
  components: {
    NavHide,
  },
};
</script>
<style>
.navhide-enter-from,
.navhide-leave-to {
  height: 0rem;
  opacity: 0;
  transition: all 0.5s ease;
}
.navhide-enter-to,
.navhide-leave-from {
  height: 9rem;
  opacity: 1;
  transition: all 0.5s ease;
}
</style>
