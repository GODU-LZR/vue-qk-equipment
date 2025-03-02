<template>
  <div>
    <el-container>
      <el-header><h2 style="text-align: center">我的器材</h2></el-header>
      <el-main><myEquipmentTable></myEquipmentTable></el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import myEquipmentTable from '../components/myEquipmentTable'
export default {
  name: "MyEquipment",
  components: {
    myEquipmentTable: myEquipmentTable
  }
}
</script>

<style scoped>

</style>