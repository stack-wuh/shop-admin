<template>
  <section class="wrapper">
    <my-table params="banner" :list="list" border></my-table>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MyTable from '@/components/schema/table'

export default {
  props: {},
  name: '',
  components: {
    MyTable,
  },
  computed: {},
  filters: {},
  data(){
    return {
      list: [],
    }
  },
  methods: {
    ...mapActions(['GetWebBannerOrAd']),
    fetchData(){
      this.GetWebBannerOrAd(1).then(res => {
        this.list = res.data
      })
    }
  },
  created(){
    this.fetchData()
  },
  mixins:[]
}
</script>
<style lang="scss" scoped>
</style>
