<template>
  <div class="hello">
    <h1>{{ getData }}</h1>
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
  @Inject() private getData!: any
  // inject: ['getData']
  public mounted() {
    console.log(this.getData, 'getData')
  }
  // @Emit('change')
  public change(e: any) {
    // this[e.key] = e.value
    // console.log('emit',this.checked)
    // this.input = e.target.value
  }
    @Emit()
  public sublimt(): void {
      console.log(this.checked, this.input, this.password)
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
