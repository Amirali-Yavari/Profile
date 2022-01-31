<template>
  <div class="h-[98vh] w-1/2 relative">
    <div
      @click="ScrollRight"
      class="absolute mb-1 bottom-16 right-10 cursor-pointer text-pink-500 font-bold select-none"
    >
      Scroll Right
    </div>
    <div class="p-10 flex flex-col gap-4">
      <MyLogo />
      <transition name="title">
        <MyTitle v-if="this.$store.state.show" />
      </transition>
      <transition name="summary">
        <MySummary v-if="this.$store.state.show" />
      </transition>
      <transition name="read">
        <ReadMore v-if="this.$store.state.show" />
      </transition>
    </div>
    <NavbarBottom />
  </div>
</template>
<script>
import MyTitle from "./MainPage/MyTitle.vue";
import MySummary from "./MainPage/MySummary.vue";
import ReadMore from "./MainPage/ReadMore.vue";
import NavbarBottom from "./NavbarBottom.vue";
import MyLogo from "./MainPage/MyLogo.vue";
export default {
  mounted() {
    setTimeout(() => {
      this.$store.commit("ShowTrue");
    }, 300);
  },
  methods: {
    ScrollRight() {
      window.scrollTo({
        top: 0,
        left: 100000,
        behavior: "smooth",
      });
    },
  },
  components: {
    MyTitle,
    MySummary,
    ReadMore,
    MyLogo,
    NavbarBottom,
  },
};
</script>
<style scoped>
.title-enter-from {
  transform: translateX(-40px) rotateZ(-35deg) scale(1.5);
  opacity: 0;
  transition: all 1s ease;
}
.title-enter-to {
  transform: translateX(0px) rotateZ(deg) scale(1);
  opacity: 1;
  transition: all 1s ease;
}
.summary-enter-from {
  transform: translateX(50px) rotateZ(35deg);
  opacity: 0;
  transition: all 1s ease;
}
.summary-enter-to {
  transform: translateX(0px) rotateZ(0deg);
  opacity: 1;
  transition: all 1s ease;
}
.read-enter-from{
  transform: scale(0.5);
  opacity: 0;
  transition: all 1.2s ease;
}
.read-enter-to{
  transform: scale(1);
  opacity: 1;
  transition: all 1.2s ease;
}
</style>
>
