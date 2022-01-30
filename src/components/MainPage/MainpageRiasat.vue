<template>
  <div class="h-full w-1/2 z-10 flex flex-col gap-3 text-center">
    <transition name="pic">
      <Mypicture v-if="this.$store.state.show" />
    </transition>
    <transition name="title">
      <MyTitle v-if="this.$store.state.show" />
    </transition>
    <transition name="summary">
      <MySummary v-if="this.$store.state.show" />
    </transition>

    <NavbarBottom />
  </div>
</template>
<script>
import Mypicture from "./Mypicture.vue";
import MyTitle from "./MyTitle.vue";
import MySummary from "./MySummary.vue";
import NavbarBottom from "./../NavbarBottom.vue";
export default {
  mounted() {
    setTimeout(() => {
      this.$store.commit("ShowTrue");
    }, 300);
  },
  components: {
    MySummary,
    MyTitle,
    Mypicture,
    NavbarBottom,
  },
};
</script>
<style>
.pic-enter-from {
  transform: translateX(-60px);
  opacity: 0;
  transition: all 0.7s ease;
}
.pic-enter-to {
  transform: translateX(0px);
  opacity: 1;
  transition: all 0.7s ease;
}
.title-enter-from {
  transform: translateX(50px);
  opacity: 0;
  transition: all 0.9s ease;
}
.title-enter-to {
  transform: translateX(0px);
  opacity: 1;
  transition: all 0.9s ease;
}
.summary-enter-from{
  transform: translateY(100px);
  opacity: 0;
  transition: all 1.1s ease;
}
.summary-enter-to{
  transform: translateY(0px);
  opacity: 1;
  transition: all 1.1s ease;
}
</style>
