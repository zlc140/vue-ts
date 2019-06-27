<template>
  <div class="about">
    <el-row :gutter="20">
      <el-col :span="12"><el-button @click="toggle">toggle collpes</el-button></el-col>
      <el-col :span="12">获取store的数据：{{getCollape}}</el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Action, Getter, Mutation } from 'vuex-class'

@Component
export default class About extends Vue {
  // @State public isCollape!: boolean
  @State('isCollape') public isCollape: any
  @Action public toggleCollape!: any
  @Getter public collape!: any
  @Mutation public SET_COLLAPE!: any

  public created() {
    console.log(this.collape)
  }

  // 计算属性通过getter的get
  private get getCollape(): string {
    return this.isCollape ? '打开true' : '关闭false'
  }

  public toggle(): void {
    // 通过vuex-class封装后直接使用就可
    // this.toggleCollape()
    this.SET_COLLAPE()
  }
}
</script>
