<template>
  <section class="wrapper">
    <my-schema :panelList="panelList" @panel-click="panelClick">
      <section class="table-area">
        <el-table :data="list" border stripe width="100%">
          <el-table-column type="expand" >
            <template slot-scope="scope">
              <el-table :data="scope.row.list" border stripe width="90%">
                <el-table-column align="center" label="分类">
                  <template slot-scope="scope">
                    <el-tag type="danger">三级分类</el-tag>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="名称" prop="name"></el-table-column>
                <el-table-column align="center" label="状态">
                  <template slot-scope="scope">
                      <el-switch
                        :value="scope.row.status"
                        :active-value="1"
                        :inactive-value="0"
                        active-text="已开启"
                        inactive-text="已关闭"
                        @change="UpdateClassifyByParams({id: scope.row.id})">
                      </el-switch>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作">
                  <template slot-scope="scope">
                    <el-button type="danger" size="mini" @click="SET_DIALOG_INFO({isShowDialog: true, title: getTitle, type: 'update', form: scope.row})">编辑</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-table-column>
          <el-table-column align="center" label="分类">
            <template slot-scope="scope">
              <el-tag type="success">二级分类</el-tag>
            </template>
          </el-table-column>
          <el-table-column align="center" label="名称" prop="name"></el-table-column>
          <el-table-column align="center" label="状态">
            <template slot-scope="scope">
              <el-switch
                :value="scope.row.status"
                :active-value="1"
                :inactive-value="0"
                active-text="已开启"
                inactive-text="已关闭"
                @change="UpdateClassifyByParams({id: scope.row.id})">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button size="small" type="primary" @click="SET_DIALOG_INFO({isShowDialog: true, title: getTitle, type: 'add', form: {...scope.row, name:''}})">添加</el-button>
              <el-button size="small" type="success" @click="SET_DIALOG_INFO({isShowDialog: true, title: getTitle, type: 'update', form: scope.row})">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </section>
    </my-schema>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MySchema from '@/components/schema/schema'
const panelList = [
  {
    name: '风类管理'
  },
  {
    name: '水类管理'
  },
  {
    name: '电类管理'
  },
  {
    name: '消防类管理'
  }
]
export default {
  props: {},
  name: '',
  components: {
    MySchema,
  },
  computed: {
    ...mapState({
      list: state => state.Website.list
    }),
    getTitle(){
      return this.panelList[this.currPanelIndex]['name']
    }
  },
  filters: {},
  data(){
    return {
      panelList,
      currPanelIndex: 0,
    }
  },
  methods: {
    ...mapMutations(['SET_DIALOG_INFO']),
    ...mapActions(['GetClassifyByParentId', 'UpdateClassifyByParams']),
    panelClick(e){
      this.currPanelIndex = e.index
      this.GetClassifyByParentId(e.index + 1)
    },
    fetchData(){
      this.GetClassifyByParentId()
    }
  },
  created(){
    this.fetchData()
  },
  mixins:[]
}
</script>
<style lang="scss" scoped>
.wrapper{
  width: inherit;
  height: inherit;
  .table-area{

  }
}
</style>
