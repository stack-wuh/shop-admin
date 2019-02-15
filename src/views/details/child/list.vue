<template>
  <section class="list-wrapper">
    <p v-if="title" class="list-title">{{title}}</p>
    <ul class="list-box">
      <li v-for="(item, index) in list" :key="index" class="list-item">
        <span class="list-item__label">{{item.label}}</span>
        <span v-if="item.type === 'default' || item.type === undefined" class="list-item__value">{{item.value || '暂无信息'}}</span>
        <div class="list-item__right" :class="item.class">
          <slot v-if="item.type === 'slot'" name="right"></slot>
          <component :is="item.slot" v-if="item.name == 'right'" v-bind="{name: 'shadow'}"></component>
        </div>
      </li>
      <li v-for="(item, index) in list" :key="index + 'i'"  >
        <slot name="self"></slot>
        <component :is="item.slot" v-if="item.name == 'self'"></component>
      </li>
    </ul>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MyTravisInfo from '@/views/details/child/travis'
import MyBuyer from '@/views/details/child/buyer'
import MyMiniTable from '@/views/details/child/mini.table'
import MyPaper from '@/views/details/child/paper'
import MyMoney from '@/views/details/child/money'

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
  name: 'detailList',
  components: {
    MyTravisInfo,
    MyBuyer,
    MyMiniTable,
    MyPaper,
    MyMoney,
  },
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
@import '@/assets/style/mixin.scss';
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
      @include flex($dir: row, $align: center);
      min-height: 30px;
      margin-bottom: 15px;
    }
    .list-item__label {
      width: 70px;
      margin-right: 10px;
      text-align: right;
      &:after{
        content: ' :   ';
      }
    }
    .list-item__value{
      color: #999;
    }
    .list-item__right{
      display: inline-block;
    }
  }
}
</style>
