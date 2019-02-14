<template>
  <section class="buyer-wrapper">
    <div class="buyer-area">
      <img :src="AvatarImg" alt="头像" class="buyer-avatar">
      <span class="buyer-name">买家名称</span>
      <span class="buyer-phone">18827372123</span>
    </div>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import AvatarImg  from '@/assets/imgs/avatar.jpg'
export default {
  props: {},
  name: 'buyer',
  components: {},
  computed: {},
  filters: {},
  data(){
    return {
      AvatarImg,
    }
  },
  methods: {},
  created(){},
  mixins:[]
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/color.scss';
@import '@/assets/style/mixin.scss';
.buyer-wrapper{
  .buyer-area{
    @include flex($dir: row, $align: center);
    color: $base;
    font-size: 16px;
    .buyer-avatar {
      width: 30px;
      height: 30px;
    }
    .buyer-name, .buyer-avatar{
      margin-right: 10px;
    }
  }
}
</style>
