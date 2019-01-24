<template>
  <section class="wrapper header-wrapper">
    <span>logo</span>
    <span>欢迎登陆风水网管理后台</span>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  props: {},
  name: '',
  components: {},
  computed: {},
  data(){
    return {}
  },
  methods: {},
  created(){}
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/color.scss';
@import '@/assets/style/mixin.scss';
.header-wrapper{
  @include flex($dir: row, $justify: space-between, $align: center);
  width: inherit;
  height: 60px;
  padding: 0 20px;
  background-color: $base;
  color: #fff;
  font-size: 20px;
}
</style>
