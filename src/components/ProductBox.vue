<template>
  <div
    class="flex flex-col gap-4 md:w-1/3 ring-1 ring-gray-300 bg-gray-100 p-4 h-[70vh] relative"
  >
    <img
      v-if="image == 1"
      src="./../../public/MyImage/image1.jpg"
      class="h-1/2 w-full object-cover object-center shadow-md"
      :alt="image"
    />
    <img
      v-if="image == 2"
      src="./../../public/MyImage/image3.jpeg"
      class="h-1/2 w-full object-cover object-center shadow-md"
      :alt="image"
    />
    <img
      v-if="image == 3"
      src="./../../public/MyImage/image2.jpg"
      class="h-1/2 w-full object-cover object-center shadow-md"
      :alt="image"
    />
    <h1 class="text-3xl text-blue-900 border-b-2 border-pink-500 w-[50%]">
      {{ title }}
    </h1>
    <p class="md:text-xl">
      {{ text }}
    </p>
    
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    text: String,
    image: String,
    show: Number,
  },
};
</script>
