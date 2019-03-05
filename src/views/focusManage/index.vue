<template>
  <section class="wrapper">
    <my-schema @panel-click="handlePanelChange" :panelList="panelList" :searchList="searchList" search>
      <my-table :list="list"></my-table>
      <my-pagination @change="handlePageChange" :total="total" :currPageNo="currPageNo" />
    </my-schema>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MySchema from '@/components/schema/schema'
import MySearch from '@/components/schema/search'
import MyTable from '@/components/schema/table'
import MyPagination from '@/components/schema/pagination'
import {
  _getPanelList, _getSearchList
} from '@/utils/mixin'

export default {
  props: {},
  name: 'tableList',
  components: {
    MySchema,
    MySearch,
    MyTable,
    MyPagination,
  },
  computed: {
    ...mapState({
      list: state => state.list,
      total: state => state.total,
      currPageNo: state => state.currPageNo
    }),
    changePath(){
      return this.$route.query
    }
  },
  filters: {},
  data(){
    return {}
  },
  watch: {
    changePath(){
      this.fetchData()
    }
  },
  methods: {
    ...mapActions(['GetShopInfo', 'GetShopSearchInfo', 'GetUserIndex', 'GetCorporationIndex', 'GetOrderListByParams']),

    handlePanelChange(e){
      this.fetchData(e)
    },

    handlePageChange(e){
      let params = {
        currPageNo: e
      }
      this.fetchData(params)
    },

    fetchData(params = {}){
      let search = {
        currPageNo: 1,
        pageSize: 10
      }
      const _obj = {
        '店铺管理_店铺管理': {
            action: 'GetShopInfo',
            params: {
              status: params.index - 1  >= 0 ? params.index - 1 : ''
            }
          },
        '店铺管理_商品查询': {
          action: 'GetShopSearchInfo',
          params: {
            status: params.index - 1  >= 0 ? params.index - 1 : ''
          }
        },
        '用户管理_个人管理': {
          action: 'GetUserIndex',
          params: {
            status: params.index - 1  >= 0 ? params.index - 1 : ''
          }
        },
        '用户管理_企业认证': {
          action: 'GetCorporationIndex',
          params: {
            status: params.index - 1  >= 0 ? params.index - 1 : ''
          }
        },
        '订单管理_自营订单': {
          action: 'GetOrderListByParams',
          params: {
            gooodsStatus: params.index - 1 >= 0 ? params.index - 1 : '',
            orderStates: 1
          }
        },
        '订单管理_第三方订单': {
          action: 'GetOrderListByParams',
          params: {
            gooodsStatus: params.index - 1 >= 0 ? params.index - 1 : '',
            orderStates: 0
          }
        }
      }
      let obj = _obj[`${this.query().l}_${this.query().f}`]
      this[obj.action].call(null, {...obj.params, ...search, ...params})
    }
  },
  created(){
    this.fetchData()
  },
  mixins:[_getPanelList, _getSearchList]
}
</script>
<style lang="scss" scoped>
.wrapper{
  width: inherit;
  height: inherit;
}
</style>
