<template>
  <div class="h-[80vh] w-[100vw] flex flex-row items-center relative">
    <vue-particles
      class="absolute w-full top-0 left-0 h-screen z-0"
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
    <transition name="firstPage">
      <FirstPage
        v-if="this.$store.state.ContactPageShow === 'first' || smLarger"
      />
    </transition>
    <transition name="secondPage">
      <SecondPage
        v-if="this.$store.state.ContactPageShow === 'second' || smLarger"
      />
    </transition>

    <NavbarBottom />
  </div>
</template>
<script>
import NavbarBottom from "./NavbarBottom.vue";
import OnlineError from "./OnlineError.vue";
import FirstPage from "./ContactUsFirst.vue";
import SecondPage from "./ContactUsSecond.vue";
import {
  breakpointsTailwind,
  useBreakpoints,
  useTitle,
  useOnline,
} from "@vueuse/core";
export default {
  setup() {
    const breakepoints = useBreakpoints(breakpointsTailwind);
    const smLarger = breakepoints.isGreater("sm");
    //online status
    const online = useOnline();
    // Change Title
    const title = useTitle();
    title.value = "Contact Us";
    //---------------------------
    return {
      online,
      smLarger,
    };
  },
  components: {
    SecondPage,
    FirstPage,
    NavbarBottom,
    OnlineError,
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
