<template>
  <div>
    <el-row style="display: flex; justify-content: flex-end;">
      <el-button type="primary" plain @click="() => {dialogVisible = true;}" v-if="user === '器材管理员'">新增</el-button>
    </el-row>
    <el-table
        :data="($store.state.eventTableData.filter(data => {
        return !search || data.sport.toLowerCase().includes(search.toLowerCase());
        })).sort((a, b) => {
        if (a.state === '可出售' && b.state === '可出售') {
        return b.remainder - a.remainder; // remainder 大的排前面（降序）
        } else if (a.state === '可出售' && b.state !== '可出售') {
        return -1; // a 是可出售的，排前面
        } else if (a.state !== '可出售' && b.state === '可出售') {
        return 1; // b 是可出售的，a 排后面
        } else {
        // 两者都不是可出售或都是已下架，这里默认已下架排在后面（虽然按逻辑已下架应该已经分开了）
        // 但为了完整性，我们仍然可以添加一个比较，尽管在这个特定情况下它不会影响结果
        return a.state === '已下架' ? 1 : -1; // 已下架的排后面
        }})"
        style="width: 100%"
        empty-text = "暂无数据"
        height="67vh"
        v-loading = "loading">
      <el-table-column
          label="器材图片"
          prop="pictureUrl">
        <template slot-scope="scope">
          <div class="demo-image">
            <div class="block">
              <el-image
                  style="width: 100px; height: 100px"
                  :src="scope.row.pictureUrl"
                  fit="fill">
              </el-image>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
          label="器材名称"
          prop="sport">
      </el-table-column>
      <el-table-column
          label="器材价格(元/个*天)"
          prop="value">
      </el-table-column>
      <el-table-column
          label="器材总量"
          prop="total">
      </el-table-column>
      <el-table-column
          label="器材剩余"
          prop="remainder">
      </el-table-column>
      <el-table-column
          prop="state"
          label="器材状态"
          width="100"
          :filters="[{ text: '可出售', value: '可出售' }, { text: '已下架', value: '已下架'}]"
          :filter-method="filterTag">
        <template slot-scope="scope">
          <el-tag
              :type="chooseTag(scope.row.state)[0]"
              disable-transitions>{{ chooseTag(scope.row.state)[1] }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
          align="right">
        <template slot="header" slot-scope="scope">
          <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-input-number v-model="$store.state.equipmentList[scope.row.sport]" @change="handleChange" :min="0" :max="scope.row.remainder" label="输入数量" :disabled="scope.row.state === '已下架'" v-if="user !== '器材管理员'"></el-input-number>
          <el-row>
            <el-button type="primary" v-if="user === '器材管理员'">下架</el-button>
            <el-button type="danger" v-if="user === '器材管理员'">删除</el-button>
          </el-row>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
        title="新增"
        :visible.sync="dialogVisible"
        width="30%">
      <el-form :model="addEquipmentForm" ref="addEquipmentForm" label-position="left" label-width="80px" :rules="rules">
        <el-form-item label="器材图片" prop="picture">
          <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :limit="1"
              :on-remove="handleRemove"
              :on-progress="handleProgress">
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="器材名称" prop="sport">
          <el-input v-model="addEquipmentForm.sport"></el-input>
        </el-form-item>
        <el-form-item label="单价" prop="value">
          <el-input v-model="addEquipmentForm.value" type="number"></el-input>
        </el-form-item>
        <el-form-item label="库存" prop="total">
          <el-input v-model="addEquipmentForm.total" type="number"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "equipmentTable",
  data() {
    return {
      user: '器材管理员',
      search: '',
      loading: false,
      dialogVisible: false,

      addEquipmentForm: {
        sport: '',
        value: '',
        total: ''
      },
      rules: {
        sport: [{ required: true, message: '请输入器材名称', trigger: 'blur' }],
        value: [{ required: true, message: '请输入单价', trigger: 'blur' },],
        total: [{ required: true, message: '请输入库存', trigger: 'blur' },]
      }
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    filterTag(value, row) {
      return row.state === value;
    },
    chooseTag(value) {
      if (value === '可出售') {
        // 未开始
        return ['success', '可出售'];
      }
      if (value === '已下架') {
        // 已结束
        return ['info', '已下架'];
      }
    },

    handleChange(value) {
      console.log(value);
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleProgress(file, fileList) {
      console.log("正在上传");
    }
  }
}
</script>

<style scoped>

</style>