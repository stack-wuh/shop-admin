<template>
  <section class="wrapper detail-wrapper">
    <my-crumbs :list="infoObj.crumbsList" ></my-crumbs>
    <my-info-list v-for="(item, index) in infoObj.list" :key="index" :title="item.title" :list="item.list">
      <component v-for="(ss, si) in item.slots" :key="si" :is="ss" slot="self" ></component>
    </my-info-list>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MyCrumbs from '@/components/schema/crumbs'
import MyInfoList from './child/list'
import {
  _getInfoList
} from '@/utils/mixin'
import MyTravisInfo from '@/views/details/child/travis'

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
    MyTravisInfo,
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
  mixins:[_getInfoList]
}
</script>
<style lang="scss" scoped>
.detail-wrapper{
  width: inherit;
  height: inherit;
  background-color: #fff;
}
</style>
