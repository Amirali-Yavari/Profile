<template>
  <OnlineError v-if="online === false" />
  <div class="flex flex-col items-center h-screen">
    <div
      class="w-full gap-8 relative flex flex-col items-center justify-center p-5"
    >
      <div
        @click="NextProduct"
        class="absolute -bottom-1 right-10 select-none cursor-pointer"
      >
        Next project
      </div>
      <div
        @click="PrevProduct"
        class="absolute -bottom-1 left-10 select-none cursor-pointer"
      >
        prev project
      </div>
      <h1 class="text-center md:text-5xl text-3xl mt-2 text-blue-800">
        Products
      </h1>
      <transition name="product" v-for="data in datas" :key="data.key">
        <Product
          :title="data.title"
          v-if="show === data.key"
          :show="show"
          :text="data.text"
        />
      </transition>
    </div>
    <NavbarBottom />
  </div>
</template>
<script>
import NavbarBottom from "./NavbarBottom.vue";
import OnlineError from "./OnlineError.vue";
import Product from "./ProductBox.vue";
import ProductData from "./data/Products.json";
import { ref } from "vue";
import { useTitle } from "@vueuse/core";
import { onKeyStroke } from "@vueuse/core";
import { useOnline } from "@vueuse/core";
export default {
  setup() {
    let datas = ProductData;
    console.log(datas);
    //online status
    const online = useOnline();
    //change title
    const title = useTitle();
    title.value = "Product";
    //data
    let show = ref(datas[0].key);
    let firstProduct = ref(datas[0].key);
    let lastProduct = ref(datas[datas.length - 1].key);
    //function
    function NextProduct() {
      if (show.value != lastProduct.value) {
        show.value += 1;
      } else {
        show.value = datas[0].key;
      }
    }
    function PrevProduct() {
      if (show.value != firstProduct.value) {
        show.value -= 1;
      } else {
        show.value = lastProduct.value;
      }
    }
    //onKey
    onKeyStroke("ArrowRight", NextProduct);
    onKeyStroke("ArrowLeft", PrevProduct);
    return {
      show,
      online,
      datas,
      lastProduct,
      NextProduct,
      PrevProduct,
    };
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
