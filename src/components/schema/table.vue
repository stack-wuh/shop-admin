<template>
  <section class="wrapper table-wrapper">
    <el-table :data="list" border stripe>
      <el-table-column align="center" type="index"></el-table-column>
      <template v-for="(item, index) in data" slot-scope="scope" >
        <el-table-column align="center" v-if="item.type === 'default'" :label="item.label" :prop="item.field"></el-table-column>
      </template>
    </el-table>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import {table} from '@/utils/table'
export default {
  props: {
    tableType: {
      type: String,
      default: 'index',
    },
    data: {
      type: Array,
      default: [],
      required: true
    },
    list: {
      type: Array,
      default: [],
      required: true,
    }
  },
  name: '',
  components: {},
  computed: {
    query(){
      return this.$route.query.c || this.$route.query.f
    },
    tabelList(){
      return table.find(kk => kk.params.includes(this.query))
    }
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
.table-wrapper{
  padding: 20px;
}
</style>
