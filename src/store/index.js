import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      applications: [
        {applicationId: '1', applicationTitle: 'Eternity Digital'},
        {applicationId: '2', applicationTitle: 'DT'},
        {applicationId: '3', applicationTitle: 'ИП "Антон"'},
        {applicationId: '4', applicationTitle: 'Samsung'},
        {applicationId: '5', applicationTitle: 'LG'},
        ],
      adress: [{ "adressId": "", "adressTitle": "" }],
      directions: [],
      page_num: '1',
      pages_count: '',
    }
  },
  getters: {
    allDirections(state) {
      return state.directions
    },
    pageNum(state) {
      return state.page_num
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
