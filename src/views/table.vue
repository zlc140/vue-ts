<template>
    <div class="table-layout">
        <el-table
                ref="filterTable"
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="日期"
                    sortable
                    width="180"
                    column-key="date"
                    :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
                    :filter-method="filterHandler"
            >
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
                    :formatter="formatter">
            </el-table-column>
            <el-table-column
                    prop="tag"
                    label="标签"
                    width="100"
                    :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
                    :filter-method="filterTag"
                    filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag
                            :type="scope.row.tag === '家' ? 'primary' : 'success'"
                            disable-transitions>{{scope.row.tag}}</el-tag>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination-box">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>

    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Action, Getter, Mutation } from 'vuex-class'

@Component
export default class About extends Vue {
    public tableData: any = [
        {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            tag: '家',
        }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            tag: '公司',
        },
    ]

    public  resetDateFilter(): void {
        this.$refs.filterTable.clearFilter('date')
    }
    public clearFilter(): void {
        this.$refs.filterTable.clearFilter()
    }
    public formatter(row: any, column: any): any {
        return row.address
    }
    public filterTag(value: any, row: any): any {
        return row.tag === value
    }
    public filterHandler(value: any, row: any, column: any): void {
        const property = column.property
        return row[property] === value
    }
}
</script>
