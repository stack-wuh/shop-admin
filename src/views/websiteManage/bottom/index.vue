<template>
  <section class="wrapper">
    <my-schema
      :panelList="getPanelList"
      @panel-click="handlePanelClick"
      >
        <div v-if="canShowEditBtnPath.includes($route.path)" slot="right">
          <el-button @click="SET_DIALOG_INFO({isShowDialog: true, title: changePath})" type="primary" size="small">新增</el-button>
        </div>
        <my-table :list="list" border></my-table>
    </my-schema>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MySchema from '@/components/schema/schema'
import MyTable from '@/components/schema/table'

const PanelList = [
  {
    name: '买家服务'
  },
  {
    name: '卖家服务'
  },
  {
    name: '售后服务'
  },
  {
    name: '购物指南'
  },
  {
    name: '金融服务'
  },
  {
    name: '关于我们'
  }
]
const canShowEditBtnPath = ['/website/news', '/website/notice']

export default {
  props: {},
  name: '',
  components: {
    MySchema,
    MyTable,
  },
  computed: {
    ...mapState({
      list: state => state.Website.list
    }),
    changePath(){
      return this.$route.query.f || this.$route.query.l
    },
    getPanelList(){
      let {query: {l, f}} = this.$route
      switch(f){
        case '积分管理': return [{name: '积分管理'}]
        case '新闻中心': return [{name: '风类新闻'}, {name: '水类新闻'}, {name: '电类新闻'}, {name: '消防类新闻'}]
        case '公告管理': return [{name: '公告管理'}]
        default: return  PanelList
      }
    }
  },
  filters: {},
  data(){
    return {
      PanelList,
      isRefresh: true,
      canShowEditBtnPath,
    }
  },
  watch: {
    changePath(){
      this.fetchData()
    }
  },
  methods: {
    ...mapMutations(['SET_SCHEMA_HEADER_CURRENT', 'SET_DIALOG_INFO']),
    ...mapActions(['GetBottomListByStatus', 'GetNoticeListByStatus', 'GetIntegralListByStatus', 'GetNewsList']),
    fetchData(params = {}){
      let {index} = params
      switch(this.$route.query.f){
        case '底部导航栏管理': return this.GetBottomListByStatus(index)
        case '公告管理': return  this.GetNoticeListByStatus(index)
        case '积分管理': return this.GetIntegralListByStatus()
        case '新闻中心': return this.GetNewsList(index)
        default: return this.GetBottomListByStatus(index)
      }

    },
    handlePanelClick(e){
      this.fetchData(e)
    }
  },
  created(){
    this.SET_SCHEMA_HEADER_CURRENT({})
    this.fetchData()
  },
  mixins:[]
}
</script>
<style lang="scss" scoped>
.wrapper{
  width: inherit;
  height: inherit;
}
</style>
