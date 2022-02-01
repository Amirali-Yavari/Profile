<template>
  <transition name="navhide">
    <NavHide v-if="show" />
  </transition>

  <div
    class="w-[100vw] h-16 flex flex-row-reverse justify-between items-center gap-8 fixed bottom-0 bg-white border-t border-gray-300"
  >
    <div
      @click="ShowNavHide"
      class="w-10 h-10 ring-1 ring-gray-300 rounded-md flex items-center justify-center mr-2 cursor-pointer shadow-md hover:bg-gray-100 transition"
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
    <div class="text-pink-500 text-3xl ml-2 font-bold">Yavari</div>
  </div>
</template>
<script>
import NavHide from "./NavHide.vue";
export default {
  methods: {
    ShowNavHide() {
      this.show = !this.show;
    },
  },
  data() {
    return {
      show: false,
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
  transform: translateX(-40px);
  opacity: 0;
  transition: all 0.5s ease;
}
.navhide-enter-to,
.navhide-leave-from {
  transform: translateX(0px);
  opacity: 1;
  transition: all 0.5s ease;
}
</style>
