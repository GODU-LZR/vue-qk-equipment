<template>
  <div>
    <el-container>
      <el-header><h2 style="text-align: center">租借器材</h2></el-header>
      <el-main><equipmentTable></equipmentTable></el-main>
      <el-footer><equipmentDrawer></equipmentDrawer></el-footer>
    </el-container>
  </div>
</template>

<script>
import equipmentTable from '../components/equipmentTable'
import equipmentDrawer from '../components/equipmentDrawer'
export default {
  name: "GetEquipment",
  components: {
    equipmentTable: equipmentTable,
    equipmentDrawer: equipmentDrawer
  }
}
</script>

<style scoped>

</style>