<template>
  <div class="flex flex-col items-center h-screen">
    <div
      class="w-full gap-8 relative flex flex-col items-center justify-center p-5"
    >
      <div @click="next" class="absolute bottom-0 right-10">next project</div>
      <div class="absolute bottom-0 left-10">prev project</div>
      <div
        class="fixed top-1 left-1 bg-white p-1 rounded-2xl shadow-md cursor-pointer select-none"
      >
        <span :class="online === true ? 'text-green-500' : 'text-red-500'">{{
          online === true ? "Online" : "Offline"
        }}</span>
      </div>
      <h1 class="text-center md:text-5xl text-3xl mt-2 text-blue-800">
        Products
      </h1>
      <div
        v-if="show === 1"
        class="flex flex-col gap-4 sm:w-1/3 p-4 ring-1 ring-gray-300 h-[70vh] shadow-md relative"
      >
        <img
          src="./../../public/MyImage/pexels-photo-9668543.jpeg"
          class="h-1/2 w-full object-cover object-center shadow-md"
          alt=""
        />
        <h1 class="text-2xl text-blue-900 border-b-2 border-pink-500 w-[30%]">
          Todo list
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
          voluptatum deserunt optio nobis cumque omnis error esse corrupti
          blanditiis numquam consectetur, maiores mollitia a, libero soluta
          quis! Possimus, modi quo?
        </p>
        <div
          class="border border-blue-900 transition select-none shadow-md text-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer w-[30%] text-center p-2"
        >
          Read more
        </div>
      </div>
      <div
        v-if="show === 2"
        class="flex flex-col gap-4 sm:w-1/3 p-4 ring-1 ring-gray-300 h-[70vh] shadow-md relative"
      >
        <img
          src="./../../public/MyImage/pexels-photo-9668543.jpeg"
          class="h-1/2 w-full object-cover object-center shadow-md"
          alt=""
        />
        <h1 class="text-2xl text-blue-900 border-b-2 border-pink-500 w-[30%]">
          DaalShop
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
          voluptatum deserunt optio nobis cumque omnis error esse corrupti
          blanditiis numquam consectetur, maiores mollitia a, libero soluta
          quis! Possimus, modi quo?
        </p>
        <div
          class="border border-blue-900 transition select-none shadow-md text-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer w-[30%] text-center p-2"
        >
          Read more
        </div>
      </div>
      <!-- <div class="grid grid-cols-1 mt-3 gap-4 p-3">
        <transition name="first">
          <div
            v-if="show"
            class="shadow-md ring-1 ring-gray-300 h-[20vh] flex flex-row cursor-pointer"
          >
            <div class="w-1/2 p-2">
              <img
                src="./../../public/MyImage/69b13e8c2b404332afd6a9dae866332e.png"
                class="h-full w-[90%] object-cover object-center rounded-full shadow-md"
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
          <div v-if="show" class="h-[20vh]">
            <div
              v-if="show"
              class="shadow-md ring-1 ring-gray-300 h-[20vh] flex flex-row cursor-pointer"
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
          <div v-if="show" class="h-[20vh]">
            <div
              v-if="show"
              class="shadow-md ring-1 ring-gray-300 h-[20vh] flex flex-row cursor-pointer"
            >
              <div class="w-1/2 p-2">
                <img
                  src="./../../public/MyImage/pexels-photo-9668543.jpeg"
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
      </div>-->
    </div>
    <NavbarBottom />
  </div>
</template>
<script>
import NavbarBottom from "./NavbarBottom.vue";
import { ref } from "vue";
import { useTitle } from "@vueuse/core";
import { useOnline } from "@vueuse/core";
export default {
  setup() {
    //online status
    const online = useOnline();
    //change title
    const title = useTitle();
    title.value = "Product";
    //data
    let show = ref(1);
    //function
    function next() {
      show.value = 2;
    }
    return { next, show, online };
  },
  components: {
    NavbarBottom,
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
