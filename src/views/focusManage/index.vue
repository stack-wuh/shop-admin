<template>
  <section class="wrapper">
    <my-schema :panelList="panelList" :searchList="searchList" search>
      <my-table :list="list"></my-table>
      <my-pagination :total="total" :currPageNo="currPageNo" />
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
    ...mapActions(['GetShopInfo', 'GetShopSearchInfo', 'GetUserIndex', 'GetCorporationIndex']),

    fetchData(){
      let search = {
        currPageNo: 1,
        pageSize: 10
      }
      const _obj = {
        '店铺管理_店铺管理': {
            action: 'GetShopInfo',
            params: {
              status: 0
            }
          },
        '店铺管理_商品查询': {
          action: 'GetShopSearchInfo',
          params: {
            status: 0
          }
        },
        '用户管理_个人管理': {
          action: 'GetUserIndex',
          params: {
            status: 0
          }
        },
        '用户管理_企业认证': {
          action: 'GetCorporationIndex',
          params: {
            status: 0
          }
        }
      }
      let obj = _obj[`${this.query().l}_${this.query().f}`]
      this[obj.action].call(null, {...obj.params, ...search})
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
