import { createStore } from "vuex";

export default createStore({
  state: {
    show: false,
    MainPageShow: "first",
  },
  mutations: {
    changeMainpageShowSecond(state) {
      state.MainPageShow = "second";
    },
    changeMainpageShowFirst(state) {
      state.MainPageShow = "first";
    },
    ShowTrue(state) {
      state.show = true;
    },
  },
  actions: {},
  modules: {},
});
