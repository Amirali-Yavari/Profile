<template>
  <div class="h-[90vh] w-1/2 relative flex">
    <div
      @click="ScrollRight"
      class="absolute mb-1 animate-bounce bottom-0 right-4 cursor-pointer font-bold select-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 bg-pink-500 rounded-full text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
    <div class="p-10 flex flex-col gap-8">
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
// import { onMounted } from "vue";
export default {
  // setup() {
  //   onMounted(() => {
  //     setTimeout(() => {
  //       this.$store.commit("ShowTrue");
  //     }, 300);
  //   });
  // },
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
.read-enter-from {
  transform: scale(0.5);
  opacity: 0;
  transition: all 1.2s ease;
}
.read-enter-to {
  transform: scale(1);
  opacity: 1;
  transition: all 1.2s ease;
}
</style>
>
