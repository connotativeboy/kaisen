<template>
  <div class="home">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="项目列表" name="first">
        <div class="mini-object-header">
          <div>
            <el-input v-model="input" size="mini" class="mini-object-header-input" placeholder="请输入内容"></el-input>
            <el-checkbox v-model="checked">备选项</el-checkbox>
          </div>
          <el-button size="mini" type="warning" @click="test">添加mini项目</el-button>
        </div>
        <el-table
        :data="tableData"
        style="width: 100%">
          <el-table-column
            prop="date"
            label="项目名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="项目方向"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="报告（已验收/待验收/总数）">
          </el-table-column>
          <el-table-column
            prop="address"
            label="完成度%">
            <template slot-scope="{ row }">
              <el-progress :percentage="row.paice"></el-progress>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="项目资料" name="second">
        <div class="mini-object-content">
          <span style="font-size: 30px;">火星阅读</span>
          <div>
            <el-button size="mini">删除</el-button>
            <el-button size="mini">编辑</el-button>
          </div>
        </div>
        <div class="mini-object-content-card">
          <span class="mini-object-content-header">项目信息</span>
          <div style="display: flex;flex-wrap: wrap;">
            <div style="width: 50%;margin-bottom: 10px;">
              项目名称：
              <span>火星阅读</span>
            </div>
            <div style="width: 50%;margin-bottom: 10px;">
              项目分类：
              <span>互联网产品</span>
            </div>
            <div style="width: 50%;margin-bottom: 10px;">
              相关训练营：
              <span>2021互联网产品策划训练营;</span>
            </div>
            <div style="width: 50%;margin-bottom: 10px;">
              项目分组：
              <span>分组</span>
            </div>
            <div style="width: 50%;margin-bottom: 10px;">
              分组：
              <span>火星阅读A组</span>
            </div>
          </div>
        </div>
        <div class="mini-object-content-card">
          <span class="mini-object-content-header">学员配置</span>
          <div class="student-deploy-list">
            <div class="student-deploy-card">
              <el-button @click="isEdit = !isEdit" size="mini">编辑</el-button>
              <el-form ref="form" :model="value" label-width="80px">
                <el-form-item label="岗位：">
                  <span v-if="!isEdit">{{value.name}}</span>
                  <el-select v-else size="mini" v-model="value.name" style="width: 100%" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="学员：">
                  <span v-if="!isEdit">{{value.students.join(';')}}</span>
                  <el-select v-else size="mini" v-model="value.name" style="width: 100%" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="导师：">
                  <span v-if="!isEdit">{{value.teachers.join(';')}}</span>
                  <el-select v-else size="mini" v-model="value.name" style="width: 100%" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="分组：">
                  <span v-if="!isEdit">{value.type.join(';')}}</span>
                  <el-select v-else size="mini" v-model="value.name" style="width: 100%" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </div>
            <div class="student-deploy-card-add">
              <el-button style="font-size: 50px" type="text">+</el-button>
            </div>
          </div>
        </div>
        <div class="mini-object-content-card">
          <span class="mini-object-content-header">项目资料</span>
        </div>
      </el-tab-pane>
      <el-tab-pane label="项目资料" name="thrid">
        <div class="mini-object-header">
          <div>
            <el-input v-model="input" size="mini" class="mini-object-header-input" placeholder="项目资料名称"></el-input>
            <el-checkbox v-model="checked">已结束项目资料</el-checkbox>
          </div>
          <el-button size="mini" type="warning" @click="test">发布资料要求</el-button>
        </div>
        <el-table
        :data="tableData"
        style="width: 100%">
          <el-table-column
            prop="date"
            label="资料名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="类型"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="项目方向"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="指定类别"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="完成情况（已验收/待验收/总数）">
          </el-table-column>
          <el-table-column
            prop="address"
            label="操作">
            <template slot-scope="{ row }">
              <el-button @click="test(row)" type="text">编辑</el-button>
              <el-button type="text">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      title="添加mini项目"
      :visible.sync="dialogVisible"
      width="800px">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="项目名称：">
          <el-input size="mini" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="项目方向：">
          <div style="text-align: left;">
            <el-radio v-model="form.radio" label="1">游戏</el-radio>
            <el-radio v-model="form.radio" label="2">互联网产品</el-radio>
          </div>
        </el-form-item>
        <el-form-item label="相关训练营：">
          <el-select size="mini" v-model="form.region" style="width: 100%" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目分组：">
          <div style="text-align: left;">
            <el-radio v-model="form.radioType" label="1">分组</el-radio>
            <el-radio v-model="form.radioType" label="2">不分组</el-radio>
          </div>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class HomeView extends Vue {
  tableData = [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    paice: 30
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄',
    paice: 20
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄',
    paice: 40
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄',
    paice: 50
  }]

  activeName = 'first'
  checked = false
  input = ''
  dialogVisible = false
  isEdit = false
  value = {
    name: '产品策划',
    students: ['张三', '李四'],
    teachers: ['wo', 'world'],
    type: ['a', 'b']
  }

  form = {
    name: '',
    region: '',
    radio: '',
    radioType: ''
  }

  handleClick () {
    console.log(1)
  }

  test () {
    this.dialogVisible = true
  }

  test11 (v: any) {
    console.log(v)
  }
}
</script>
<style>
.mini-object-header {
  display: flex;
  justify-content: space-between;
}
.mini-object-header-input {
  width: 250px;
  margin-right: 10px;
}
.el-dialog__header {
  text-align: left;
}
.mini-object-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px #f1f1f1 solid;
}
.mini-object-content-card {
  margin-top: 15px;
  text-align: left;
}
.mini-object-content-header {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 10px;
  display: inline-block;
}
.mini-object-content-header::before {
  content: ' ';
  display: inline-block;
  width: 6px;
  height: 16px;
  background: #E6A23C;
  margin-right: 7px;
  transform: translateY(3px);
}
.student-deploy-list {
  display: flex;
}
.student-deploy-card {
  border: 1px solid #ccc;
  padding: 15px 20px;
  border-radius: 5px;
  width: 45%;
  margin-right: 2%;
}
.student-deploy-card-add {
  text-align: center;
  line-height: 1;
  border: 1px solid #ccc;
  width: 45%;
}
</style>
