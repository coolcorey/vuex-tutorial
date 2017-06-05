import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    magicInformation: 'This is the default data.'
  },
  mutations: {
    setMagicInformation (state, value) {
      state.magicInformation = value
    }
  },
  actions: {
    getMagicInformation (context) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('setMagicInformation', 'New Information!')
          resolve()
        }, 3000)
      })
    }
  }
})
