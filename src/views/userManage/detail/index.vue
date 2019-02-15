<template>
  <section class="user-corpor-wrapper">
    <p class="error speci-error">this is error</p>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
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
  mixins:[]
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
@import '@/assets/style/function.scss';
.user-corpor-wrapper {
  @include scroll-bar;
  height: 1000px;

  .error {
    border: 1px solid #f00;
    // background: #fdd;
    background: color(blue, dark, .1);
  }
  a:hover {
    text-decoration: underline;
  }
  .speci-error {
    @extend .error, a:hover;
    border-width: 3px;
  }
}
</style>
