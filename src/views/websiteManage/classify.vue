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
                        inactive-text="已关闭">
                      </el-switch>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作">
                  <template slot-scope="scope">
                    <el-button type="danger" size="mini">编辑</el-button>
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
                inactive-text="已关闭">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button size="small" type="success">编辑</el-button>
              <el-button>添加</el-button>
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
  computed: {},
  filters: {},
  data(){
    return {
      panelList,
      currPanelIndex: 0,

      list: [],
    }
  },
  methods: {
    ...mapActions(['GetClassifyByParentId']),
    panelClick(e){
      this.currPanelIndex = e.index
    },
    fetchData(){
      this.GetClassifyByParentId().then(res => {
        this.list = res.data
      })
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
