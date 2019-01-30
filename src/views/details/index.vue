<template>
  <section class="wrapper detail-wrapper">
    <my-crumbs></my-crumbs>
    <my-info-list :title="'基础信息'" :list="List[0]['list']" ></my-info-list>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MyCrumbs from '@/components/schema/crumbs'
import MyInfoList from './child/list'
const List = [
  {
    title: '基础信息',
    list: [
      {
        label: '商品名称'
      },
      {
        label: '商品类目'
      },
      {
        label: '商品品牌'
      },
      {
        label: '商品类型'
      },
      {
        label: '商品材料'
      },
      {
        label: '商品用途'
      }
    ],
  }
]

export default {
  props: {},
  name: '',
  components: {
    MyCrumbs,
    MyInfoList,
  },
  computed: {},
  filters: {},
  data(){
    return {
      List,
    }
  },
  methods: {},
  created(){},
  mixins:[]
}
</script>
<style lang="scss" scoped>
.detail-wrapper{
  width: inherit;
  height: inherit;
  background-color: #fff;
}
</style>
