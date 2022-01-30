<template>
  <div
    class="h-[100vh] flex flex-row w-[200vw] bg-MainBackground bg-no-repeat bg-cover">
    <MainPage1 />
    <AboutTeamPage />
  </div>
</template>
<script>
import MainPage1 from "./MainPageSummary.vue";
import AboutTeamPage from "./AboutTeamPage.vue";
export default {
  components: {
    MainPage1,
    AboutTeamPage,
  },
};
</script>
