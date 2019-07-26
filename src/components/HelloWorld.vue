<template>
  <div class="hello" v-if="obj">
    <h1>{{ getData }}</h1>
    <input type="text" v-model="obj.name" @input="changeName">
    <base-input placeholder="手机号码" value="input" labelText="账号: " @change="change"></base-input>
    <base-input placeholder="请输入密码" value="password"  labelText="密码: " type="password" @change="change"></base-input>
    <base-check labelText="记住密码: " v-model="checked"></base-check>
    <el-button @click="sublimt">提交</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject, Emit } from 'vue-property-decorator'


@Component
export default class HelloWorld extends Vue {
  public checked: boolean = true
  public input: string = 'Hello'
  public password: string = ''
  @Prop() private msg!: string
  @Prop() private obj!: object
  @Inject() private getData!: any
  // inject: ['getData']
  public mounted() {
    console.log(this.getData, 'getData')
  }
  // @Emit('change')
  public change(e: any) {
    this[e.key] = e.value
    // console.log('emit',this.checked)
    // this.input = e.target.value
  }
  public changeName() {

    console.log(this.obj,'obj')
  }

    @Emit('change')
  public sublimt(): object {
      this.msg = 'nide'
      return {'checked':this.checked,'input':this.input, 'password':this.password}
      // console.log(this.checked, this.input, this.password)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
