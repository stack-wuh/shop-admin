<template>
  <section class="wrapper">
    <my-table params="banner" :list="[{},{}]" :border="false"></my-table>
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
    return {}
  },
  methods: {},
  created(){},
  mixins:[]
}
</script>
<style lang="scss" scoped>
</style>
