<template>
  <section class="crumbs-wrapper">
    <nav class="crumbs-list">
      <span v-for="(item, index) in $attrs.list" :keys="index" class="crumbs-item">{{item.name}}</span>
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
    return {}
  },
  methods: {},
  created(){},
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
