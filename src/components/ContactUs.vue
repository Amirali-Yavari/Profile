<template>
  <div
    class="h-[80vh] w-[200vw] sm:w-[100vw] flex flex-row items-center relative"
  >
    <OnlineError v-if="online === false" />
    <FirstPage />
    <SecondPage />
    <NavbarBottom />
  </div>
</template>
<script>
import NavbarBottom from "./NavbarBottom.vue";
import OnlineError from "./OnlineError.vue";
import FirstPage from "./ContactUsFirst.vue";
import SecondPage from "./ContactUsSecond.vue";
import { useTitle } from "@vueuse/core";
import { useOnline } from "@vueuse/core";
export default {
  setup() {
    //online status
    const online = useOnline();
    // Change Title
    const title = useTitle();
    title.value = "Contact Us";
    //---------------------------
    return {
      online,
    };
  },
  components: {
    SecondPage,
    FirstPage,
    NavbarBottom,
    OnlineError,
  },
};
</script>
