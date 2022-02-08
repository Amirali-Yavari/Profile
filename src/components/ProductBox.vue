<template>
  <div
    class="flex flex-col gap-4 md:w-1/3 p-4 ring-1 ring-gray-300 h-[70vh] shadow-md relative"
  >
    <img
      src="./../../public/MyImage/pexels-photo-9668543.jpeg"
      class="h-1/2 w-full object-cover object-center shadow-md"
      alt=""
    />
    <h1 class="text-2xl text-blue-900 border-b-2 border-pink-500 w-[50%]">
      {{ title }}
    </h1>
    <p>
      {{ text }}
    </p>
    <div
      class="border border-blue-900 transition select-none shadow-md text-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer w-[30%] text-center p-2"
    >
      More
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    text: String,
    show: Number,
  },
};
</script>
