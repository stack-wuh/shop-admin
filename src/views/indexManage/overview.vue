<template>
  <section class="wrapper">
    <section class="card-list">
      <my-card v-for="(item, index) in CardList" :key="index" :cardClassName="item.className" :data="item"  />
    </section>

    <section class="chart-area">
      <ve-line area :data="data"></ve-line>
    </section>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MyCard  from './card/card'

const CardList = [
  {
    name: '当前用户总量',
    value: '100000',
    tips: '本周新增商户',
    upgrade: '200',
    className: 'card-item__base',
  },
  {
    name: '当前商家总量',
    value: '20000',
    tips: '本月新增商户',
    upgrade: '300',
    className: 'card-item__warning',
  },
  {
    name: '总订单数',
    value: '200000',
    tips: '今日成交订单',
    upgrade: '200',
    className: 'card-item__danger',
  },
  {
    name: '总营收(元)',
    value: '201002',
    tips: '本月新增营收',
    upgrade: '122',
    className: 'card-item__success',
  }
]

export default {
  props: {},
  name: '',
  components: {
    MyCard,
    VeLine,
  },
  computed: {},
  data(){
    return {
      CardList,
      data: {
        columns: ['日期', '销售额'],
        rows: []
      }
    }
  },
  methods: {},
  created(){
    this.data.rows = Array(10).fill({'日期': '1.1', '销售额': 123, '其他': 0})
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
.wrapper{
  .card-list{
    @include flex($dir: row, $justify: space-between);
    padding-left: 20px;
    .wrapper{
      flex: 1;
      margin-right: 20px;
    }
  }
  .chart-area{
    width: calc(100% - 40px);
    margin-top: 15px;
    margin-left: 20px;
    padding: 20px;
    background-color: #fff;

    div.ve-line{
        width: calc(100% - 20px);
    }
  }
}
</style>
