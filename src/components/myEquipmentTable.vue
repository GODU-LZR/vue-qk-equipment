<template>
  <div>
    <ul class="infinite-list" style="overflow:auto">
      <li v-for="data in ShoppingEquipmentData" class="infinite-list-item" style="position: relative;list-style: none; padding: 30px; border: 1px solid #000; margin-bottom: 10px;">
        <el-descriptions title="账单信息">
          <el-descriptions-item label="账单编号">{{ data.orderId }}</el-descriptions-item>
          <el-descriptions-item label="下单时间">{{ data.orderTime }}</el-descriptions-item>
          <el-descriptions-item label="付款时间">{{ data.payTime }}</el-descriptions-item>
          <el-descriptions-item label="归还时间">{{ data.returnTime }}</el-descriptions-item>
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
              prop="returnNumber"
              label="实际归还"
              width="180">
          </el-table-column>
        </el-table>
        <el-row>
          <el-button type="primary" style="margin-top: 10px" v-if="data.state === '未归还'" @click="applyReturn(data.orderId)">申请归还</el-button>
        </el-row>
      </li>
    </ul>

    <el-dialog
        title="申请归还"
        :visible.sync="dialogVisible"
        width="30%"
        @close="returnForm.returnCode = ''"
    >
      <!-- 使用 Element Plus 的布局类实现居中 -->
      <div style="display: flex; flex-direction: column; align-items: center;">
        <h2 style="margin-bottom: 20px;">订单编号: {{ returnForm.orderId }}</h2>
        <h4 style="margin-bottom: 20px;">请输入归还码</h4>
        <sixDigitInput v-model="returnForm.returnCode"></sixDigitInput>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="() => { returnForm.returnCode = '';dialogVisible = false }">取 消</el-button>
    <el-button type="primary" @click="() => { returnForm.returnCode = '';dialogVisible = false }">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
import sixDigitInput from '../components/sixDigitInput'
export default {
  name: "myEquipmentTable",
  components: {
    sixDigitInput: sixDigitInput
  },
  data() {
    return {
      ShoppingEquipmentData: [
        {
         orderId: '12345678',
         orderTime: '2025-01-01 12:50:30',
         payTime: '2025-01-01 12:55:30',
         returnTime: '2025-01-01 17:55:30',
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
          returnTime: '2025-01-01 17:55:30',
          state: '未归还',
          equipmentList: [
            {
              sport: '篮球',
              value: 8,
              rentNumber: 9,
              returnNumber: 9
            },
            {
              sport: '足球',
              value: 10,
              rentNumber: 3,
              returnNumber: 9
            }
          ],
          payment: 102
        }
      ],
      dialogVisible: false,
      returnForm: {
        orderId: '',
        returnCode: ''
      }
    }
  },

  methods: {
    applyReturn(orderId) {
      this.returnForm.orderId = orderId;
      this.dialogVisible = true;
    }
  }
}
</script>

<style scoped>

</style>