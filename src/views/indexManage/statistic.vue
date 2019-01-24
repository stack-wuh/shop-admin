<template>
  <section class="wrapper">
    <my-schema search :panelList="panelList" :searchList="searchList">
      <my-table :data="tableList" :list="List"></my-table>
    </my-schema>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MySchema from '@/components/schema/schema'
import MyTable from '@/components/schema/table'

const panelList = [
  {
    name: '营收统计',
    path: '/index/statistic'
  }
]

const searchList = [
  {
    label: '开始日期',
    field: 'startDate',
    type: 'date',
    value: '',
  },
  {
    label: '结束日期',
    field: 'endDate',
    type: 'date',
    value: '',
  },
  {
    label: '订单编号',
    field: 'orderNum',
    type: 'input',
    value: '',
  },
  {
    label: '商家名称',
    field: 'marketName',
    type: 'input',
    value: '',
  }
]

const tableList = [
  {
    label: 'AAA',
    type: 'default',
    field: 'name',
  }
]

const List = [
  {
    name: 'Shadow'
  }
]
export default {
  props: {},
  name: '',
  components: {
    MySchema,
    MyTable,
  },
  computed: {},
  filters: {},
  data(){
    return {
      panelList,
      searchList,
      tableList,
      List,
    }
  },
  methods: {},
  created(){},
  mixins:[]
}
</script>
<style lang="scss" scoped>
.wrapper{
  height: inherit;
}
</style>
