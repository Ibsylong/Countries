import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    invoices: null
  },
  mutations: {
    setInvoicesData: (state, res) => {
      state.invoices = res.data;
    },
    DELETE_INVOICE(state, id) {
      var index = state.invoices.findIndex(i => i.id == id);
      state.invoices.splice(index, 1);
    },
    UPDATE_INVOICE(state, invoice) {
      var index = state.invoices.findIndex(i => i.id == invoice.id);
      state.invoices[index] = invoice;
    },
    ADD_INVOICE(state, invoice) {
      state.invoices.push(invoice);
    }
  },
  actions: {
    async getInvoicesData({ commit, state }) {
      if (state.data) {
        return Promise.resolve();
      }

      return await axios
        .get(
          "https://api.jsonbin.io/b/607ec27524143e5df089c6c8"
        )
        .then((res) => commit("setInvoicesData", res))
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
