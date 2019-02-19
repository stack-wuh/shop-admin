<template>
  <section class="user-comm-wrapper">
    <ul>
      <li class="user-comm-item">
        <span class="user-comm-item__label">头像</span>
        <img src="" alt="avatar" class="user-comm-item__avatar">
      </li>
      <li class="user-comm-item">
        <span class="user-comm-item__label">联系电话</span>
        <span class="user-comm-item__value">123123123</span>
        <span class="user-comm-item__tips">已认证</span>
      </li>
      <li class="user-comm-item">
        <span class="user-comm-item__label">银行卡号</span>
        <span class="user-comm-item__value">123123123</span>
        <span class="user-comm-item__tips">已认证</span>
      </li>
      <li class="user-comm-item">
        <span class="user-comm-item__label">姓名</span>
        <span class="user-comm-item__value">asd</span>
        <span class="user-comm-item__tips">已认证</span>
      </li>
      <li class="user-comm-item">
        <span class="user-comm-item__label">身份证号</span>
        <span class="user-comm-item__value">123123123</span>
      </li>
      <li class="user-comm-item">
        <span class="user-comm-item__label">身份证正面</span>
        <img src="" alt="logo" class="user-comm-item__card">
      </li>
      <li class="user-comm-item">
        <span class="user-comm-item__label">身份证反面</span>
        <img src="" alt="logo" class="user-comm-item__card">
      </li>
    </ul>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  props: {

  },
  name: '',
  components: {},
  computed: {},
  filters: {},
  data(){
    return {}
  },
  methods: {},
  created(){},
  mixins:[]
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
.user-comm-wrapper {
  padding: 20px;

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
  }
}
</style>
