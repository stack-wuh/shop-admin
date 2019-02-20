<template>
  <section class="mini-table-wrapper">
    <section class="mini-table-area">
      <my-table :list="[{}, {}, {}]" :params="tableParams"></my-table>
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
    tableParams(){
      return this.$route.query.f + this.$route.query.s
    }
  },
  filters: {},
  data(){
    return {
      list: []
    }
  },
  methods: {},
  created(){},
  mixins:[]
}
</script>
<style lang="scss" scoped>
</style>
