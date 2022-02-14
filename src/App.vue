<template>
  <transition name="tip">
    <TipStarter v-if="showTip" />
  </transition>

  <router-view v-slot="{ Component }">
    <transition name="Slide" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
</template>
<script>
import TipStarter from "./components/TipStarter.vue";
import { ref } from "vue";
export default {
  setup() {
    const showTip = ref(true);
    setTimeout(() => {
      showTip.value = false;
    }, 7000);
    return { showTip };
  },
  components: {
    TipStarter,
  },
};
</script>
<style>
.tip-leave-from {
  opacity: 1;
  transition: all 0.5s ease;
  transform: translateY(0px);
}
.tip-leave-to {
  opacity: 0;
  transform: translateY(-100px);
  transition: all 0.5s ease;
}
.Slide-enter-from {
  opacity: 0;
  transition: all 0.5s ease;
}
.Slide-enter-to {
  opacity: 1;
  transition: all 0.5s ease;
}
.Slide-leave-to {
  opacity: 0;
  transition: all 0.7s ease;
}
.Slide-leave-from {
  opacity: 1;
  transition: all 0.7s ease;
}
</style>
