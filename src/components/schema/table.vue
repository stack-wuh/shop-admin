<template>
  <section class="table-wrapper">
    <el-table :data="list" :border="border" stripe width="100%" :key="Math.random()">
      <el-table-column align="center" :type="tableList.type" :label="tableList.label" fixed="left" width="70"></el-table-column>
      <section  v-for="(item, index) in tableList.list" :key="index">
        <el-table-column :width="item.width" align="center" v-if="item.type === 'default'" :label="item.label" :prop="item.field"></el-table-column>
        <el-table-column :width="item.width" align="center" v-if="item.type === 'image'" :label="item.label" :prop="item.field">
          <template slot-scope="scope">
            <img :src="scope.row[item.field]" alt="logo">
          </template>
        </el-table-column>
        <el-table-column :width="item.width" align="center" v-if="item.type === 'switch'" :label="item.label" :prop="item.field">
          <template slot-scope="scope">
            <el-switch
              @change="item.change({$router, $route, params: scope.row})"
              :value="scope.row[item.field]"
              :active-text="item.activeText"
              :inactive-text="item.inactiveText"
              :active-value="item.activeValue"
              :inactive-value="item.inactiveValue"
              :active-color="item.activeColor"
              :inactive-color="item.inactiveColor"
               ></el-switch>
          </template>
        </el-table-column>
        <el-table-column :width="item.width" align="center" v-if="item.type === 'statusrange'" :label="item.label" :prop="item.field">
          <template slot-scope="scope">
            <el-tag :type="item.state[scope.row[item.field]]" >{{item.order[scope.row[item.field]]}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column :width="item.width" fixed="right" align="center" v-if="item.type === 'setting'" :label="item.label" :prop="item.field">
          <template slot-scope="scope">
            <el-button
              v-if="item && item.list"
              v-for="(btn, bid) in item.list"
              type="text"
              @click="btn.click({$router, $route, query: $route.query, btn, params: scope.row, infoObj})"
              >{{btn.text}}</el-button>
          </template>
        </el-table-column>
      </section>
    </el-table>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import {table} from '@/utils/table'
import {
  _getInfoList, _getPanelList
} from '@/utils/mixin'

export default {
  props: {
    tableType: {
      type: String,
      default: 'index',
    },
    list: {
      type: Array,
      default: [],
      required: true,
    },
    border: {
      type: Boolean,
      default: true
    },
    params: {
      type: String,
      default: '',
      required: false
    }
  },
  name: '',
  components: {},
  computed: {
    _query(){
      return this.$route.query.c || this.$route.query.f || this.$route.query.l
    },
    tableList(){
      return table.find(kk => kk.params.includes(this.params || this._query))
    }
  },
  filters: {},
  data(){
    return {}
  },
  methods: {},
  created(){},
  mixins:[_getInfoList]
}
</script>
<style lang="scss" scoped>

</style>
