<template>
  <div class="h-[98vh] w-1/2 relative">
    <div class="absolute mb-1 bottom-16 right-10 cursor-pointer text-orange-500 font-bold">scroll right</div>
    <div class="p-10 flex flex-col gap-4">
      <MyLogo />
      <MyTitle />
      <MySummary />
    </div>

    <NavbarBottom />
  </div>
</template>
<script>
import MyTitle from "./MainPage/MyTitle.vue";
import MySummary from "./MainPage/MySummary.vue";
import NavbarBottom from "./NavbarBottom.vue";
import MyLogo from "./MainPage/MyLogo.vue";
export default {
  components: {
    MyTitle,
    MySummary,
    MyLogo,
    NavbarBottom,
  },
};
</script>
<style scoped></style>
>
