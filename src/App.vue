<template>
  <div id="app">
    <Layout />
  </div>
</template>
<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  import Layout from '@/views/loyout/index.vue'
  @Component({
    components: {
      Layout
    }
  })
  export default class Home extends Vue {

  }
</script>
<style lang="scss">

#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}



</style>
