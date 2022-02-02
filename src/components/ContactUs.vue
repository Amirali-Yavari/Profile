<template>
  <div class="h-[80vh] w-[200vw] flex flex-row items-center">
    <div class="w-1/2 flex flex-col p-10 gap-8">
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
    <div class="w-1/2">2</div>
    <NavbarBottom />
  </div>
  <ModalContact />
</template>
<script>
import NavbarBottom from "./NavbarBottom.vue";
import ModalContact from "./ModalContactPage.vue";
export default {
  data() {
    return { modalValue: "", showModal: false };
  },
  methods: {
    instagram() {
      this.modalValue = "instagram";
      this.showModal = true;
    },
    telegram() {
      this.modalValue = "telegram";
      this.showModal = true;
    },
    email() {
      this.modalValue = "email";
      this.showModal = true;
    },
    github() {
      this.modalValue = "github";
      this.showModal = true;
    },
  },
  components: {
    NavbarBottom,
    ModalContact,
  },
};
</script>
