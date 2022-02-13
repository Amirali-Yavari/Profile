<template>
  <div class="flex flex-nowrap w-[100vw] touch-pan-x bg-gray-200">
    <vue-particles
      class="absolute top-0 left-0 h-screen z-10"
      color="#EC4899"
      :particleOpacity="0.4"
      :particlesNumber="70"
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
    <NavbarBottom />
  </div>
</template>
<script>
import NavbarBottom from "./NavbarBottom.vue";
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
    NavbarBottom,
    FirstMainPage,
    SecondMainPage,
  },
};
</script>
<style>
.firstPage-enter-from,
.firstPage-leave-to {
  width: 0%;
  opacity: 0;
  transition: all 0.1s ease;
}
.firstPage-enter-to,
.firstPage-leave-from {
  width: 100%;
  opacity: 1;
  transition: all 0.1s ease;
}
.secondPage-enter-from,
.secondPage-leave-to {
  transform: translateX(10vw);
  width: 0%;
  opacity: 0;
  transition: all 0.1s ease;
}
.secondPage-enter-to,
.secondPage-leave-from {
  transform: translateX(0px);
  width: 100%;
  opacity: 1;
  transition: all 0.1s ease;
}
</style>
