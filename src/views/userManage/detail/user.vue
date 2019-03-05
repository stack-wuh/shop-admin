<template>
  <section class="user-wrapper">
    <my-crumbs :list="infoObj.crumbsList"></my-crumbs>
    <el-tabs v-model="activeName" type="card" class="my-tabs">
      <el-tab-pane label="基础信息" name="first">
        <my-user-comm v-bind="baseInfo" />
      </el-tab-pane>
      <el-tab-pane label="地址信息" name="second">
        <my-table v-if="canShowAddressInfo.includes($route.query.status)" :list="addressList" />
        <div class="my-tabs__item--unactive" v-else>暂无地址认证信息</div>
      </el-tab-pane>
      <el-tab-pane label="企业信息" name="third">
        <my-user-index v-if="activeName === 'third' && canShohwCorporationInfo.includes($route.query.status)" :crumbs="false" v-bind="corporationInfo" />
        <div class="my-tabs__item--unactive" v-else>暂无企业认证信息</div>
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


const canShowAddressInfo = [3]
const canShohwCorporationInfo = [3]

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
  computed: {
    ...mapState({
      baseInfo: state => state.User.userManageInfo && state.User.userManageInfo.userDomain,
      addressList: state => state.User.userManageInfo && state.User.userManageInfo.addressList,
      corporationInfo: state => state.User.userManageInfo && state.User.userManageInfo.companyCertDomain
    })
  },
  filters: {},
  data(){
    return {
      activeName: 'first',
      canShowAddressInfo,
      canShohwCorporationInfo,
    }
  },
  methods: {
    ...mapActions(['GetUserDetailById', ])
  },
  created(){
    let {query: {id}} = this.$route
    this.GetUserDetailById(id)
  },
  mixins:[_getInfoList, ]
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
@import '@/assets/style/function.scss';
@import '@/assets/style/color.scss';

.user-wrapper {
  width: inherit;
  height: inherit;
  background-color:  #fff;
  .my-tabs {
    margin: 0 20px;
    margin-top: 20px;

    .my-tabs__item--unactive {
      height: 300px;
      text-align: center;
      line-height: 300px;
      color: $t-999;
      font-size: 18px;
    }
  }
}
</style>
