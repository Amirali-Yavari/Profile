<template>
  <div class="h-screen w-full flex">
    <vue-particles
      class="absolute w-full top-0 left-0 h-screen z-10"
      color="#EC4899"
      :particleOpacity="0.4"
      :particlesNumber="50"
      shapeType="circle"
      :particleSize="4"
      linesColor="#EC4899"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <OnlineError v-if="online === false" />
    <div class="w-full flex flex-col p-5 gap-1">
      <div class="w-full flex items-center justify-center">
        <img
          src="./../../public/MyImage/person_3-removebg-preview.png"
          class="rounded-full z-20 w-1/3 md:fixed md:h-full md:right-0 md:top-0 md:rounded-none md:w-2/4 shadow-md md:shadow-none md:object-cover md:object-top"
          alt=""
        />
      </div>
      <div
        class="md:w-2/4 w-full mt-2 md:flex md:flex-col md:justify-center md:h-screen md:gap-5"
      >
        <h1 class="text-3xl md:text-5xl z-20 text-blue-900">Profile</h1>
        <p class="text-lg md:text-2xl z-20">
          Im a Front-End Developer and Designer
        </p>
        <h2 class="text-3xl md:text-3xl z-20 text-blue-900">About Me</h2>
        <p class="text-lg md:text-2xl z-20 mt-2">
          At first i programed the Windows application with C# then i know the
          PHP and i liked Back-End on thats time i meet
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
    </div>
    <NavbarBottom />
  </div>
</template>
<script>
import NavbarBottom from "./NavbarBottom.vue";
import { useTitle } from "@vueuse/core";
import { useOnline } from "@vueuse/core";
import OnlineError from "./OnlineError.vue";
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
    OnlineError,
  },
};
</script>
