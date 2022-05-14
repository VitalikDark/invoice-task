import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    invoices: [{qty: 34, price: 34, product: 'apple'}]
  },
  getters: {
    getAllInvoices(state) {
      return state.invoices
    }
  },
  mutations: {
    addNewInvoices(state, item: any) {
      state.invoices.push(item)
    }
  },
  actions: {
  },
  modules: {
  }
})
