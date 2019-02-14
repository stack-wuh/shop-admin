<template>
  <section class="money-wrapper">
    <p class="money-area">
      <span class="money-currency">￥</span>
      <span class="money-number">20123</span>
    </p>
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
@import '@/assets/style/color.scss';
.money-wrapper {
  display: inline-block;
  width: 200px;
  .money-area{
    .money-currency {
      color: $t-999;
    }
    .money-number {
      color: $danger;
      font-size: 17px;
      font-weight: 700;
    }
  }
}
</style>
