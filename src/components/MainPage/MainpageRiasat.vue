<template>
  <div class="h-full w-1/2 z-10 flex flex-col gap-3 text-center">
    <transition name="pic">
      <Mypicture />
    </transition>

    <MyTitle />
    <MySummary />
    <NavbarBottom />
  </div>
</template>
<script>
import Mypicture from "./Mypicture.vue";
import MyTitle from "./MyTitle.vue";
import MySummary from "./MySummary.vue";
import NavbarBottom from "./../NavbarBottom.vue";
export default {
  components: {
    MySummary,
    MyTitle,
    Mypicture,
    NavbarBottom,
  },
};
</script>
<style scoped>
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
</style>
