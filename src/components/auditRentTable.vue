<template>
  <div>
    <ul class="infinite-list" style="overflow:auto;">
      <li v-for="data in ShoppingEquipmentData" class="infinite-list-item" style="position: relative;list-style: none; padding: 30px; border: 1px solid #000; margin-bottom: 10px;">
        <el-descriptions title="账单信息">
          <el-descriptions-item label="账单编号">{{ data.orderId }}</el-descriptions-item>
          <el-descriptions-item label="下单时间">{{ data.orderTime }}</el-descriptions-item>
          <el-descriptions-item label="付款时间">{{ data.payTime }}</el-descriptions-item>
          <el-descriptions-item label="状态">
            <el-tag size="small">{{ data.state }}</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="实际付款(元)">{{ data.payment }}</el-descriptions-item>
        </el-descriptions>
        <el-table
            :data="data.equipmentList"
            style="width: 100%">
          <el-table-column
              prop="sport"
              label="器材名称"
              width="180">
          </el-table-column>
          <el-table-column
              prop="value"
              label="器材单价(元)"
              width="180">
          </el-table-column>
          <el-table-column
              prop="rentNumber"
              label="购买数量"
              width="180">
          </el-table-column>
          <el-table-column
              label="器材库存(个)"
              width="180">
            <template slot-scope="scope">
              {{ $store.state.eventTableData.find(item => item.sport === scope.row.sport)?.total || '-' }}
            </template>
          </el-table-column>
        </el-table>
        <el-row>
          <el-button type="primary" style="margin-top: 10px">通过</el-button>
          <el-button type="primary" style="margin-top: 10px">否决</el-button>
        </el-row>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "auditRentTable",
  data() {
    return {
      ShoppingEquipmentData: [
        {
          orderId: '12345678',
          orderTime: '2025-01-01 12:50:30',
          payTime: '2025-01-01 12:55:30',
          state: '未归还',
          equipmentList: [
            {
              sport: '篮球',
              value: 8,
              rentNumber: 9,
              returnNumber: ''
            },
            {
              sport: '足球',
              value: 10,
              rentNumber: 3,
              returnNumber: ''
            }
          ],
          payment: 102
        },
        {
          orderId: '12345679',
          orderTime: '2025-01-01 12:50:30',
          payTime: '2025-01-01 12:55:30',
          state: '未归还',
          equipmentList: [
            {
              sport: '篮球',
              value: 8,
              rentNumber: 9,
              returnNumber: ''
            },
            {
              sport: '足球',
              value: 10,
              rentNumber: 3,
              returnNumber: ''
            }
          ],
          payment: 102
        }
      ],
      dialogVisible: false,
    }
  }

}
</script>

<style scoped>

</style>