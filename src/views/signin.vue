<template>
  <section class="wrapper signin-wrapper">
    <section class="form-area">
      <el-form>
          <el-form-item>
              <p class="form__title">登录</p>
          </el-form-item>
          <el-form-item>
            <el-input class="my-form__item" placeholder="请编辑账号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input class="my-form__item" placeholder="请编辑密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="$push({path: '/', deply: 1000})" type="primary" class="my-form__item">
              <span class="f16">登录</span>
            </el-button>
          </el-form-item>
      </el-form>
    </section>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import {
  _router
} from '@/utils/mixin'
export default {
  props: {},
  name: '',
  components: {},
  computed: {},
  filters: {},
  data(){
    return {}
  },
  methods: {},
  created(){},
  mixins:[_router]
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
  .signin-wrapper{
    @include flex($justify: center, $align: center);
    width:100vw;
    height: 100vh;
    overflow: hidden;
    background-image: url('../assets/imgs/bg_signin.jpg');
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;

    .form-area{
      width: 500px;
      height: 350px;
      border-radius: 4px;
      background: linear-gradient(to bottom, #5F7997, #737B93);

      .form__title{
        margin-top: 40px;
        margin-bottom: 10px;
        text-align: center;
        font-size: 18px;
        color: #fff;
        line-height: 20px;
        white-space: pre-line;
      }

      .my-form__item{
        width: 70%;
        height: 50px;
        margin: 0 15%;

        .el-input--small, .el-input__inner{
          height: 40px;
        }
      }
    }
  }
</style>
