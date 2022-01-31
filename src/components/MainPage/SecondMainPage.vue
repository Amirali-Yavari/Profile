<template>
  <div class="h-full w-1/2 relative">
    <div
      @click="ScrollLeft"
      class="absolute mb-1 bottom-4 left-12 cursor-pointer text-pink-500 font-bold select-none"
    >
      Scroll left
    </div>
    <img
      src="./../../../public/MyImage/pic1.png"
      class="object-cover h-[97%] ml-10"
      alt=""
    />
  </div>
</template>
<script>
export default {
  methods: {
    ScrollLeft() {
      window.scrollTo({
        top: 0,
        left: -100000,
        behavior: "smooth",
      });
    },
  },
 
  components: {},
};
</script>
<style></style>
