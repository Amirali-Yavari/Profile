<template>
  <div class="flex flex-col items-center h-screen">
    <div
      class="w-full gap-8 relative flex flex-col items-center justify-center p-5"
    >
      <div
        @click="next"
        class="absolute -bottom-1 right-10 select-none cursor-pointer"
      >
        Next project
      </div>
      <div
        @click="prev"
        class="absolute -bottom-1 left-10 select-none cursor-pointer"
      >
        prev project
      </div>
      <h1 class="text-center md:text-5xl text-3xl mt-2 text-blue-800">
        Products
      </h1>
      <transition name="first">
        <div
          v-if="show === 1"
          class="flex flex-col gap-4 md:w-1/3 p-4 ring-1 ring-gray-300 h-[70vh] shadow-md relative"
        >
          <img
            src="./../../public/MyImage/pexels-photo-9668543.jpeg"
            class="h-1/2 w-full object-cover object-center shadow-md"
            alt=""
          />
          <h1 class="text-2xl text-blue-900 border-b-2 border-pink-500 w-[50%]">
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
            More
          </div>
        </div>
      </transition>
      <transition name="first"
        ><div
          v-if="show === 2"
          class="flex flex-col gap-4 sm:w-1/3 p-4 ring-1 ring-gray-300 h-[70vh] shadow-md relative"
        >
          <img
            src="./../../public/MyImage/pexels-photo-9849841.jpeg"
            class="h-1/2 w-full object-cover object-top shadow-md"
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
            More
          </div>
        </div></transition
      >
      <transition name="first"
        ><div
          v-if="show === 3"
          class="flex flex-col gap-4 sm:w-1/3 p-4 ring-1 ring-gray-300 h-[70vh] shadow-md relative"
        >
          <img
            src="./../../public/MyImage/69b13e8c2b404332afd6a9dae866332e.png"
            class="h-1/2 w-full object-cover object-center shadow-md"
            alt=""
          />
          <h1 class="text-2xl text-blue-900 border-b-2 border-pink-500 w-[30%]">
            MyProfile
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
            More
          </div>
        </div></transition
      >
    </div>
    <NavbarBottom />
  </div>
</template>
<script>
import NavbarBottom from "./NavbarBottom.vue";
import { ref } from "vue";
import { useTitle } from "@vueuse/core";
import { onKeyStroke } from "@vueuse/core";
export default {
  setup() {
    //change title
    const title = useTitle();
    title.value = "Product";
    //data
    let show = ref(1);
    //function
    function next() {
      switch (show.value) {
        case 1:
          show.value = 2;
          break;
        case 2:
          show.value = 3;
          break;
        case 3:
          show.value = 1;
          break;
      }
    }
    function prev() {
      switch (show.value) {
        case 1:
          show.value = 3;
          break;
        case 2:
          show.value = 1;
          break;
        case 3:
          show.value = 2;
          break;
      }
    }
    //onKey
    onKeyStroke("ArrowRight", () => {
      switch (show.value) {
        case 1:
          show.value = 2;
          break;
        case 2:
          show.value = 3;
          break;
        case 3:
          show.value = 1;
          break;
      }
    });
    onKeyStroke("ArrowLeft", () => {
      switch (show.value) {
        case 1:
          show.value = 3;
          break;
        case 2:
          show.value = 1;
          break;
        case 3:
          show.value = 2;
          break;
      }
    });
    return { prev, next, show };
  },
  components: {
    NavbarBottom,
  },
};
</script>
<style>
.first-enter-from {
  opacity: 0;
  transform: translateY(-50px);
  transition: all 1s ease;
}
.first-enter-to {
  opacity: 1;
  transform: translateY(0);
  transition: all 1s ease;
}
</style>
