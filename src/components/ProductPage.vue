<template>
  <div ref="el" class="flex flex-col items-center h-screen z-20">
    <vue-particles
      class="absolute w-full top-0 left-0 h-screen"
      color="#EC4899"
      :particleOpacity="0.4"
      :particlesNumber="50"
      shapeType="circle"
      :particleSize="4"
      linesColor="#EC4899"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <OnlineError v-if="online === false" />
    <div
      class="w-full gap-8 relative flex flex-col items-center justify-center p-5"
    >
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
import {
  breakpointsTailwind,
  useBreakpoints,
  useOnline,
  useSwipe,
  onKeyStroke,
  useTitle,
  usePointerSwipe,
} from "@vueuse/core";
export default {
  setup() {
    //break points
    const breakepoints = useBreakpoints(breakpointsTailwind);
    const smLarger = breakepoints.isGreater("sm");
    const el = ref(null);
    //use swipe for phone size
    if (smLarger === false) {
      const { direction } = useSwipe(el, {
        onSwipeEnd() {
          if (direction.value == "RIGHT") {
            if (show.value != firstProduct.value) {
              show.value -= 1;
            } else {
              show.value = lastProduct.value;
            }
          }
          if (direction.value == "LEFT") {
            if (show.value != lastProduct.value) {
              show.value += 1;
            } else {
              show.value = datas[0].key;
            }
          }
        },
      });
    }
    //use pointer swipe for larger than phone
    if (smLarger) {
      const { direction } = usePointerSwipe(el, {
        onSwipeEnd() {
          if (direction.value == "LEFT") {
            if (show.value != firstProduct.value) {
              show.value -= 1;
            } else {
              show.value = lastProduct.value;
            }
          }
          if (direction.value == "RIGHT") {
            if (show.value != lastProduct.value) {
              show.value += 1;
            } else {
              show.value = datas[0].key;
            }
          }
        },
      });
    }
    let datas = ProductData;
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
      el,
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
