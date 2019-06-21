<template>
    <el-container class="view-box">
        <el-header>
            <div id="nav">
                <router-link to="/home">Home</router-link> |
                <router-link to="/about">About</router-link> |
                <router-link to="/edit">Edit</router-link>
            </div>
        </el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-main><router-view/></el-main>
<!--                <el-footer>Footer</el-footer>-->
            </el-container>
        </el-container>
    </el-container>
</template>
<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'
    @Component
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
            background-color: #B3C0D1;
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


        #nav a {
            font-weight: bold;
            color: #2c3e50;
        }

        #nav a.router-link-exact-active {
            color: #42b983;
        }
    }
</style>
