<template>
  <section class="wrapper schema-wrapper">
    <my-schema-header v-if="isShowHeader" @click="handleClick" :data="panelList">
        <div slot="right"><slot name="right"></slot></div>
    </my-schema-header>
    <my-search @change="handleChange" v-if="search" :data="searchList"></my-search>
    <section class="schema-default">
      <slot></slot>
    </section>
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
    },
    isShowHeader: {
      type: Boolean,
      default: true
    }
  },
  name: 'schema',
  components: {
    MySchemaHeader,
    MySearch,
  },
  computed: {
    routePath(){
      return this.$route.path
    }
  },
  watch: {
    routePath(){
      this.SET_SCHEMA_HEADER_CURRENT({index: 0})
    }
  },
  filters: {},
  data(){
    return {}
  },
  methods: {
    ...mapMutations(['SET_SCHEMA_HEADER_CURRENT']),
    handleClick(e){
      this.$emit('panel-click', e)
    },
    handleChange(e){
      console.log(e)
    }
  },
  created(){
    this.$bus.$on('confirm', (e) => {

    })
  },
  mixins:[]
}
</script>
<style lang="scss" scoped>
.schema-wrapper{
  width: inherit;
  height: inherit;
  overflow-y: scroll;
  background-color: #fff;
  &::-webkit-scrollbar{
    width: 4px;
    height: 3px;
  }
  &::-webkit-scrollbar-thumn{
    box-shadow: 0 0 inset 2px #000;
  }
  .schema-default{
    padding: 20px;
  }
}
</style>
