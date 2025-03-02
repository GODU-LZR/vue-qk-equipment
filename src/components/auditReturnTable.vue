<template>
  <div>
    <ul class="infinite-list" style="overflow:auto">
      <li v-for="data in shoppingEquipmentData" class="infinite-list-item" style="position: relative;list-style: none; padding: 30px; border: 1px solid #000; margin-bottom: 10px;">
        <el-descriptions title="账单信息">
          <el-descriptions-item label="账单编号">{{ data.orderId }}</el-descriptions-item>
          <el-descriptions-item label="下单时间">{{ data.orderTime }}</el-descriptions-item>
          <el-descriptions-item label="付款时间">{{ data.payTime }}</el-descriptions-item>
          <el-descriptions-item label="状态">
            <el-tag size="small">{{ data.state }}</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="实际付款(元)">{{ data.payment }}</el-descriptions-item>
          <el-descriptions-item label="归还码">{{ data.returnCode }}</el-descriptions-item>
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
        </el-table>
        <el-row>
          <el-button type="primary" style="margin-top: 10px" @click="returnFormToDialog(data.orderId)">确认归还</el-button>
        </el-row>
      </li>
    </ul>

    <el-dialog
        title="审核归还"
        :visible.sync="dialogVisible"
        width="50%">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <h3>订单编号: {{ returnForm.orderId }}</h3>
      </div>
      <el-table
          :data="returnForm.returnSportList"
          style="width: 100%">
        <el-table-column
            prop="sport"
            label="器材名称"
            width="180">
        </el-table-column>
        <el-table-column
            prop="rentNumber"
            label="租借数量"
            width="180">
        </el-table-column>
        <el-table-column
            label="归还数量"
            width="180">
          <template slot-scope="scope">
            <!-- 绑定到当前行的 returnNumber 属性 -->
            <el-input-number
                v-model="scope.row.returnNumber"
                :min="1"
                :max="scope.row.rentNumber"
                controls-position="right"
                style="width: 100%;"></el-input-number>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">生成归还码</el-button>
    </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "auditReturnTable",
  data() {
    return {
      shoppingEquipmentData: [
        {
          orderId: '12345678',
          orderTime: '2025-01-01 12:50:30',
          payTime: '2025-01-01 12:55:30',
          state: '未归还',
          returnCode: '',
          equipmentList: [
            {
              sport: '篮球',
              value: 8,
              rentNumber: 9,
              returnNumber: 0
            },
            {
              sport: '足球',
              value: 10,
              rentNumber: 3,
              returnNumber: 0
            }
          ],
          payment: 102
        },
        {
          orderId: '12345679',
          orderTime: '2025-01-01 12:50:30',
          payTime: '2025-01-01 12:55:30',
          state: '未归还',
          returnCode: '',
          equipmentList: [
            {
              sport: '篮球',
              value: 8,
              rentNumber: 9,
              returnNumber: 0
            },
            {
              sport: '足球',
              value: 10,
              rentNumber: 3,
              returnNumber: 0
            }
          ],
          payment: 102
        }
      ],
      dialogVisible: false,
      returnForm: {
        orderId: '',
        returnSportList: []
      },
      number: 0
    }
  },
  methods: {
    returnFormToDialog(orderId) {
      const targetOrder = this.shoppingEquipmentData.find(order => order.orderId === orderId);
      if (!targetOrder) {
        return;
      }
      this.returnForm.orderId = orderId;
      this.returnForm.returnSportList = targetOrder.equipmentList.map(({ value, ...rest }) => rest);
      this.dialogVisible = true;
    }
  }
}
</script>

<style scoped>

</style>