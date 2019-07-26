<template>
    <div class="demo-input-suffix">
        {{msg}}-{{num}}
    </div>

</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'

    @Component
    export default class tabOne extends Vue {
        public msg: string = '我是tabOne';
        public num: number = 1;
        mounted() {
            console.log(this.$parent)
        }
        private activated(): void {
            this.num += 1;
        }
        private deactivated(): void {
            console.log('退出了')
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.demo-input-suffix{
    text-align: left;
    padding: 8px;
    border: 1px solid #c0c0c0;
    border-radius: 4px;
}
</style>
