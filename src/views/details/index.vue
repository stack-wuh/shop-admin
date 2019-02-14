<template>
  <section class="wrapper detail-wrapper">
    <my-crumbs :list="infoObj.crumbsList" ></my-crumbs>
    <my-info-list
      v-for="(item, index) in infoObj.list"
      :key="index"
      :title="item.title"
      :list="item.list">
    </my-info-list>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MyCrumbs from '@/components/schema/crumbs'
import MyInfoList from './child/list'
import {
  _getInfoList
} from '@/utils/mixin'


export default {
  props: {},
  name: '',
  components: {
    MyCrumbs,
    MyInfoList,
  },
  computed: {},
  filters: {},
  data(){
    return {
    }
  },
  methods: {},
  created(){},
  mixins:[_getInfoList]
}
</script>
<style lang="scss" scoped>
.detail-wrapper{
  width: inherit;
  height: inherit;
  background-color: #fff;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    width: 4px;
    height: 3px;
  }
  &::-webkit-scrollbar-thumn{
    box-shadow: 0 0 inset 2px #000;
  }
}
</style>
