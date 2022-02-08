<template>
  <OnlineError v-if="online === false" />
  <div class="flex flex-col items-center h-screen">
    <div
      class="w-full gap-8 relative flex flex-col items-center justify-center p-5"
    >
      <div
        @click="next"
        class="absolute -bottom-1 right-10 select-none cursor-pointer"
      >
        Next project
      </div>
      <div
        @click="prev"
        class="absolute -bottom-1 left-10 select-none cursor-pointer"
      >
        prev project
      </div>
      <h1 class="text-center md:text-5xl text-3xl mt-2 text-blue-800">
        Products
      </h1>
      <transition name="product"> <Product /> </transition>
    </div>
    <NavbarBottom />
  </div>
</template>
<script>
import NavbarBottom from "./NavbarBottom.vue";
import OnlineError from "./OnlineError.vue";
import Product from "./ProductBox.vue";
import { ref } from "vue";
import { useTitle } from "@vueuse/core";
import { onKeyStroke } from "@vueuse/core";
import { useOnline } from "@vueuse/core";
export default {
  setup() {
    //online status
    const online = useOnline();
    //change title
    const title = useTitle();
    title.value = "Product";
    //data
    let show = ref(1);
    //function
    function next() {
      switch (show.value) {
        case 1:
          show.value = 2;
          break;
        case 2:
          show.value = 3;
          break;
        case 3:
          show.value = 1;
          break;
      }
    }
    function prev() {
      switch (show.value) {
        case 1:
          show.value = 3;
          break;
        case 2:
          show.value = 1;
          break;
        case 3:
          show.value = 2;
          break;
      }
    }
    //onKey
    onKeyStroke("ArrowRight", () => {
      switch (show.value) {
        case 1:
          show.value = 2;
          break;
        case 2:
          show.value = 3;
          break;
        case 3:
          show.value = 1;
          break;
      }
    });
    onKeyStroke("ArrowLeft", () => {
      switch (show.value) {
        case 1:
          show.value = 3;
          break;
        case 2:
          show.value = 1;
          break;
        case 3:
          show.value = 2;
          break;
      }
    });
    return { prev, next, show, online };
  },
  components: {
    NavbarBottom,
    OnlineError,
    Product,
  },
};
</script>
<style>
.product-enter-from {
  opacity: 0;
  transform: translateY(-50px);
  transition: all 1s ease;
}
.product-enter-to {
  opacity: 1;
  transform: translateY(0);
  transition: all 1s ease;
}
</style>
