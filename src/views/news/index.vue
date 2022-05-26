<template>
  <div>
    <div class="search_add">
      <div>
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
        <el-button type="primary" @click="onSubmit">添加新闻</el-button>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%" height="600">
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column prop="image" label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.image" alt="" style="width: 80px" />
        </template>
      </el-table-column>
      <el-table-column prop="title" label="标题"> </el-table-column>
      <el-table-column prop="newsdescribe" label="描述"> </el-table-column>
      <el-table-column prop="newsaddtime" label="添加时间">
        <template slot-scope="scope">
          {{ getNowFormatDate(scope.row.newsaddtime) }}
        </template>
      </el-table-column>
      <el-table-column prop="newslink" label="跳转链接"> </el-table-column>
      <el-table-column label="文章类型" width="180">
        <template slot-scope="scope">
          {{ scope.row.type == 1 ? "新闻列表" : "首页弹框" }}
        </template>
      </el-table-column>
      <el-table-column label="是否头条" width="180">
        <template slot-scope="scope">
          {{ scope.row.newstop == 0 ? "否" : "是" }}
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        align="center"
        min-width="230"
      >
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row, 'edit')"
            type="success"
            size="small"
            >编辑</el-button
          >
          <el-button
            @click="handleClick(scope.row, 'del')"
            type="danger"
            size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      style="margin-top: 20px"
      @current-change="currentchange"
    >
    </el-pagination>
    <el-dialog
      title="添加新闻"
      :visible.sync="dialogTableVisible"
      :close-on-click-modal="false"
    >
      <div style="margin-bottom: 20px">
        <el-upload
          class="avatar-uploader"
          action="https://www.lishuang96.com/api/Upimg"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
        >
          <img v-if="addData.image" :src="addData.image" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div style="margin-bottom: 20px">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入标题"
          v-model="addData.title"
        >
        </el-input>
      </div>
      <div style="margin-bottom: 20px">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入描述"
          v-model="addData.newsdescribe"
        >
        </el-input>
      </div>
      <div style="margin-bottom: 20px">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入链接"
          v-model="addData.newslink"
        >
        </el-input>
      </div>
      <div style="margin-bottom: 20px">
        文章类型<el-select v-model="addData.type" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div style="margin-bottom: 20px">
        是否头条<el-switch
          v-model="addData.newstop"
          :active-value="1"
          :inactive-value="0"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
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
      formData: {
        page: 1,
        limit: 10,
        rolestatus: 1,
      },
      addData: {
        image: "",
        title: "",
        newsdescribe: "",
        newslink: "",
        newstop: 0,
        type: 1,
      },
      total: 0,
      dialogTableVisible: false,
      options: [
        {
          value: 1,
          label: "新闻列表",
        },
        {
          value: 2,
          label: "首页弹框",
        },
      ],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.addData.image = res.data;
    },
    getList() {
      this.httpBack("AdminNewsList", this.formData).then((res) => {
        this.tableData = res.data;
        this.total = res.total;
      });
    },
    currentchange(e) {
      this.formData.page = e;
      this.getList();
    },
    handleClick(e, type) {
      if (type == "edit") {
        this.addData = {
          ...this.addData,
          ...e,
        };
        this.dialogTableVisible = true;
      }
      if (type == "del") {
        this.httpBack("NewsDel", {
          id: e.id,
        }).then((res) => {
          this.$message({
            type: "success",
            message: "删除成功",
          });
          this.getList();
        });
      }
    },
    onSubmit() {
      this.dialogTableVisible = true;
    },
    sure() {
      console.log(this.addData);
      if (this.addData.id) {
        this.httpBack("NewsEdit", this.addData).then((res) => {
          this.$message({
            type: "success",
            message: "编辑成功",
          });
          this.dialogTableVisible = false;
          this.addData = {
            image: "",
            title: "",
            newsdescribe: "",
            newslink: "",
            newstop: 0,
          };
          this.getList();
        });
      } else {
        this.httpBack("NewsAdd", this.addData).then((res) => {
          this.$message({
            type: "success",
            message: "添加成功",
          });
          this.dialogTableVisible = false;
          this.addData = {
            image: "",
            title: "",
            newsdescribe: "",
            newslink: "",
            newstop: 0,
          };
          this.getList();
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
/deep/.el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.search_add {
  display: flex;
  justify-content: space-between;
}
</style>