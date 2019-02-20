<template>
  <section class="wrapper">
    <section class="card-item">
      <p class="card-item__tips">
        <span>{{data.name}}</span>
      </p>
      <p class="card-item__tips">
        <strong :class="[cardClassName]" class="card-item__number ">{{$attrs[data.value.trim()]}}</strong>
      </p>
      <p class="card-item__tips card-item__bottom">
        <span>{{data.tips}}: </span>
        <span :class="[cardClassName]">{{$attrs[data.upgrade.trim()]}}</span>
      </p>
    </section>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  props: {
    cardClassName: {
      type: String,
      default: 'card-item__base'
    },
    data: {
      type: [Object, Array],
      default: [],
      required: true,
    }
  },
  name: '',
  components: {},
  computed: {},
  filters: {
    formatMoney(val){
      return val
    }
  },
  data(){
    return {}
  },
  methods: {},
  created(){}
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
@import '@/assets/style/color.scss';
.wrapper{
  .card-item{
    @include flex($justify: space-between, $align: stretch);
    min-width: 240px;
    min-height: 180px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0  4px #ccc;
  }
  .card-item__tips{
    padding: 10px 20px;
    color: #999;

    .card-item__number{
      font-size: 22px;
    }
  }
  .card-item__bottom{
    border-top: 1px solid #eee;
  }
  .card-item__base{
    color: $base;
  }
  .card-item__warning{
    color: $warning;
  }
  .card-item__danger{
    color: $danger;
  }
  .card-item__success{
    color: $success;
  }
}
</style>
