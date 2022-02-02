<template>
  <div
    class="w-full h-screen bg-black/70 gap-2 items-center justify-center flex flex-col shadow-lg shadow-black fixed top-0 left-0"
  >
    <div
      v-if="modalValue == 'Instagram'"
      class="bg-white w-2/3 shadow-md shadow-black h-1/3 flex flex-col items-center gap-3 p-5 relative"
    >
      <div
        @click="closebtn"
        class="w-6 h-6 bg-pink-600 rounded-full text-white shadow-sm shadow-black flex items-center justify-center absolute -top-2 -right-2 select-none cursor-pointer"
      >
        X
      </div>
      <h2 class="text-2xl text-blue-900">My {{ modalValue }}</h2>
      <p class="text-center">You can follow me on Instagram</p>
      <a href="" target="_blank">
        <div
          class="text-2xl p-2 text-white bg-pink-500 font-logo cursor-pointer select-none hover:bg-pink-700 ring-1 shadow-md shadow-gray-700 ring-pink-900 rounded-sm transition"
        >
          @Amirali_Crl
        </div>
      </a>
    </div>
    <div
      v-if="modalValue == 'Telegram'"
      class="bg-white w-2/3 shadow-md shadow-black h-1/3 flex flex-col items-center gap-3 p-5 relative"
    >
      <div
        @click="closebtn"
        class="w-6 h-6 bg-pink-600 rounded-full text-white shadow-sm shadow-black flex items-center justify-center absolute -top-2 -right-2 select-none cursor-pointer"
      >
        X
      </div>
      <h2 class="text-2xl text-blue-900">My {{ modalValue }}</h2>
      <p class="text-center">You can send me a message</p>
      <a href="" target="_blank">
        <div
          class="text-2xl p-2 text-white bg-pink-500 font-logo cursor-pointer select-none hover:bg-pink-700 ring-1 shadow-md shadow-gray-700 ring-pink-900 rounded-sm transition"
        >
          @Amirali_Crl
        </div>
      </a>
    </div>
    <div
      v-if="modalValue == 'Email'"
      class="bg-white w-2/3 shadow-md shadow-black h-1/3 flex flex-col items-center gap-3 p-5 relative"
    >
      <div
        @click="closebtn"
        class="w-6 h-6 bg-pink-600 rounded-full text-white shadow-sm shadow-black flex items-center justify-center absolute -top-2 -right-2 select-none cursor-pointer"
      >
        X
      </div>
      <h2 class="text-2xl text-blue-900">My {{ modalValue }}</h2>
      <p class="text-center">You can send me a email</p>
      <a href="" target="_blank">
        <div
          class="text-sm p-2 text-white bg-pink-500 font-logo cursor-pointer select-none hover:bg-pink-700 ring-1 shadow-md shadow-gray-700 ring-pink-900 rounded-sm transition"
        >
          Amiraliyavari785@gmail.com
        </div>
      </a>
    </div>
    <div
      v-if="modalValue == 'Github'"
      class="bg-white w-2/3 shadow-md shadow-black h-1/3 flex flex-col items-center gap-3 p-5 relative"
    >
      <div
        @click="closebtn"
        class="w-6 h-6 bg-pink-600 rounded-full text-white shadow-sm shadow-black flex items-center justify-center absolute -top-2 -right-2 select-none cursor-pointer"
      >
        X
      </div>
      <h2 class="text-2xl text-blue-900">My {{ modalValue }}</h2>
      <p class="text-center">You can see my project in github</p>
      <a href="https://github.com/Amirali-Yavari">
        <div
          class="text-2xl p-2 text-white bg-pink-500 font-logo cursor-pointer select-none hover:bg-pink-700 ring-1 shadow-md shadow-gray-700 ring-pink-900 rounded-sm transition"
        >
          Amirali-Yavari
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["modalValue"],
  methods: {
    closebtn() {
      this.$emit("closebtn");
    },
  },
};
</script>
