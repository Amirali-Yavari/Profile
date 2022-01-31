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
      <MyTitle />
      <MySummary />
      <ReadMore />
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
<style scoped></style>
>
