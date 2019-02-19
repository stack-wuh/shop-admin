<template>
  <section class="user-wrapper">
    <my-crumbs :list="infoObj.crumbsList"></my-crumbs>


    <el-tabs v-model="activeName" type="card" class="my-tabs">
      <el-tab-pane label="基础信息" name="first">
        <my-user-comm />
      </el-tab-pane>
      <el-tab-pane label="地址信息" name="second">
        <my-table :list="[{}, {}, {}]" />
      </el-tab-pane>
      <el-tab-pane label="企业信息" name="third">
        <my-user-index :crumbs="false" />
      </el-tab-pane>
    </el-tabs>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MyCrumbs from '@/components/schema/crumbs'
import MyUserComm from '../user/user'
import MyTable from '@/components/schema/table'
import MyUserIndex from './index'

import {
  _getInfoList,
} from '@/utils/mixin'

export default {
  props: {},
  name: '',
  components: {
    MyCrumbs,
    MyUserComm,
    MyTable,
    MyUserIndex
  },
  computed: {},
  filters: {},
  data(){
    return {
      activeName: 'first'
    }
  },
  methods: {},
  created(){},
  mixins:[_getInfoList, ]
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
@import '@/assets/style/function.scss';

.user-wrapper {
  width: inherit;
  height: inherit;
  background-color:  #fff;
  .my-tabs {
    margin: 0 20px;
    margin-top: 20px;
  }
}
</style>
