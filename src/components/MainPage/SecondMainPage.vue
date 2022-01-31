<template>
  <div class="h-full w-1/2">
    <img src="./../../../public/MyImage/vv-min.jpg" class="object-cover h-[97%]" alt="">
  </div>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$store.commit("ShowTrue");
    }, 300);
  },
  components: {},
};
</script>
<style></style>
