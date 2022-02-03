<template>
  <div class="h-screen w-full flex relative">
    <div class="absolute top-1 left-1 bg-white p-1 rounded-2xl shadow-md">
      status :
      <span :class="online === true ? 'text-green-500' : 'text-red-500'">{{
        online === true ? "Online" : "Offline"
      }}</span>
    </div>
    <div class="w-full flex flex-col p-5 gap-1">
      <div class="w-full flex items-center justify-center">
        <img
          src="./../../public/MyImage/vv-min.jpg"
          class="rounded-full w-2/3 shadow-md"
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
          >Mr.ShahAbbasian</a
        >
        and
        <a href="https://damoon.pro/" target="_blank" class="text-pink-500"
          >Damoon</a
        >
        they helped me to find my way by the time I liked Front-End and
        Javascript
      </p>
    </div>
    <NavbarBottom />
  </div>
</template>
<script>
import NavbarBottom from "./NavbarBottom.vue";
import { useTitle } from "@vueuse/core";
import { useOnline } from "@vueuse/core";
export default {
  setup() {
    //online status
    const online = useOnline();
    // change title
    const title = useTitle();
    title.value = "Profile";
    return { online };
  },
  components: {
    NavbarBottom,
  },
};
</script>
