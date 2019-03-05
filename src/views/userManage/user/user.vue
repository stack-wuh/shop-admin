<template>
  <section class="user-comm-wrapper">
    <ul>
      <li class="user-comm-item">
        <span class="user-comm-item__label">头像</span>
        <img :src="$attrs.headpic" alt="avatar" class="user-comm-item__avatar">
      </li>
      <li class="user-comm-item">
        <span class="user-comm-item__label">联系电话</span>
        <span class="user-comm-item__value">{{$attrs.phone}}</span>
        <span class="user-comm-item__tips">已认证</span>
      </li>
      <li class="user-comm-item">
        <span class="user-comm-item__label">银行卡号</span>
        <span class="user-comm-item__value">{{$attrs.bankNo}}</span>
      </li>
      <li class="user-comm-item">
        <span class="user-comm-item__label">姓名</span>
        <span v-if="$attrs.status !== 0" class="user-comm-item__value">{{$attrs.realName}}</span>
        <span v-else class="user-comm-item__value">--</span>
        <span class="user-comm-item__tips">{{STATE[$attrs.status]}}</span>
      </li>
      <li class="user-comm-item">
        <span class="user-comm-item__label">身份证号</span>
        <span v-if="$attrs.status !== 0" class="user-comm-item__value">{{$attrs.idno}}</span>
        <span v-else class="user-comm-item__value">--</span>
      </li>
      <li class="user-comm-item">
        <span class="user-comm-item__label">身份证正面</span>
        <img v-if="$attrs.status !== 0" :src="$attrs.idpicUp" alt="logo" class="user-comm-item__card">
        <span v-else class="user-comm-item__value">--</span>
      </li>
      <li class="user-comm-item">
        <span class="user-comm-item__label">身份证反面</span>
        <img v-if="$attrs.status !== 0" :src="$attrs.idpicDown" alt="logo" class="user-comm-item__card">
        <span v-else class="user-comm-item__value">--</span>
      </li>
    </ul>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
const STATE = ['未认证', '待审核', '审核未通过', '审核已通过']

export default {
  props: {},
  name: '',
  components: {},
  computed: {},
  filters: {},
  data(){
    return {
      STATE,
    }
  },
  methods: {},
  created(){},
  mixins:[]
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
@import '@/assets/style/color.scss';
.user-comm-wrapper {
  padding: 20px;
  .user-comm-item__avatar{
    width: 120px;
  }
  .user-comm-item {
    @include flex($dir: row);
    margin-bottom: 15px;
    &__label {
      display: inline-block;
      width: 100px;
      margin-right: 10px;
      text-align: right;
      &:after {
        content: ' : ';
      }
    }
    &__tips {
      margin-left: 10px;
      margin-top: 2px;
      color: $base;
      font-size: 12px;
    }
  }
}
</style>
