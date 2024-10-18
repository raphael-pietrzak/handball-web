import { createStore } from 'vuex'

export default createStore({
  state: {
    matches: []
  },
  getters: {
    getMatches(state) {
      return state.matches;
    }
  },
  mutations: {
    setMatches(state, matches) {
      // Vérifie si c'est une liste
      if (Object.prototype.toString.call(matches) === '[object Array]') {
        state.matches = matches
      } else {
        this.$toast.add({
          detail: "Les informations des matchs n'ont pas pu être ajoutées. Désolé !",
          summary: "Oops...",
          severity: "error",
          life: 5000
        })
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
