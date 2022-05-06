<template>
  <div id="app">
    <app-head />

    <app-main />
  </div>
</template>

<script>
import AppHead from './components/AppHead.vue'
import AppMain from './components/AppMain.vue'

export default {
  name: 'App',
  components: {
    AppHead,
    AppMain
  }
}
</script>

<style lang="scss">
@import '@/assets/style/generals.scss';
@import '@/assets/style/variables.scss';
</style>
