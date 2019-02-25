<template>
  <section class="wrapper">
    <my-schema :panelList="panelList">
      <el-button type="primary" slot="right" @click="SET_DIALOG_INFO({isShowDialog: true, title: '账号管理'})">新增管理员</el-button>
      <my-table :list='list'></my-table>
    </my-schema>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MySchema from '@/components/schema/schema';
import MyTable from '@/components/schema/table';
import {
  _getPanelList
} from '@/utils/mixin'
export default {
  props: {},
  name: '',
  components: {
    MySchema,
    MyTable,
  },
  computed: {
    ...mapState({
      list: state => state.User.list
    })
  },
  filters: {},
  data(){
    return {}
  },
  methods: {
    ...mapActions(['GetUserManagerList', 'UpdateUserByParams']),
    ...mapMutations(['SET_DIALOG_INFO']),
    fetchData(){
      this.GetUserManagerList()
    }
  },
  created(){
    this.fetchData()
  },
  mixins:[_getPanelList]
}
</script>
<style lang="scss" scoped>
.wrapper{
  width: inherit;
  height: inherit;

}
</style>
