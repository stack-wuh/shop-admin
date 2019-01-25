<template>
  <section class="wrapper header-wrapper">
    <div
      @click="handleClick({data, item, index, $route, $router})"
      v-for="(item, index) in data"
      :key="index"
      class="list-item"
      :class="[currIndex === index ? 'list-item__active' : 'list-item__default']">
    {{item.name}}</div>
    <span class="flex-empty"></span>
    <div><slot name="right" ></slot></div>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  props: {
    data: Array
  },
  name: '',
  components: {},
  computed: {
    routePath(){
      return this.$route.path
    }
  },
  filters: {},
  data(){
    return {
      currIndex: 0,
    }
  },
  methods: {
    handleClick(...argus){
      this.currIndex = argus[0].index
      this.$emit('click', argus[0])
    }
  },
  created(){},
  mixins:[]
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
@import '@/assets/style/color.scss';
  .header-wrapper{
    @include flex($dir: row, $align: center);
    height: 50px;
    padding: 20px 10px;
    border-bottom: 1px solid $b-base;

    .list-item{
      height: 50px;
      padding: 0 20px;
      line-height: 50px;
      user-select: none;

      &:hover{
        cursor: pointer;
        border-bottom: 2px solid $base;
      }
    }
    .list-item__active{
      border-bottom: 2px solid $base;
    }
    .list-item__default{
      border-bottom: none;
    }

  }
</style>
