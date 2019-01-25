<template>
  <section class="wrapper">
    <my-schema :panelList="panelList" @panel-click="panelClick">
      <section class="table-area">
        <el-table :data="[{}, {}, {}, {}, {}, {}, {}]"  stripe width="100%">
          <el-table-column type="expand" >
            <template slot-scope="scope">
              <el-table :data="[{}, {}, {}]" border stripe width="90%">
                <el-table-column align="center" label="分类"></el-table-column>
                <el-table-column align="center" label="名称"></el-table-column>
                <el-table-column align="center" label="状态"></el-table-column>
                <el-table-column align="center" label="操作"></el-table-column>
              </el-table>
            </template>
          </el-table-column>
          <el-table-column align="center" label="分类"></el-table-column>
          <el-table-column align="center" label="名称" ></el-table-column>
          <el-table-column align="center" label="状态"></el-table-column>
          <el-table-column align="center" label="操作" ></el-table-column>
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
    }
  },
  methods: {
    panelClick(e){
      this.currPanelIndex = e.index
    }
  },
  created(){},
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
