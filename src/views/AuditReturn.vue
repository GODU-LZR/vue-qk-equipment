<template>
  <div>
    <el-container>
      <el-header><h2 style="text-align: center">审核归还</h2></el-header>
      <el-main><auditReturnTable></auditReturnTable></el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import auditReturnTable from '../components/auditReturnTable'
export default {
  name: "AuditReturn",
  components: {
    auditReturnTable: auditReturnTable
  }
}
</script>

<style scoped>

</style>