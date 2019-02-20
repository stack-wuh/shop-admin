<template>
  <section class="wrapper pagination-wrapper">
    <el-pagination
      :page-size="pageSize"
      :total="total"
      layout="total, prev, pager, next, jumper"
      :background="background"
      :current-page="currPageNo"
      :current-change="handleClickPage"
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
    },
    currPageNo: {
      type: Number,
      default: 1
    },
    background: {
      type: Boolean,
      default: false
    }
  },
  name: '',
  components: {},
  computed: {},
  filters: {},
  data(){
    return {}
  },
  methods: {
    handleClickPage(e){
      this.$emit('handleChangePage', e)
    }
  },
  created(){},
  mixins:[]
}
</script>
<style lang="scss" scoped>
.pagination-wrapper{
  height: 40px !important;
  margin: 10px 0;
  text-align: center;
}
</style>
