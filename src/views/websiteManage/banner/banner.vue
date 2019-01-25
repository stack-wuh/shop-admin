<template>
  <section class="wrapper banner">
    <my-schema @panel-click="panelClick" :panelList="panelList">
      <component :is="['Advertising', 'Banner'][currIndex]"></component>
    </my-schema>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MySchema from '@/components/schema/schema'

import Banner from './child/banner'
import Advertising from './child/advertising'
const panelList = [
  {
    name: '广告位管理'
  },
  {
    name: 'banner管理'
  }
]
export default {
  props: {},
  name: '',
  components: {
    MySchema,
    Banner,
    Advertising,
  },
  computed: {},
  filters: {},
  data(){
    return {
      panelList,
      currIndex: 0,
    }
  },
  methods: {
    panelClick(e){
      this.currIndex = e.index
    }
  },
  created(){},
  mixins:[]
}
</script>
<style lang="scss" scoped>
.banner{
  width: inherit;
  height: inherit;
}
</style>
