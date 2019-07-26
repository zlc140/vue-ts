<template>
  <div id="app">
<!--    <input v-model="getData" v-on:blur="getvalue" style="position: absolute;left:0;top:0;"/>-->
    <Layout />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Provide, Model } from 'vue-property-decorator'
import Layout from './views/loyout/index.vue'

@Component({
  components: {
    Layout,
  },
})
export default class Home extends Vue {
  @Model('change') public input: any
  @Provide() private getData: string = '你好'
  @Provide('User') private hellData: string = 'user,你好'
  // 监听路由
  @Watch('$route', {deep: true})
  public onChildChanged(route: any, oldRoute: any): void {
    console.log('route, ', route, oldRoute)
    // this.$forceUpdate()//强刷当前 无效？？？
  }
  public getvalue(): void {
    console.log(this.getData)
  }
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
