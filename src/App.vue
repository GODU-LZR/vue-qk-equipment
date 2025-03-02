<!-- vue-qk-/src/App.vue -->
<template>
  <div>

    <div class="line"></div>
    <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router>
      <el-menu-item index="/GetEquipment">租借器材</el-menu-item>
      <el-menu-item index="/MyEquipment">我的工作台</el-menu-item>
      <el-submenu index="3">
        <template slot="title" v-if="user === '赛事管理员' || user === '超级管理员'">审核平台</template>
        <el-menu-item index="/AuditRent">审核租借</el-menu-item>
        <el-menu-item index="/AuditReturn">审核归还</el-menu-item>
      </el-submenu>
    </el-menu>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'EquipmentApp',
  data() {
    return {
      user: '超级管理员',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
    }
  }
}
</script>