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
    <!--    <component is="el-input" type="text" :value="value" @change="inputChange"></component>-->
</template>

<script lang="ts">
    import { Component, Prop, Emit ,Vue, Model } from 'vue-property-decorator'

    @Component
    export default class baseInput extends Vue {
        public inputValue:string = ''
        @Prop({
            type: String,
            default: ''
        }) private labelText!:string;
        @Model('change', {
            type: Boolean
        })
        checked!: boolean;

        @Emit('change')
        change(e:MouseEvent) {
            return e.target.checked
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
