import { createStore } from "vuex";

export default createStore({
  state: {
    show: false,
    MainPageShow: "first",
    ContactPageShow: "first",
  },
  mutations: {
    changeMainpageShowSecond(state) {
      state.MainPageShow = "second";
    },
    changeMainpageShowFirst(state) {
      state.MainPageShow = "first";
    },
    changeContactShowSecond(state) {
      state.ContactPageShow = "second";
    },
    changeContactShowFirst(state) {
      state.ContactPageShow = "first";
    },
    ShowTrue(state) {
      state.show = true;
    },
  },
  actions: {},
  modules: {},
});
