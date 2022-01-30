import { createStore } from "vuex";

export default createStore({
  state: {
    show: false,
    page: "home",
  },
  mutations: {
    ShowTrue(state) {
      state.show = true;
    },
  },
  actions: {},
  modules: {},
});
