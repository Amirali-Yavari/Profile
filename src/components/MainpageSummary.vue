<template>
  <div class="h-full w-1/2 z-10 flex flex-col gap-3 text-center">
    <transition name="pic">
      <Mypicture v-if="show" />
    </transition>
    <transition name="title">
      <MyTitle v-if="show" />
    </transition>
    <transition name="summary">
      <MySummary v-if="show" />
    </transition>
    <NavbarBottom />
  </div>
</template>
<script>
// Imports--------------------------------------
import Mypicture from "./MainPage/Mypicture.vue";
import MyTitle from "./MainPage/MyTitle.vue";
import MySummary from "./MainPage/MySummary.vue";
import NavbarBottom from "./NavbarBottom.vue";
//----------------------------------------------
export default {
  data() {
    return {
      show: false,
    };
  },
  components: {
    Mypicture,
    MyTitle,
    MySummary,
    NavbarBottom,
  },
  mounted() {
    console.log(this.show);
    setTimeout(() => (this.show = true), 200);
  },
};
</script>
<style>
.pic-enter-from {
  transform: translateX(-40px);
  opacity: 0;
  transition: all 0.5s ease;
}
.pic-enter-to {
  transform: translateX(0px);
  opacity: 1;
  transition: all 0.5s ease;
}
.title-enter-from {
  transform: translateX(100px);
  opacity: 0;
  transition: all 0.9s ease;
}
.title-enter-to {
  transform: translateX(0px);
  opacity: 1;
  transition: all 0.9s ease;
}
.summary-enter-from {
  transform: translateY(100px);
  opacity: 0;
  transition: all 1.1s ease;
}
.summary-enter-to {
  transform: translateY(0px);
  opacity: 1;
  transition: all 1.1s ease;
}
</style>
