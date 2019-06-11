<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <header-detail :seller="seller"></header-detail>
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
import HeaderDetail from 'components/header-detail/header-detail'
import { getSeller, getGoods } from 'api'

export default {
  name: 'app',
  data() {
    return {
      seller: {}
    }
  },
  created() {
    // 調用封裝後的api方法直接取得資料
    this._getSeller()
    this._getGoods()
  },
  methods: {
    // 將api請求封裝載methods內，將生命週期更簡潔清楚
    _getSeller() {
      getSeller().then(seller => (this.seller = seller))
    },
    _getGoods() {
      getGoods().then(goods => console.log(goods))
    }
  },
  components: {
    VHeader,
    HeaderDetail
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
