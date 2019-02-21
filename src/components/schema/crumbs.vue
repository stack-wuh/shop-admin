<template>
  <section class="crumbs-wrapper">
    <nav class="crumbs-list">
      <span v-for="(item, index) in list" :keys="index" class="crumbs-item">{{item.name}}</span>
    </nav>
    <section class="crunmbs-right">
      <slot name="right"></slot>
    </section>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  props: {},
  name: '',
  components: {},
  computed: {},
  filters: {},
  data(){
    return {
      list: [],
    }
  },
  methods: {
    /**
     * [getCrumbsList 重新生成crumbs列表]
     * 依据路由query值
     * @method getCrumbsList
     * @return {[type]}      [description]
     */
    getCrumbsList(){
      let query = this.$route.query
      let _order = ['l', 'f', 'c', 's'] // 获取顺序, 即主导航 -> 副导航 -> 模块 -> 详情
      this.list = _order.map(k => { return  {name: query[k]}})
    }
  },
  created(){
    this.getCrumbsList()
  },
  mixins:[]
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/color.scss';
@import '@/assets/style/mixin.scss';
.crumbs-wrapper{
  @include flex($dir: row, $justify: space-between, $align: center);
  width: inherit;
  height: 50px;
  padding: 0 20px;
  font-size: 14px;
  border-bottom: 1px solid $b-base;

  .crumbs-item{
    &:after{
      content: '>';
      padding: 0 5px;
    }
    &:last-of-type{
      &:after{
        content: '';
      }
    }
  }
}
</style>
