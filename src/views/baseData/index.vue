<template>
    <div>
        <div class="search_add">
            <div>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="自定义类型">
                        <el-select v-model="formInline.type" placeholder="自定义类型">
                            <el-option :label="item.label" :value="item.value" v-for="(item,index) of typeList"
                                :key="index"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div>
                <el-button type="primary" @click="dialogTableVisible = true">添加筛选项</el-button>
            </div>
        </div>
        <el-table :data="tableData" style="width: 100%" height="600">
            <el-table-column type="index" width="50">
            </el-table-column>
            <el-table-column prop="value" label="名称">
            </el-table-column>
            <el-table-column prop="type" label="类型">
                <template slot-scope="scope">
                    {{typeList[scope.row.type-1].label}}
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" align="center">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row,'edit')" type="success" size="small">编辑</el-button>
                    <el-button @click="handleClick(scope.row,'del')" type="danger" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="total" style="margin-top:20px"
            @current-change="currentchange">
        </el-pagination>
        <el-dialog title="添加自定义" :visible.sync="dialogTableVisible" width="250px" :close-on-click-modal="false">
            <div style="margin-bottom:20px">
                <el-select v-model="formData.type" placeholder="自定义类型">
                    <el-option :label="item.label" :value="item.value" v-for="(item,index) of typeList" :key="index">
                    </el-option>
                </el-select>
            </div>
            <div style="margin-bottom:20px">
                <el-input v-model="formData.value" placeholder="请输入名称"></el-input>
            </div>
            <div>
                <el-button @click="dialogTableVisible = false">取消</el-button>
                <el-button type="primary" @click="sure">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [],
                typeList: [{
                    label: '时装',
                    value: 1
                }, {
                    label: '坐骑',
                    value: 2
                }, {
                    label: '物品',
                    value: 3
                }, {
                    label: '心决',
                    value: 4
                }, {
                    label: '秘籍',
                    value: 5
                }, ],
                formInline: {
                    page: 1,
                    limit: 10,
                    type: 1
                },
                formData: {
                    type: '',
                    value: ''
                },
                total: 0,
                dialogTableVisible: false
            }
        },
        mounted() {
            this.getList()
        },
        methods: {
            getList() {
                this.httpBack('GetSelAdminList', this.formInline).then(res => {
                    this.tableData = res.data
                    this.total = res.total
                })
            },
            currentchange(e) {
                this.formInline.page = e
                this.getList()
            },
            handleClick(e,type) {
                if (type == 'edit') {
                    this.formData = {
                        ...this.formData,
                        ...e
                    }
                    this.dialogTableVisible = true
                }
                if (type == 'del') {
                    this.httpBack('SelDel', {
                        id: e.id
                    }).then(res => {
                        this.$message({
                            type: 'success',
                            message: '删除成功'
                        });
                        this.getList()
                    })

                }
            },
            onSubmit() {
                this.formInline.page =1 
                this.getList()
            },
            sure() {
                if (this.formData.id) {
                    this.httpBack('SelEdit', this.formData).then(res => {
                        this.$message({
                            type: 'success',
                            message: '编辑成功'
                        });
                        this.dialogTableVisible = false
                        this.formData = {
                            type: '',
                            value: ''
                        }
                        this.getList()
                    })
                } else {
                    this.httpBack('SelAdd', this.formData).then(res => {
                        this.$message({
                            type: 'success',
                            message: '添加成功'
                        });
                        this.dialogTableVisible = false
                        this.formData = {
                            type: '',
                            value: ''
                        }
                        this.getList()
                    })
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .search_add {
        display: flex;
        justify-content: space-between;
    }
</style>