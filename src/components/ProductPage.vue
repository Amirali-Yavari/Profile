<template>
  <div>
    <h1 class="text-center text-3xl mt-2 text-blue-800">Products</h1>
    <div class="grid grid-cols-1 mt-3 gap-4 p-3">
      <transition name="first">
        <div v-if="show" class="bg-red-200 h-[25vh]">1</div>
      </transition>
      <transition name="second">
        <div v-if="show" class="bg-green-200 h-[25vh]">2</div>
      </transition>
      <transition name="third">
        <div v-if="show" class="bg-blue-200 h-[25vh]">1</div>
      </transition>
      <!-- <transition name="fourth">
        <div v-if="show" class="bg-teal-200 h-[25vh]">2</div>
      </transition> -->
    </div>
    <NavbarBottom />
  </div>
</template>
<script>
import NavbarBottom from "./NavbarBottom.vue";
export default {
  mounted() {
    setTimeout(() => (this.show = true), 300);
  },
  components: {
    NavbarBottom,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>
<style>
.first-enter-from {
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.5s ease;
}
.first-enter-to {
  transform: translateY(0px);
  opacity: 1;
  transition: all 0.5s ease;
}
.second-enter-from {
  transform: translateY(100px);
  opacity: 0;
  transition: all 1s ease;
}
.second-enter-to {
  transform: translateY(0px);
  opacity: 1;
  transition: all 1s ease;
}
.third-enter-from{
  transform: translateY(100px);
  opacity: 0;
  transition: all 1.5s ease;
}
.third-enter-to{
  transform: translateY(0px);
  opacity: 1;
  transition: all 1.5s ease;
}
.fourth-enter-from{
  transform: translateY(100px);
  opacity: 0;
  transition: all 2s ease;
}
.fourth-enter-to{
  transform: translateY(0px);
  opacity: 1;
  transition: all 2s ease;
}
</style>
