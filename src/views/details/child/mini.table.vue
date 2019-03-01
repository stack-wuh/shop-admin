<template>
  <section class="mini-table-wrapper">
    <section class="mini-table-area">
      <my-table :list="list" :params="tableParams"></my-table>
    </section>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MyTable from '@/components/schema/table'
export default {
  props: {},
  name: '',
  components: {
    MyTable,
  },
  computed: {
    ...mapState({
      info: state => state.info,
      list: state => state.info && state.info.orderItemList

    }),
    tableParams(){
      return this.$route.query.f + (this.$route.query.s ? this.$route.query.s : '__')
    },
  },
  filters: {},
  data(){
    return {}
  },
  methods: {},
  created(){},
  mixins:[]
}
</script>
<style lang="scss" scoped>
</style>
