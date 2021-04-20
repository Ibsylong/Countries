import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    data: null
  },
  mutations: {
    setData: (state, res) => {
      state.data = res.data;
    }
  },
  actions: {
    async getData({ commit, state }) {
      if (state.data) {
        return Promise.resolve();
      }

      return await axios
        .get(
          "https://api.jsonbin.io/b/607ec27524143e5df089c6c8"
        )
        .then((res) => commit("setData", res))
        .catch(function (error) {
          console.log(error);
        })
    }
  },
  getters: {
    getDataContent: (state) => {
      return state.data;
    },
  },
  modules: {
  }
})
