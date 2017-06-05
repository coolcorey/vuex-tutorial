<template>
  <div id="app">
    <small>{{status}}</small>
    <strong>{{magicInfo}}</strong>
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
      return store.state.magicInformation
    }
  },
  mounted() {
    setTimeout(() => {
      this.status = 'Fetching some data!'
      store.dispatch('getMagicInformation').then(() => {
        this.status = 'Data Fetched!'
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
