import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    magicInformation: 'This is the default data.'
  },
  mutations: {
    setMagicInformation (context, value) {
      context.magicInformation = value
    }
  },
  getters: {
    magicInformationLength(context) {
      // Return a transform of the magicInformation data
      let len = context.magicInformation.length
      return len ? len : 'No Data'
    }
  },
  actions: {
    getMagicInformation (context) {
      return new Promise((resolve, reject) => {
        // Pretend we are calling a slow API
        setTimeout(() => {
          // Update the state with the proper method
          context.commit('setMagicInformation', 'New Information!')
          resolve()
        }, 3000)
      })
    }
  }
})

