<template>
  <section class="user-corpor-wrapper">
    <my-crumbs :list="infoObj.crumbsList">
      <section slot="right">
        <el-button type="success">通过</el-button>
        <el-button type="danger">不通过</el-button>
      </section>
    </my-crumbs>

    <section class="user-corpor-paper">
      <ul class="user-corpor-paper__list">
        <li class="user-corpor-paper__item">
          <span class="user-corpor-paper__label">提交时间</span>
          <span class="user-corpor-paper__value">2018-02-12 10:25:00</span>
        </li>
        <li class="user-corpor-paper__item">
          <span class="user-corpor-paper__label">审核状态</span>
          <span class="user-corpor-paper__value">待审核</span>
        </li>
        <li class="user-corpor-paper__item">
          <span class="user-corpor-paper__label">公司名称</span>
          <span class="user-corpor-paper__value">武汉市怀信广志信息科技有限公司</span>
        </li>
        <li class="user-corpor-paper__item">
          <span class="user-corpor-paper__label">公司电话</span>
          <span class="user-corpor-paper__value">123123123123</span>
        </li>
        <li class="user-corpor-paper__item">
          <span class="user-corpor-paper__label">公司法人</span>
          <span class="user-corpor-paper__value">李磊</span>
        </li>
        <li class="user-corpor-paper__item">
          <span class="user-corpor-paper__label">手机号</span>
          <span class="user-corpor-paper__value">2018-02-12 10:25:00</span>
        </li>
        <li class="user-corpor-paper__item">
          <span class="user-corpor-paper__label">税号</span>
          <span class="user-corpor-paper__value">2018-02-12 10:25:00</span>
        </li>
        <li class="user-corpor-paper__item">
          <span class="user-corpor-paper__label">企业认证授权书</span>
          <span class="user-corpor-paper__value user-corpor-paper__btn">点击查看</span>
        </li>
        <li class="user-corpor-paper__item">
          <span class="user-corpor-paper__label">开户许可证</span>
          <span class="user-corpor-paper__value user-corpor-paper__btn">点击查看</span>
        </li>
        <li class="user-corpor-paper__item">
          <span class="user-corpor-paper__label">营业执照</span>
          <span class="user-corpor-paper__value user-corpor-paper__btn">点击查看</span>
        </li>
      </ul>
    </section>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MyCrumbs from '@/components/schema/crumbs'
import {
  _getInfoList
} from '@/utils/mixin'

export default {
  props: {},
  name: '',
  components: {
    MyCrumbs,
  },
  computed: {},
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
}
</style>
