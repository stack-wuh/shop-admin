<template>
  <section class="wrapper pagination-wrapper">
    <el-pagination
      :page-size="pageSize"
      :total="total"
      layout="total, prev, pager, next, jumper"
      ></el-pagination>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  props: {
    total: {
      type: Number,
      default: 0,
      required: true
    },
    pageSize: {
      type: Number,
      default: 10,
      required: false
    }
  },
  name: '',
  components: {},
  computed: {},
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
.pagination-wrapper{
  height: 40px !important;
  text-align: center;
}
</style>
