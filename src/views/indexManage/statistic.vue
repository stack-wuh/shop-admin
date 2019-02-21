<template>
  <section class="wrapper">
    <my-schema search :panelList="panelList" :searchList="searchList">
      <my-table :list="[{}, {}, {}]" :info="{name: 'shadow'}"></my-table>
      <my-pagination :total="10" ></my-pagination>
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
  computed: {},
  filters: {},
  data(){
    return {}
  },
  methods: {
    ...mapActions(['GetIndexStatistic'])
  },

  created(){
    this.GetIndexStatistic({})
    console.log(this.$store)
  },
  mixins:[_getSearchList, _getPanelList]
}
</script>
<style lang="scss" scoped>
.wrapper{
  height: inherit;
}
</style>
