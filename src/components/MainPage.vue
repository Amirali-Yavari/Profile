<template>
  <div class="flex flex-nowrap w-[100vw] touch-pan-x bg-gray-200">
    <transition name="firstPage">
      <FirstMainPage
        v-if="this.$store.state.MainPageShow === 'first' || smLarger"
      />
    </transition>
    <transition name="secondPage">
      <SecondMainPage
        v-if="this.$store.state.MainPageShow === 'second' || smLarger"
      />
    </transition>
  </div>
</template>
<script>
import SecondMainPage from "./MainPage/SecondMainPage.vue";
import FirstMainPage from "./FirstMainPage";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
export default {
  setup() {
    const breakepoints = useBreakpoints(breakpointsTailwind);
    const smLarger = breakepoints.isGreater("sm");
    return { smLarger };
  },
  components: {
    FirstMainPage,
    SecondMainPage,
  },
};
</script>
<style scoped>
.firstPage-enter-from,
.firstPage-leave-to {
  transform: translateX(-100vw);
  opacity: 0;
  transition: all 0.5s ease;
}
.firstPage-enter-to,
.firstPage-leave-from {
  transform: translateX(0px);
  opacity: 1;
  transition: all 0.5s ease;
}
.secondPage-enter-from,
.secondPage-leave-to {
  transform: translateX(100vw);
  opacity: 0;
  transition: all 0.5s ease;
}
.secondPage-enter-to,
.secondPage-leave-from {
  transform: translateX(0px);
  opacity: 1;
  transition: all 0.5s ease;
}
</style>
