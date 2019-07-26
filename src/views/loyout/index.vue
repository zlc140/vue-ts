<template>
    <el-container class="view-box">
        <el-header>
             <div class="img-box">
                 <img src="@/assets/logo.jpg" alt="">
             </div>
            <span class="title">欢迎进入vue-cli3管理系统</span>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <nav-bar></nav-bar>
            </el-aside>
            <el-container>
                <el-main>
                    <keep-alive include="Home,About">
                        <router-view/>
                    </keep-alive>
                </el-main>
<!--                <el-footer>Footer</el-footer>-->
            </el-container>
        </el-container>
    </el-container>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { NavBar } from '@/components'

@Component({
    components: {
        NavBar,
    },
})
export default class Home extends Vue {

}
</script>
<style lang="scss">
    #app > .el-container {
        /*margin-bottom: 40px;*/
        height: 100%;
    }
    #app > .el-container > .el-container{
        height: calc(100% - 60px);
    }
    .view-box{

        .el-header, .el-footer {
            background-color: #333;
            color: #333;
            text-align: center;
            line-height: 60px;
        }

        .el-aside {
            background-color: #D3DCE6;
            color: #333;
            text-align: center;
            line-height: 200px;
        }

        .el-main {
            background-color: #E9EEF3;
            color: #333;
            text-align: center;
            line-height: 1.2;
            overflow-y: auto;
            height: 100%;
        }
        .el-header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-flow: row nowrap;
        }
        .img-box{
            height: 100%;
            padding: 5px;
            img{
                height: 100%;
            }
        }
        .title{
            color: #fff;
            font-size: 20px;
        }
    }
</style>
