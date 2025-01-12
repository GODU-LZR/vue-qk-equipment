<!-- vue-qk-equipment/src/views/Home.vue -->
<template>
  <div>
    <h2>体育器材模块首页</h2>
    <el-button type="primary" @click="showMessage">点击测试</el-button>
  </div>
</template>

<script>
export default {
  name: 'EquipmentHome',
  methods: {
    showMessage() {
      this.$message('体育器材子应用的 ElementUI 按钮点击了！');
    }
  }
}
</script>