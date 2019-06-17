<template>
  <div class="home">
    <el-button @click="changeMessage">chang Msg</el-button>
    <h3>{{reversedMessage}}</h3>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  public message: string = 'Hello'
//  计算属性
  private get reversedMessage(): string {
    return this.message.split('').reverse().join('')
  }
  // method
  public changeMessage(): void {
    this.message = 'Good bye'
  }
  public getName(): string {
    const storeName = name
    return storeName
  }
  // watch 监听
  @Watch('message', {deep: true})
  public watchCount(newVal: any, val: any) {
    console.log('watch', newVal, val)
  }
  // 监听路由
  @Watch('$route', {deep: true})
  onChildChanged(route: any, oldRoute: any): void {
    console.log('route, ', route, oldRoute)
    // this.$forceUpdate()//强刷当前
  }
  // 生命周期
  private created(): void {
    console.log('created')
  }
  private mounted(): void {
    // console.log(this.$route)
  }
  private updated(): void { console.log('updated') }
  private destroyed(): void { console.log('destroyed') }
}
</script>
