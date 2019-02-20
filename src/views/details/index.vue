<template>
  <section class="wrapper detail-wrapper">
    <my-crumbs :list="infoObj.crumbsList" ></my-crumbs>
    <my-info-list
      v-for="(item, index) in infoObj.list"
      :key="index"
      :title="item.title"
      :list="item.list"
      v-bind="info">
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


export default {
  props: {},
  name: '',
  components: {
    MyCrumbs,
    MyInfoList,
  },
  computed: {
    ...mapState({
      info: state => state.info
    })
  },
  filters: {},
  data(){
    return {
    }
  },
  methods: {
    ...mapActions(['GetShopOneById', 'GetShopSearchOneById']),
    fetchData(){
      const _obj = {
        '店铺管理_店铺管理': {
          action: 'GetShopOneById',
          params: {
            id: this.$route.query.id
          }
        },
        '店铺管理_商品查询': {
          action: 'GetShopSearchOneById',
          params: {
            id: this.$route.query.id
          }
        }
      }
      const obj = _obj[`${this.$route.query.l}_${this.$route.query.f}`]
      this[obj.action].call(this, {...obj.params})
    }
  },
  created(){
    this.fetchData()
  },
  mixins:[_getInfoList]
}
</script>
<style lang="scss" scoped>
.detail-wrapper{
  width: inherit;
  height: inherit;
  background-color: #fff;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    width: 4px;
    height: 3px;
  }
  &::-webkit-scrollbar-thumn{
    box-shadow: 0 0 inset 2px #000;
  }
}
</style>
