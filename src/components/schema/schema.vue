<template>
  <section class="wrapper schema-wrapper">
    <my-schema-header @click="handleClick" :data="panelList"></my-schema-header>
    <my-search @change="handleChange" v-if="search" :data="searchList"></my-search>

    <slot></slot>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MySchemaHeader from './header'
import MySearch from './search'
export default {
  props: {
    panelList: {
      type: Array,
      required: true
    },
    search: {
      type: Boolean,
      default: false,
    },
    searchList: {
      type: Array,
    }
  },
  name: '',
  components: {
    MySchemaHeader,
    MySearch,
  },
  computed: {},
  filters: {},
  data(){
    return {}
  },
  methods: {
    handleClick(e){
      console.log(e)
    },
    handleChange(e){
      console.log(e)
    }
  },
  created(){
    this.$bus.$on('confirm', (e) => {
      console.log(e)
    })
  },
  mixins:[]
}
</script>
<style lang="scss" scoped>
.schema-wrapper{
  width: inherit;
  height: inherit;
  background-color: #fff;
}
</style>
