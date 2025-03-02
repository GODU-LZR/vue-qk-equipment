// src/router/index.js
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue' // 示例
import GetEquipment from '../views/GetEquipment'
import MyEquipment from '../views/MyEquipment'
import AuditRent from '../views/AuditRent'
import AuditReturn from '../views/AuditReturn'

Vue.use(Router)

const routes = [
  {path: '/', name: 'EquipmentHome', component: Home},
  {path: '/GetEquipment', name: 'GetEquipment', component: GetEquipment},
  {path: '/MyEquipment', name: 'MyEquipment', component: MyEquipment},
  {path: '/AuditRent', name: 'AuditRent', component: AuditRent},
  {path: '/AuditReturn', name: 'AuditReturn', component: AuditReturn}
]

const router = new Router({
  mode: 'history',
  // 若在 qiankun 环境下，设置 base 为 /equipment
  base: window.__POWERED_BY_QIANKUN__ ? '/equipment' : '/',
  routes
})

export default router
