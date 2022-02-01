<template>
  <div class="h-[90vh] flex flex-row w-[200vw] bg-gray-200">
    <AboutTeamPage />
    <MainpageRiasat />
  </div>
</template>
<script>
import MainpageRiasat from "./MainPage/SecondMainPage.vue";
import AboutTeamPage from "./FirstMainPage";
export default {
  components: {
    AboutTeamPage,
    MainpageRiasat,
  },
};
</script>
