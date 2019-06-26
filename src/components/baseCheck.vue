<template>
    <div class="demo-input-suffix">
        <label>{{labelText}}</label>
        <input
                class="el-checkbox"
                type="checkbox"
                :checked="checked"
                @change="change"
                  />
    </div>

</template>

<script lang="ts">
import { Component, Prop, Emit , Vue, Model } from 'vue-property-decorator'

@Component
export default class BaseInput extends Vue {
    public inputValue: string = ''
    @Model('change', {
        type: Boolean,
    }) public checked!: boolean
    @Prop({
        type: String,
        default: '',
    }) private labelText!: string

    @Emit('change')
    public change(e: MouseEvent) {
        const target = e.target ? e.target.checked : false
        return target
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .demo-input-suffix{
        margin-bottom: 15px;
    }
    .demo-input-suffix .el-input{
        width: 200px;
        margin-right: 20px;
    }
</style>
