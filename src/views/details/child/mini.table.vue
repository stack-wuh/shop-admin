<template>
  <section class="mini-table-wrapper">
    <section class="mini-table-area">
      <my-table :list="[{}, {}, {}]" ></my-table>
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
  computed: {},
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
