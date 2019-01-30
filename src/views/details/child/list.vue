<template>
  <section class="list-wrapper">
    <p v-if="title" class="list-title">{{title}}</p>
    <ul class="list-box">
      <li v-for="(item, index) in list" :key="index" class="list-item">
        <span class="list-item__label">{{item.label}}</span>
        <span class="list-item__value">{{item.value || '暂无信息'}}</span>
      </li>
      <li>
        <slot name="self"></slot>
      </li>
    </ul>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  props: {
    title: {
      type: [String, Object],
    },
    list: {
      type: Array,
      required: true,
    }
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
@import '@/assets/style/color.scss';
.list-wrapper{
  width: inherit;
  padding: 10px 20px;
  font-size: 14px;
  .list-title{
    padding-left: 18px;
    margin-bottom: 10px;
    border-left: 2px solid $base;
    font-size: 16px;
  }
  .list-box{
    margin-left: 20px;
    .list-item{
      min-height: 30px;
      margin-bottom: 15px;
    }
    .list-item__label {
      margin-right: 5px;
      &:after{
        content: ': ';
      }
    }
    .list-item__value{
      color: #999;
    }
  }
}
</style>
