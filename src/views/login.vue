<template>
    <div class="login-layout">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动时间" required>
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择开始日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-time-picker placeholder="选择结束时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="即时配送" prop="delivery">
                <el-switch v-model="ruleForm.delivery" @change="handleChange"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Action, Getter, Mutation } from 'vuex-class'

interface formInterface {
    name?: string,
    region?: string,
    date1?: any,
    date2?: any,
    delivery?: boolean,
    type?: any,
    resource?: any,
    desc?: string
}

@Component
export default class About extends Vue {
    // @State public isCollape!: boolean
    @State('isCollape') public isCollape: any
    @Action public toggleCollape!: any
    @Getter public collape!: any
    @Mutation public SET_COLLAPE!: any
    public rules: any = {
        name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
        region: [
            { required: true, message: '请选择活动区域', trigger: 'change' },
        ],
        date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' },
        ],
        date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' },
        ],
        type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' },
        ],
        resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' },
        ],
        desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' },
        ],
    }
    public ruleForm: formInterface = {
        name: '',
        type: [],
        delivery: false,

    }
    public created() {

    }
    mounted() {
        let _this = this;
        setTimeout(function() {
            _this.ruleForm.delivery = true;
        },0)

        this.$nextTick(function() {
            if(this.ruleForm.delivery) {
            _this.ruleForm.name = '123'
            }
        })

        console.log(this.ruleForm)
    }
    public handleChange() {

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
    public resetForm(formName) {
        this.$refs[formName].resetFields()
    }
    public submitForm(formName: any): void {
        this.$refs[formName].validate((valid) => {
            if (valid) {
                 console.log(this.ruleForm)
            } else {
                console.log('error submit!!')
                return false
            }
        })
    }
}
</script>
<style>
    .el-form-item__content{
        text-align: left;
    }
    .demo-ruleForm{
        width: 400px;
    }
</style>
