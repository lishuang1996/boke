<template>
    <div>
        <div class="search_add">
            <div>
                用户总数：{{total}}
                <!-- <el-form :inline="true" :model="formData" class="demo-form-inline">
                    <el-form-item label="状态">
                        <el-select v-model="formData.rolestatus" placeholder="状态">
                            <el-option label="待审核" :value="1"></el-option>
                            <el-option label="通过" :value="2"></el-option>
                            <el-option label="不通过" :value="3"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form> -->
            </div>
            <div>
                <!-- <el-button type="primary" @click="onSubmit">添加类型</el-button>
                <el-button type="primary" @click="onSubmit">添加筛选项</el-button> -->
            </div>
        </div>
        <el-table :data="tableData" style="width: 100%" height="600">
            <el-table-column type="index" width="50">
            </el-table-column>
            <el-table-column label="用户头像">
                <template slot-scope="scope">
                    <img :src="scope.row.avatarUrl" @click="dialogVisibleShow(scope.row.roleimg)" alt=""
                        style="width:80px">
                </template>
            </el-table-column>
            <el-table-column prop="nickName" label="用户名称">
            </el-table-column>
            <el-table-column prop="nickName" label="性别">
                <template slot-scope="scope">
                    {{['女','男'][scope.row.gender]}}
                </template>
            </el-table-column>
            <el-table-column label="注册时间">
                <template slot-scope="scope">
                    {{getNowFormatDate(scope.row.registertime)}}
                </template>
            </el-table-column>
            <el-table-column label="登录时间">
                <template slot-scope="scope">
                    {{getNowFormatDate(scope.row.logintime)}}
                </template>
            </el-table-column>
            <!-- <el-table-column fixed="right" label="操作" align="center" min-width="230">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row,'look')" type="primary" size="small">通过</el-button>
                    <el-button @click="handleClick(scope.row,'edit')" type="success" size="small">驳回</el-button>
                </template>
            </el-table-column> -->
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="total" style="margin-top:20px"
            @current-change="currentchange">
        </el-pagination>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="60%">
            <img :src="imgurl" alt="" style="width:100%">
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [],
                formInline: {

                },
                formData: {
                    page: 1,
                    limit: 10
                },
                dialogVisible: false,
                imgurl: '',
                formdata: {
                    Sid: '',
                    id: '',
                    remarks: '',
                    counteroffer: '',
                    roletext: ''
                },
                total: 0
            }
        },
        mounted() {
            this.getList()
        },
        methods: {
            dialogVisibleShow(img) {
                this.imgurl = img
                this.dialogVisible = true
            },
            getList() {
                this.httpBack('AdminUserList', this.formData).then(res => {
                    this.tableData = res.data
                    this.total = res.total
                })
            },
            currentchange(e) {
                this.formData.page = e
                this.getList()
            },
            AdminRoleBindEdit() {
                this.httpBack('AdminRoleBindEdit', this.formdata).then(res => {
                    this.$message({
                        type: 'success',
                        message: '操作成功'
                    });
                    this.getList()
                })
            },
            handleClick(e, type) {
                if (type == 'look') {
                    this.formdata.Sid = e.Sid
                    this.formdata.id = e.id
                    this.formdata.remarks = ''
                    this.formdata.counteroffer = e.counteroffer
                    this.formdata.rolestatus = 2
                    this.formdata.roletext = e.roletext
                    this.AdminRoleBindEdit()
                }
                if (type == 'edit') {
                    this.$prompt('输入备注', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                    }).then(({
                        value
                    }) => {
                        this.formdata.Sid = e.Sid
                        this.formdata.id = e.id
                        this.formdata.remarks = value
                        this.formdata.counteroffer = e.counteroffer
                        this.formdata.rolestatus = 3
                        this.formdata.roletext = e.roletext
                        this.AdminRoleBindEdit()
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '取消输入'
                        });
                    });

                }
                console.log(e)
            },
            onSubmit() {
                this.getList()
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