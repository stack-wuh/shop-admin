<template>
  <section class="row-table-wrapper">
    <table cellspacing="0">
      <tr v-for="(item, index) in list" :key="index">
        <td class="td--align-right">{{item.name}}: </td>
        <td class="td--align-left td--text-gray">{{item.info}}</td>
      </tr>
    </table>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  props: {},
  name: '',
  components: {},
  computed: {
    list(){
      return this.$attrs.productParameter
    }
  },
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
.row-table-wrapper {
  padding: 10px;
  margin-bottom:20px;
  table {
    width: 100%;
    border: 1px solid $b-base;
  }
  tr, td {
    padding: 5px 5px;
    border: 1px solid $b-base;
  }

  .td {
    align: center;
    &--align-right {
      width: 15%;
      padding-right: 15px;
      text-align: right;
    }
    &--text-gray {
      color: $t-999;
    }
  }
}
</style>
