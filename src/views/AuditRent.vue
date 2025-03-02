<template>
  <div>
    <el-container>
      <el-header><h2 style="text-align: center">审核租借</h2></el-header>
      <el-main><auditRentTable></auditRentTable></el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import auditRentTable from '../components/auditRentTable'
export default {
  name: "AuditRent",
  components: {
    auditRentTable: auditRentTable
  }
}
</script>

<style scoped>

</style>