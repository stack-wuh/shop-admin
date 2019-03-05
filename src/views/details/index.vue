<template>
  <section class="wrapper detail-wrapper">
    <my-crumbs :list="infoObj.crumbsList">
      <div slot="right" v-if="canShowBtnGroup.includes(this.$route.path)" >
        <el-button @click="handleClickSubmit(0)" type="success">通过</el-button>
        <el-button @click="handleClickSubmit(1)" type="danger">不通过</el-button>
      </div>
    </my-crumbs>
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

const canShowBtnGroup = ['/store/shop/detail']

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
      canShowBtnGroup,
    }
  },
  methods: {
    ...mapActions(['GetShopOneById', 'GetShopSearchOneById', 'GetBottomItemById', 'GetOwnOrderById', 'GetNewsChildInfoById']),
    ...mapActions(
      {
        'UpdateShopOneStatusByParams': 'GetShopOneById'
      }
    ),
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
        },
        '订单管理_自营订单': {
          action: 'GetOwnOrderById',
          params: {
            id: this.$route.query.id
          }
        },
        '订单管理_第三方订单': {
          action: 'GetOwnOrderById',
          params: {
            id: this.$route.query.id
          }
        },
        '网站管理_新闻中心': {
          action: 'GetNewsChildInfoById',
          params: {
            id: this.$route.query.id
          }
        }
      }
      const obj = _obj[`${this.$route.query.l}_${this.$route.query.f}`]
      this[obj.action].call(this, {...obj.params})
    },

    handleClickSubmit(status){
      let {list: [info]} = this.infoObj
      let _temp = {}
      info.list.map(k => {
        _temp[k.field] = k.value
      })
      const _obj = {
        '店铺管理_店铺管理': {
          action: 'UpdateShopOneStatusByParams',
          params: {
            id: this.$route.query.id,
            status,
            ..._temp
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
