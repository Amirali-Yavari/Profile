<template>
  <div class="flex flex-col h-screen">
    <div class="h-[87%]">
      <h1 class="text-center text-3xl mt-2 text-blue-800">Products</h1>
      <div class="grid grid-cols-1 mt-3 gap-4 p-3">
        <transition name="first">
          <div
            v-if="show"
            class="shadow-md ring-1 ring-gray-300 h-[24vh] flex flex-row cursor-pointer"
          >
            <div class="w-1/2 p-2">
              <img
                src="./../../public/MyImage/69b13e8c2b404332afd6a9dae866332e.png"
                class="h-full w-[90%] object-cover object-top rounded-full shadow-md"
                alt=""
              />
            </div>
            <div class="w-1/2 h-full p-2 flex flex-col">
              <h3
                class="text-xl border-b-2 text-center border-pink-500 text-blue-900"
              >
                Todo list
              </h3>
              <p class="h-2/3 text-justify">
                This Project is for my Vue training and its my first project
              </p>
            </div>
          </div>
        </transition>
        <transition name="second">
          <div v-if="show" class="h-[24vh]">
            <div
              v-if="show"
              class="shadow-md ring-1 ring-gray-300 h-[24vh] flex flex-row cursor-pointer"
            >
              <div class="w-1/2 p-2">
                <img
                  src="./../../public/MyImage/pexels-photo-9849841.jpeg"
                  class="h-full w-[90%] object-cover object-top rounded-full shadow-md"
                  alt=""
                />
              </div>
              <div class="w-1/2 h-full p-2 flex flex-col">
                <h3
                  class="text-xl border-b-2 text-center border-pink-500 text-blue-900"
                >
                  DaalShop
                </h3>
                <p class="h-2/3 text-justify">
                  This is a Startup that we started to make it again
                </p>
              </div>
            </div>
          </div>
        </transition>
        <transition name="third">
          <div v-if="show" class="h-[25vh]">
            <div
              v-if="show"
              class="shadow-md ring-1 ring-gray-300 h-[24vh] flex flex-row cursor-pointer"
            >
              <div class="w-1/2 p-2">
                <img
                  src="./../../public/MyImage/pexels-photo-8718614.jpeg"
                  class="h-full w-[90%] object-cover object-top rounded-full shadow-md"
                  alt=""
                />
              </div>
              <div class="w-1/2 h-full p-2 flex flex-col">
                <h3
                  class="text-xl border-b-2 text-center border-pink-500 text-blue-900"
                >
                  My Profilo Site
                </h3>
                <p class="h-2/3 text-justify">
                  I make it for my own to i put my ended project into it 
                </p>
              </div>
            </div>
          </div>
        </transition>
        <!-- <transition name="fourth">
        <div v-if="show" class="bg-teal-200 h-[25vh]">2</div>
      </transition> -->
      </div>
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
.third-enter-from {
  transform: translateY(100px);
  opacity: 0;
  transition: all 1.5s ease;
}
.third-enter-to {
  transform: translateY(0px);
  opacity: 1;
  transition: all 1.5s ease;
}
.fourth-enter-from {
  transform: translateY(100px);
  opacity: 0;
  transition: all 2s ease;
}
.fourth-enter-to {
  transform: translateY(0px);
  opacity: 1;
  transition: all 2s ease;
}
</style>
