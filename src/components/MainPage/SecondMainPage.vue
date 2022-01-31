<template>
  <div class="h-full w-1/2 relative">
    <div
      @click="ScrollLeft"
      class="absolute mb-1 bottom-3 left-9 cursor-pointer text-pink-500 font-bold select-none"
    >
      Scroll left
    </div>
    <img src="./../../../public/MyImage/vv-min.jpg" class="object-cover h-[97%]" alt="">
  </div>
</template>
<script>
export default {
  methods:{
    ScrollLeft(){
      window.scrollTo({
        top: 0,
        left: -100000,
        behavior: "smooth",
      });
    }
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit("ShowTrue");
    }, 300);
  },
  components: {},
};
</script>
<style></style>
