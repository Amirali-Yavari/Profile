<template>
  <div class="h-full w-1/2 z-10 flex flex-col gap-3 text-center">
    <transition name="pic">
      <Mypicture v-if="this.$store.state.show" />
    </transition>
    <MyTitle v-if="this.$store.state.show" />
    <MySummary v-if="this.$store.state.show" />
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
<style></style>
