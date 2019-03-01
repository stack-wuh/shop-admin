<template>
  <section class="user-corpor-wrapper">
    <my-crumbs v-if="crumbs" :list="infoObj.crumbsList">
      <section v-if="getInfoObj.status == 0" slot="right">
        <el-button @click="handleClickSubmit(0)" type="success">通过</el-button>
        <el-button @click="handleClickSubmit(1)" type="danger">不通过</el-button>
      </section>
    </my-crumbs>
    <section class="user-corpor-paper">
      <ul class="user-corpor-paper__list">
        <li class="user-corpor-paper__item">
          <span class="user-corpor-paper__label">提交时间</span>
          <span class="user-corpor-paper__value">{{getInfoObj.createTime}}</span>
        </li>
        <li class="user-corpor-paper__item">
          <span class="user-corpor-paper__label">审核状态</span>
          <span class="user-corpor-paper__value">{{STATE[getInfoObj.status]}}</span>
        </li>
        <li class="user-corpor-paper__item">
          <span class="user-corpor-paper__label">公司名称</span>
          <span class="user-corpor-paper__value">{{getInfoObj.companyName}}</span>
        </li>
        <li class="user-corpor-paper__item">
          <span class="user-corpor-paper__label">公司电话</span>
          <span class="user-corpor-paper__value">{{getInfoObj.companyPhone}}</span>
        </li>
        <li class="user-corpor-paper__item">
          <span class="user-corpor-paper__label">公司法人</span>
          <span class="user-corpor-paper__value">{{getInfoObj.legalPerson}}</span>
        </li>
        <li class="user-corpor-paper__item">
          <span class="user-corpor-paper__label">手机号</span>
          <span class="user-corpor-paper__value">{{getInfoObj.phone}}</span>
        </li>
        <li class="user-corpor-paper__item">
          <span class="user-corpor-paper__label">税号</span>
          <span class="user-corpor-paper__value">{{getInfoObj.dutyNum}}</span>
        </li>
        <li class="user-corpor-paper__item">
          <span class="user-corpor-paper__label">企业认证授权书</span>
          <span @click="setDialogInfo({title: '企业认证授权书', url: getInfoObj.authorization})" class="user-corpor-paper__value user-corpor-paper__btn">点击查看</span>
        </li>
        <li class="user-corpor-paper__item">
          <span class="user-corpor-paper__label">开户许可证</span>
          <span @click="setDialogInfo({title: '开户许可证', url: getInfoObj.licence})" class="user-corpor-paper__value user-corpor-paper__btn">点击查看</span>
        </li>
        <li class="user-corpor-paper__item">
          <span class="user-corpor-paper__label">营业执照</span>
          <span @click="setDialogInfo({title: '营业执照', url: getInfoObj.permit})" class="user-corpor-paper__value user-corpor-paper__btn">点击查看</span>
        </li>
      </ul>
    </section>

    <el-dialog
      :visible.sync="dialogInfo.isShowDialog"
      :title="dialogInfo.title">
      <div class="my-dialog__view">
        <img :src="dialogInfo.url" alt="logo" class="my-dialog__view--img">
      </div>
    </el-dialog>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MyCrumbs from '@/components/schema/crumbs'
import {
  _getInfoList
} from '@/utils/mixin'

const  STATE = ['待审核', '审核未通过', '审核已通过']

export default {
  props: {
    crumbs: {
      type: [Boolean, String],
      default: true
    },
  },
  name: '',
  components: {
    MyCrumbs,
  },
  computed: {
    ...mapState({
      info: state => state.User.userManageInfo
    }),
    getAttrs(){
      return this.$attrs
    },
    getInfoObj(){
      return this.crumbs ? this.info : this.getAttrs
    }
  },
  filters: {},
  data(){
    return {
      STATE,
      dialogInfo: {
        isShowDialog: false,
        title: '提示',
        url: ''
      }
    }
  },
  methods: {
    ...mapActions(['GetCorporationDetailById']),
    ...mapActions({
      updateCorporationStatusById: 'GetCorporationDetailById'
    }),

    setDialogInfo(argus){
      let isShowDialog = argus.url ? true : false
      this.dialogInfo = {...argus, isShowDialog}
    },
    handleClickSubmit(status){
      let {query: {id }} = this.$route
      this.updateCorporationStatusById({id, status})
      setTimeout(() => {
        this.GetCorporationDetailById({id})
      }, 1000)
    }
  },
  created(){
    let {query: {id }} = this.$route
    this.crumbs && this.GetCorporationDetailById({id})
  },
  mixins:[_getInfoList]
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
@import '@/assets/style/function.scss';
@import '@/assets/style/color.scss';
.user-corpor-wrapper {
  @include scroll-bar;
  height: inherit;
  background: #fff;
  overflow: hidden;

  .user-corpor-paper {
    height: calc(100% - 50px);
    padding: 20px;

    &__list {
        width: inherit;
        height: 100%;
        padding: 20px 40px;
        border: 1px solid color(gray);
    }

    &__item {
      height: 40px;
      line-height: 40px;
      color: #333;

      .user-corpor-paper__label {
        display: inline-block;
        width: 140px;
        margin-right: 10px;
        text-align: right;
        &:after{
          content: ' : ';
        }
      }
      .user-corpor-paper__value {
        color: $t-999;
      }
      .user-corpor-paper__btn{
        @extend .user-corpor-paper__value;
        color: $base;
        user-select: none;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .my-dialog__view {
    @include flex($dir: row, $align: center, $justify: center);
    .my-dialog__view--img {
      width: 300px;
    }
  }
}
</style>
