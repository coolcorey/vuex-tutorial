<template>
  <div id="app">
    <small>{{status}}</small>
    <strong>{{magicInfo}} ({{magicInfoLength}})</strong>
  </div>
</template>

<script>
import store from './store'

export default {
  name: 'app',
  data() {
    return {
      status: 'Loading...'
    }
  },
  computed: {
    magicInfo() {
      // Returns the dynamic value of magicInformation
      return store.state.magicInformation
    },
    magicInfoLength() {
      // Returns the dynamic transformed value of magicInformation's length
      return store.getters.magicInformationLength
    }
  },
  mounted() {
    // Simulate slow loading
    setTimeout(() => {
      // Let the user know we are attempting to fetch
      this.status = 'Fetching some data!'
      store.dispatch('getMagicInformation').then(() => {
        // Let the user know the fetch was successful
        this.status = 'Data Fetched!'
      }).catch(() => {
        // Oh know...
        this.status = 'Error Fetching Data'
      })
    }, 2000)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
small {
  display: block;
  font-style: italic;
}
</style>
