<template>
  <div
    class="h-[100vh] flex flex-row w-[200vw] bg-MainBackground bg-no-repeat bg-cover"
  > 
    <MainpageRiasat />
    <AboutTeamPage />
  </div>
</template>
<script>
import MainpageRiasat from "./MainPage/MainpageRiasat.vue";
import AboutTeamPage from "./AboutTeamPage.vue";
export default {
  components: {
    AboutTeamPage,
    MainpageRiasat,
  },
};
</script>
