<template>
  <div class="home">
<!--    <el-button @click="changeMessage">chang Msg</el-button>-->
    <el-row :gutter="20">
      <el-col :span="8">
        <component is="el-button" @click="changeMessage">chang Msg</component>
      </el-col>
      <el-col :span="16">
        <h3>{{msg}}-{{reversedMessage}}</h3>
      </el-col>
    </el-row>
    <el-row :gutter="20">
        <HelloWorld :msg="message" :obj="obj" @change="change"/>
    </el-row>

<!--    <img alt="Vue logo" src="../assets/logo.png">-->

  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Inject } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { State, Action, Getter, Mutation, namespace } from 'vuex-class'

const msgModule = namespace('Msg') // 获取到msg命名空间

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
//  计算属性
  private get reversedMessage(): string {
      console.log(this.msg, 'msg')
    // return this.message.split('').reverse().join('')
    //   return this.$store.state.Msg.msg
      return this.msg.split('').reverse().join('')
  }
  @msgModule.Action('changeMsg') public changeMsg: any
  @msgModule.State((state) => state.msg) public msg: any

  // @State('Msg') Msg
  public message: string = 'Hello'
    public obj: object = {
      name: 'lzc'
    }
  @Inject('User') private hellData!: any
  // method
  public changeMessage(): void {
      this.changeMsg(this.$store.state.Msg.msg)
      // this.$store.dispatch('Msg/changeMsg', this.$store.state.Msg.msg)
      this.message = 'Good bye'
  }
  public getName(): string {
    const storeName = name
    return storeName
  }
  public change(el: any): any {

    console.log(el, this.obj,this.message ,'value')
  }
  // watch 监听
  @Watch('message', {deep: true})
  public watchCount(newVal: any, val: any) {
    console.log('watch', newVal, val)
  }
// 监听路由
    @Watch('$route', {deep: true})
    public onChildChanged(route: any, oldRoute: any): void {
        console.log('route1, ', route, oldRoute)
        // this.$forceUpdate()//强刷当前
    }
  // 生命周期
  private created(): void {
    console.log('created', this.hellData)
  }
  private mounted(): void {
    console.log(this.$store)
  }
  private updated(): void { console.log('updated') }
  private destroyed(): void { console.log('destroyed') }
}
</script>
