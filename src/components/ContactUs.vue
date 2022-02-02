<template>
  <div class="h-[80vh] w-[200vw] flex flex-row items-center">
    <div class="w-1/2 flex flex-col p-10 gap-8 relative">
      <div
        @click="ScrollRight"
        class="absolute mb-1 -bottom-1 right-4 cursor-pointer font-bold select-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 bg-pink-500 rounded-full text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
      <h1 class="text-3xl text-blue-900">Contact Us</h1>
      <p class="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        explicabo praesentium ratione nam adipisci nobis, eius nesciunt
        voluptate nihil saepe quibusdam, deserunt ut ad perferendis dolorem
        pariatur quo minus officia!
      </p>
      <div class="grid grid-cols-2 grid-rows-2 gap-2">
        <div
          @click="instagram"
          class="flex flex-row gap-1 items-center text-lg select-none transform hover:scale-105 transition cursor-pointer shadow-md ring-1 ring-gray-300"
        >
          <img
            class="w-10 h-10"
            src="./../../public/MyImage/icons8-instagram-48.png"
            alt=""
          />
          Instagram
        </div>
        <div
          @click="telegram"
          class="flex flex-row items-center text-lg gap-1 select-none transform hover:scale-105 transition cursor-pointer shadow-md ring-1 ring-gray-300"
        >
          <img
            class="w-10 h-10"
            src="./../../public/MyImage/icons8-telegram-app-48.png"
            alt=""
          />
          Telegram
        </div>
        <div
          @click="email"
          class="flex flex-row items-center text-lg gap-1 select-none transform hover:scale-105 transition cursor-pointer shadow-md ring-1 ring-gray-300"
        >
          <img
            class="w-8 h-8 mr-1 ml-1"
            src="./../../public/MyImage/icons8-email-sign-100.png"
            alt=""
          />
          Email
        </div>
        <div
          @click="github"
          class="flex flex-row items-center text-lg gap-1 select-none transform hover:scale-105 transition cursor-pointer shadow-md ring-1 ring-gray-300"
        >
          <img
            class="w-10 h-10"
            src="./../../public/MyImage/icons8-github-48.png"
            alt=""
          />
          Github
        </div>
      </div>
    </div>
    <div class="w-1/2 flex flex-col items-center gap-3 relative">
      <div
        @click="ScrollLeft"
        class="absolute mb-1 -bottom-10 left-4 cursor-pointer text-pink-500 font-bold select-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 bg-pink-500 rounded-full text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="FullName"
        class="w-3/4 p-2 ring-1 ring-gray-400 shadow-md"
      />
      <input
        type="email"
        placeholder="Email"
        class="w-3/4 p-2 ring-1 ring-gray-400 shadow-md"
      />
      <textarea
        cols="30"
        rows="10"
        class="w-3/4 p-2 ring-1 ring-gray-400 shadow-md"
        placeholder="Message text"
      ></textarea>
      <div
        class="w-1/3 ring-1 ring-blue-900 p-2 text-lg flex items-center justify-center text-blue-900 shadow-lg hover:bg-blue-900 hover:text-white font-semibold cursor-pointer transition"
      >
        Send
      </div>
    </div>
    <NavbarBottom />
  </div>
  <transition name="modal">
    <ModalContact
      @closebtn="closebtn"
      :modalValue="modalValue"
      v-if="showModal"
    />
  </transition>
</template>
<script>
import NavbarBottom from "./NavbarBottom.vue";
import ModalContact from "./ModalContactPage.vue";
export default {
  data() {
    return { modalValue: "", showModal: false };
  },
  methods: {
    closebtn() {
      this.modalValue = "";
      this.showModal = false;
    },
    instagram() {
      this.modalValue = "Instagram";
      this.showModal = true;
    },
    telegram() {
      this.modalValue = "Telegram";
      this.showModal = true;
    },
    email() {
      this.modalValue = "Email";
      this.showModal = true;
    },
    github() {
      this.modalValue = "Github";
      this.showModal = true;
    },
    ScrollLeft() {
      window.scrollTo({
        top: 0,
        left: -100000,
        behavior: "smooth",
      });
    },
    ScrollRight() {
      window.scrollTo({
        top: 0,
        left: 100000,
        behavior: "smooth",
      });
    },
  },
  components: {
    NavbarBottom,
    ModalContact,
  },
};
</script>
<style>
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.1) rotateZ(45deg);
  transition: all 0.5s ease;
}
.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: scale(1);
  transition: all 0.5s ease;
}
</style>
