<template>
  <section class="wrapper">
    <my-schema :panelList="PanelList">
      <my-table  :list="[{}, {}]" :border="false" ></my-table>
    </my-schema>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MySchema from '@/components/schema/schema'
import MyTable from '@/components/schema/table'

const PanelList = [
  {
    name: '买家服务'
  },
  {
    name: '卖家服务'
  },
  {
    name: '售后服务'
  },
  {
    name: '购物指南'
  },
  {
    name: '金融服务'
  },
  {
    name: '关于我们'
  }
]

export default {
  props: {},
  name: '',
  components: {
    MySchema,
    MyTable,
  },
  computed: {},
  filters: {},
  data(){
    return {
      PanelList,
      isRefresh: true,
    }
  },
  methods: {},
  created(){},
  mixins:[]
}
</script>
<style lang="scss" scoped>
.wrapper{
  width: inherit;
  height: inherit;
}
</style>
