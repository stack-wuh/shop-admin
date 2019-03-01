<template>
  <section class="buyer-wrapper">
    <div class="buyer-area">
      <img :src="$attrs[$attrs.item.props.avatar]" alt="av" class="buyer-avatar">
      <span class="buyer-name">{{$attrs[$attrs.item.props.name]}}</span>
      <span class="buyer-phone">{{$attrs[$attrs.item.props.phone]}}</span>
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
