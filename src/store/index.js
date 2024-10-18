import { createStore } from 'vuex'

export default createStore({
  state: {
    matches: [],
    user: {
      
    }
  },
  getters: {
    getMatches(state) {
      return state.matches;
    },
    getUser(state) {
      return state.user;
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
    },
    setUser(state, user) {
      if(typeof user == 'object') state.user = user;
    }
  },
  actions: {
  },
  modules: {
  }
})
