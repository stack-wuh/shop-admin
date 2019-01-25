<template>
  <section class="wrapper">
    <my-schema search :panelList="panelList" :searchList="searchList">
      <my-table :list="List"></my-table>
      <my-pagination :total="10" ></my-pagination>
    </my-schema>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MySchema from '@/components/schema/schema'
import MyTable from '@/components/schema/table'
import MyPagination from '@/components/schema/pagination'

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


const List = [
  {
    name: 'Shadow'
  },
  {
    name: 'Shadow'
  },
  {
    name: 'Shadow'
  },
  {
    name: 'Shadow'
  },
  {
    name: 'Shadow'
  },
  {
    name: 'Shadow'
  },
  {
    name: 'Shadow'
  },
]
export default {
  props: {},
  name: '',
  components: {
    MySchema,
    MyTable,
    MyPagination,
  },
  computed: {},
  filters: {},
  data(){
    return {
      panelList,
      searchList,
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
