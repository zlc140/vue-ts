<template>
    <div class="t-container-navbar">
        <el-menu
                default-active="0-0"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                text-color="#fff"
                active-text-color="#ffd04b">
            <template v-for="(item, parentIndex) in content">
                <el-submenu :index="parentIndex"  v-if="item.children && item.children.length > 0">
                    <template slot="title">
                        <i :class="item.icon" v-if="item.icon"></i>
<!--                        <router-link v-if="item.path" :to="item.path">{{item.name}}</router-link>-->
                        <span >{{item.name}}</span>
                    </template>
                    <el-menu-item-group >
                        <el-menu-item
                                :index="parentIndex + '-' + index"
                                v-for="(child, index) in item.children"
                                :key="index"
                                @click="goPath(child.path)">
                            <i :class="child.icon || 'el-icon-s-open'"></i>
<!--                            <router-link v-if="child.path" :to="child.path">{{child.name}}</router-link>-->
                            <span >{{child.name}}</span>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item :index="parentIndex" v-else @click="goPath(item.path)">
                    <i :class="item.icon" v-if="item.icon"></i>
<!--                    <router-link slot="title"  v-if="item.path" :to="item.path">{{item.name}}</router-link>-->
                    <span slot="title" >{{item.name}}</span>
                </el-menu-item>
            </template>

        </el-menu>
    </div>
</template>

<script lang="ts">
import { manageSysRoleMenuUserId } from '@/interface/navbarInterface.ts'
import { Component, Vue, Model, Watch } from 'vue-property-decorator'
@Component({})
export default class Navbar extends Vue {
    public content: any = [
        {
            name: '用户',
            icon: 'el-icon-location',
            children: [
                {
                    name: '首页',
                    path: '/home',
                    icon: 'el-icon-document',
                },
                {
                    name: '关于我',
                    path: '/about',
                    icon: '',
                },
                {
                    name: '关于table',
                    path: '/table',
                    icon: 'el-icon-s-grid',
                },
            ],
        },
        {
            name: '富文本编辑',
            path: '/edit',
            icon: 'el-icon-menu',
        },
        {
            name: 'form表单',
            path: '/login',
            icon: 'el-icon-eleme',
        },
    ]// 当前的数组
    public matchedChang: string = ''// 当前选中的一级
    public created(): void {
        let user: any = {}
        if (localStorage.getItem('userList')) {
            user = localStorage.getItem('userList')
            user = JSON.parse(user)
            this.manageSysRoleMenuUser(user.id)
        }
    }
    public goPath(path: string): void {
        console.log(path)
        this.$router.push(path)
    }
    // watch
    @Watch('$route')
    public onRouteChanged(route: any, oldRoute: any): void {
        this.matchedChang = route.matched[0].path
        console.log(route.matched[0])
        console.log(this.matchedChang)
        this.$forceUpdate()
    }
    private manageSysRoleMenuUser(id: string) {
        manageSysRoleMenuUserId(id)
            .then((res: any) => {
                if (res.code == 0) {
                    // 装载所有导航
                    const att: any = []
                    for (const item of res.data) {
                        att.push(item.sysMenu)
                    }
                    // 判断是否是使用权限
                    if (att == null) {
                        this.$message('暂无使用权限')
                        this.$router.push({
                            path: '/login', // 退出登录
                        })
                    }
                    // 父级菜单
                    const arr: any[] = []
                    // 子级菜单
                    const tow: any[] = []
                    // 循环出需要的数
                    for (const item of att) {
                        // 默认是不选
                        if (item.type == 1) {
                            item.children = []
                            arr.push(item)
                        } else {
                            tow.push(item)
                        }
                    }
                    for (let i = 0; i < arr.length; i++) {
                        // 循环出当前第一级导航的名称
                        arr[i].oldname = arr[i].name.substring(0, 2)
                        let index = 1// 找出当前的选中的这个
                        for (const item of tow) {
                            if (item.parentId == arr[i].id) {
                                if (index === 1) {
                                    this.matchedChang = arr[i].url
                                }
                                index++
                                arr[i].children.push(item)
                            }
                        }
                        // if (index==1){ // 如果当前没有选中
                        //     if (1){
                        //
                        //     }
                        // }
                    }
                    // 复制给tree需要的值
                    this.content = arr
                }
            })
    }
    private activated() {
        // console.log(2);
    }
    private deactivated() {
        // console.log(4);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.t-container-navbar{
    /deep/ .el-submenu__title{
        background-color: #666;
        text-align: left;
    }
    /deep/ .el-menu-item-group .el-menu-item{
        background-color: #999;
        text-align: left;
    }

    /deep/ .el-menu-item>i{
        color: #ccc;
    }
    /deep/ .el-menu{
        background-color: #666;
    }
    /deep/ .el-menu-item{
        background-color: #666;
        text-align: left;
    }
    /deep/ .router-link-active{
        color: #ffd04b;
        text-underline: none;
    }
    /deep/ .is-active.el-menu-item i{
        color: #ffd04b;
    }
}
</style>
