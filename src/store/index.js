import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    eventTableData: [{
      pictureUrl: '',
      sport: '篮球',
      value: 8, // 元/个*天
      total: 10,
      remainder: 8,
      state: '已下架'
    }, {
      pictureUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      sport: '足球',
      value: 8, // 元/个*天
      total: 10,
      remainder: 10,
      state: '可出售'
    }, {
      pictureUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      sport: '乒乓球',
      value: 8, // 元/个*天
      total: 10,
      remainder: 8,
      state: '可出售'
    }],

    equipmentList: {
      '篮球': 0,
      '足球': 0,
      '乒乓球': 0
    }
  },
  getters: {
    totalEquipmentPrice: (state) => {
      let totalPrice = 0;
      state.eventTableData.forEach(item => {
        const boughtCount = state.equipmentList[item.sport] || 0;
        totalPrice += item.value * boughtCount;
      });
      return totalPrice;
    }
  },
  mutations: {
    cleanEquipmentList(state) {
      Object.keys(state.equipmentList).forEach(key => {
        state.equipmentList[key] = 0;
      });
    },

    deleteEquipmentList(state, n) {
      state.equipmentList[n] = state.equipmentList[n] - 1;
    }
  },
  actions: {
  },
  modules: {
  }
})
