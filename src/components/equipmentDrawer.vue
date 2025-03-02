<template>
  <div>
    <el-row>
    <el-button @click="drawer = true" type="primary" style="float: right; margin-left: 10px;">
      结算
    </el-button>

    <el-button @click="drawer = true" type="primary" style="float: right; margin-left: 10px;">
      查看购买
    </el-button>
    </el-row>

    <el-drawer
        title="已选器材"
        :visible.sync="drawer"
        direction="btt"
        size="50%">

      <el-table
          :data="$store.state.eventTableData.filter(data => $store.state.equipmentList[data.sport] !== 0)"
          style="width: 100%"
          height="220"
          max-height="170vh">
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
            prop="sport"
            label="器材名称"
            width="180">
        </el-table-column>
        <el-table-column
            prop="value"
            label="器材价格(元/个*天)"
            width="180">
        </el-table-column>
        <el-table-column
            prop="number"
            label="器材数量">
          <template slot-scope="scope">
            {{ $store.state.equipmentList[scope.row.sport] }}
          </template>
        </el-table-column>
        <el-table-column
            label="器材总价(元)">
          <template slot-scope="scope">
            {{ scope.row.value * $store.state.equipmentList[scope.row.sport] }}
          </template>
        </el-table-column>
        <el-table-column
            label="操作">
          <template slot-scope="scope">
            <el-button
                type="text"
                icon="el-icon-remove"
                size="small"
                circle
                @click="deleteEquipmentList(scope.row.sport)"
                style="font-size: 24px">
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-row>
        <el-button @click="" type="primary" style="float: right; margin-top: 10px; margin-right: 10px;">结算</el-button>
        <el-button @click="cleanEquipmentList" type="primary" style="float: right; margin-top: 10px; margin-right: 10px;">清空</el-button>
        <span style="float: right; margin-top: 15px; margin-right: 10px; font-size: large">总价: {{ $store.getters.totalEquipmentPrice }} 元</span>
      </el-row>
    </el-drawer>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: "equipmentDrawer",
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    ...mapMutations(['cleanEquipmentList', 'deleteEquipmentList'])
  }
}
</script>

<style scoped>

</style>