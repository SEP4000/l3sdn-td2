<script>
import HelloWorld from './components/Home.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<template>
  <div id="app">
  <HelloWorld/>
  <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
