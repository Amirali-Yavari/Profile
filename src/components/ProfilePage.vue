<template>
  <div class="h-screen w-[200vw] flex flex-row">
    <div class="w-1/2 flex flex-col p-5 gap-1">
      <div class="w-full flex items-center justify-center">
        <img
          src="./../../public/MyImage/vv-min.jpg"
          class="rounded-full w-2/3"
          alt=""
        />
      </div>

      <h1 class="text-3xl text-left text-blue-900">Profile</h1>
      <p class="text-lg">Im a Front-End Developer and Designer</p>
      <h2 class="text-2xl text-blue-900 mt-5">About Me</h2>
      <p class="text-lg mt-2">
        At first i programed the Windows application with C# then i know the PHP
        and i liked Back-End on thats time i meet
        <a
          href="https://github.com/shahabbasian/"
          class="text-pink-500"
          target="_blank"
          >mr.ShahAbbasian</a
        >
        and
        <a href="https://damoon.pro/" target="_blank" class="text-pink-500"
          >Damoon</a
        >
        they helped me to find my way by the time I liked Front-End and
        Javascript
      </p>
    </div>
    <div class="w-1/2 flex flex-col p-5">
    <h2 class="">Details</h2>
    </div>
    <NavbarBottom />
  </div>
</template>
<script>
import NavbarBottom from "./NavbarBottom.vue";
export default {
  components: {
    NavbarBottom,
  },
};
</script>
