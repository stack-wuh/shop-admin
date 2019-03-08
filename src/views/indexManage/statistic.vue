<template>
  <section class="wrapper">
    <my-schema search :panelList="panelList" :searchList="searchList">
      <my-table :list="list"></my-table>
      <my-pagination @change="handlePageChange" :total="total" :currPageNo="currPageNo"></my-pagination>
    </my-schema>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MySchema from '@/components/schema/schema'
import MyTable from '@/components/schema/table'
import MyPagination from '@/components/schema/pagination'

import {
  _getSearchList, _getPanelList
} from '@/utils/mixin'

export default {
  props: {},
  name: '',
  components: {
    MySchema,
    MyTable,
    MyPagination,
  },
  computed: {
    ...mapState({
      list: state => state.list,
      total: state => state.total,
      currPageNo: state => state.currPageNo
    })
  },
  filters: {},
  data(){
    return {}
  },
  methods: {
    ...mapActions(['GetIndexStatistic']),
    
    handlePageChange(e){
      this.GetIndexStatistic({currPageNo: e})
    }
  },

  created(){
    this.GetIndexStatistic({})
  },
  mixins:[_getSearchList, _getPanelList]
}
</script>
<style lang="scss" scoped>
.wrapper{
  height: inherit;
}
</style>
