<template>
  <section class="wrapper">
    <my-schema :panelList="panelList" :searchList="searchList" search>
      <my-table :list="[{}, {}, {}]"></my-table>
    </my-schema>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MySchema from '@/components/schema/schema'
import MySearch from '@/components/schema/search'
import MyTable from '@/components/schema/table'
import {
  _getPanelList, _getSearchList
} from '@/utils/mixin'

export default {
  props: {},
  name: '',
  components: {
    MySchema,
    MySearch,
    MyTable,
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
