<template>
  <section class="wrapper">
    <section class="card-list">
      <my-card v-for="(item, index) in CardList" :key="index" :cardClassName="item.className" :data="item" v-bind="info"  />
    </section>

    <section class="chart-area">
      <ve-line :colors="['#2979ff', '#00998d']" :settings="charSetting" :data="data" :toolbox="toolbox"></ve-line>
    </section>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MyCard  from './card/card'

const CardList = [
  {
    name: '当前用户总量',
    value: 'userNumber',
    tips: '本周新增商户',
    upgrade: 'userNumberWeek',
    className: 'card-item__base',
  },
  {
    name: '当前商家总量',
    value: 'merchantNumber',
    tips: '本月新增商户',
    upgrade: 'merchantNumberMon',
    className: 'card-item__warning',
  },
  {
    name: '总订单数',
    value: 'orderNum',
    tips: '今日成交订单',
    upgrade: 'orderNumByDay',
    className: 'card-item__danger',
  },
  {
    name: '总营收(元)',
    value: 'allMoney',
    tips: '本月新增营收',
    upgrade: 'moneyByMon',
    className: 'card-item__success',
  }
]

const charSetting = {
  area: true,
  stack: {},
}
const toolbox = {
  feature: {
    saveAsImage: {},
    right: 20,
  }
}

export default {
  props: {},
  name: '',
  components: {
    MyCard,
    VeLine,
  },
  computed: {
    ...mapState({
      info: state => state.Index.info
    }),
  },
  data(){
    return {
      CardList,
      data: {
        columns: ['月份', '销售额'],
        rows: []
      },
      charSetting,
      toolbox,
    }
  },
  methods: {
    ...mapActions([
      'GetIndexView'
    ])
  },
  created(){
    setTimeout(() => {
      this.data.rows = this.info.monthReport.map((k, i) => {
        return {'月份': i + 1 + '月份' , '销售额': k}
      })
    }, 1000)
    this.GetIndexView()
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
