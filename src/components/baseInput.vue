<template>
    <div class="demo-input-suffix">
        <label>{{labelText}}</label>
        <el-input
                :placeholder="placeholder"
                suffix-icon="el-icon-date"
                @input="change"
                :type="type"
                v-model="inputValue">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
    </div>
<!--    <component is="el-input" type="text" :value="value" @change="inputChange"></component>-->
</template>

<script lang="ts">
    import { Component, Prop, Emit ,Vue } from 'vue-property-decorator'

    @Component({
        directives: {
            focus: {
                inserted: function(el) {
                    el.focus()
                }
            }
        }
    })
    export default class baseInput extends Vue {
        public inputValue:string = ''

        @Prop({
            type: String,
            default: ''
        }) private value!:string;
        @Prop({
            type: String,
            default: ''
        }) private labelText!:string;
        @Prop({
            type: String,
            default: 'text'
        }) private type!: type;

        @Prop({
            type: String,
            default: '请输入内容',
        //    如果是对象或者数组
        //     default: () => {
        //         return ['a', 'b']
        //     }
            required: true,
        //     validator: (value) => {
        //         return [
        //             'error',
        //             'haha'
        //         ].indexOf(value) !== -1
        //     }
        }) private placeholder!:string;

        @Emit('change')
        change(e:MouseEvent) {
            return {key: this.value,value: e}
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
