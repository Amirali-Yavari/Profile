<template>
  <div
    class="w-full h-12 flex flex-row justify-around bg-gradient-to-t from-violet-400/70 fixed bottom-0 rounded-md"
  >
    <router-link to="/members">
      <div class="flex flex-col items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          :class="this.$route.name == 'Members' ? 'activeNav' : ''"
          class="iconify iconify--ant-design text-white"
          width="28"
          height="28"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M824.2 699.9a301.55 301.55 0 0 0-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200c-109.1 1.7-197 90.6-197 200c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 0 1 612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 0 0 8-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88c24-24.6 56.1-38.3 90.4-38.7c33.9-.3 66.8 12.9 91 36.6c24.8 24.3 38.4 56.8 38.4 91.4c0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 0 1 612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4c0-15.9 1.5-31.4 4.3-46.5c.7-3.6-1.2-7.3-4.5-8.8c-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6c24.7-25.3 57.9-39.1 93.2-38.7c31.9.3 62.7 12.6 86 34.4c7.9 7.4 14.7 15.6 20.4 24.4c2 3.1 5.9 4.4 9.3 3.2c17.6-6.1 36.2-10.4 55.3-12.4c5.6-.6 8.8-6.6 6.3-11.6c-32.5-64.3-98.9-108.7-175.7-109.9c-110.9-1.7-203.3 89.2-203.3 199.9c0 62.8 28.9 118.8 74.2 155.5c-31.8 14.7-61.1 35-86.5 60.4c-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5c29.4-29.4 65.4-49.8 104.7-59.7c3.9-1 6.5-4.7 6-8.7z"
            fill="currentColor"
          ></path>
        </svg>
        <h2 class="text-white">Memebers</h2>
      </div>
    </router-link>

    <router-link to="/Product">
      <div class="flex flex-col items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          :class="this.$route.name == 'Product' ? 'activeNav' : ''"
          class="iconify iconify--icon-park-outline text-white"
          width="28"
          height="28"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 48 48"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linejoin="round"
          >
            <path d="M44 14L24 4L4 14v20l20 10l20-10V14z"></path>
            <path d="M4 14l20 10" stroke-linecap="round"></path>
            <path d="M24 44V24" stroke-linecap="round"></path>
            <path d="M44 14L24 24" stroke-linecap="round"></path>
            <path d="M34 9L14 19" stroke-linecap="round"></path>
          </g>
        </svg>
        <h2 class="text-white">Product</h2>
      </div>
    </router-link>
    <router-link to="/">
      <div class="flex flex-col items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          :class="this.$route.name == 'Home' ? 'activeNav' : ''"
          class="iconify iconify--carbon text-white "
          width="28"
          height="28"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
        >
          <path
            d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428zM18 26h-4v-8h4zm2 0v-8a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26z"
            fill="currentColor"
          ></path>
        </svg>
        <h2 class="text-white">Home</h2>
      </div>
    </router-link>
    <router-link to="/Contact">
      <div class="flex flex-col items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          :class="this.$route.name == 'Contact' ? 'activeNav' : ''"
          class="iconify iconify--ic text-white"
          width="28"
          height="28"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            d="M17.38 10.79l-2.2-2.2c-.28-.28-.36-.67-.25-1.02c.37-1.12.57-2.32.57-3.57c0-.55.45-1 1-1H20c.55 0 1 .45 1 1c0 9.39-7.61 17-17 17c-.55 0-1-.45-1-1v-3.49c0-.55.45-1 1-1c1.24 0 2.45-.2 3.57-.57c.35-.12.75-.03 1.02.24l2.2 2.2c2.83-1.45 5.15-3.76 6.59-6.59z"
            fill="currentColor"
          ></path>
        </svg>
        <h2 class="text-white">ContactUs</h2>
      </div>
    </router-link>
    <div class="flex flex-col items-center cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="iconify iconify--mdi text-white"
        width="28"
        height="28"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          d="M10 17v-3H3v-4h7V7l5 5l-5 5m0-15h9a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-2h2v2h9V4h-9v2H8V4a2 2 0 0 1 2-2z"
          fill="currentColor"
        ></path>
      </svg>
      <h2 class="text-white">Login</h2>
    </div>
  </div>
</template>
<script></script>
