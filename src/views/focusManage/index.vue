<template>
  <section class="wrapper">
    <my-schema :panelList="panelList" :searchList="searchList" search>
      <my-table :list="[{}, {}, {}]"></my-table>
      <my-pagination :total="10" />
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
  computed: {},
  filters: {},
  data(){
    return {}
  },
  methods: {},
  created(){},
  mixins:[_getPanelList, _getSearchList]
}
</script>
<style lang="scss" scoped>
.wrapper{
  width: inherit;
  height: inherit;
}
</style>
