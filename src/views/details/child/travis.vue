<template>
  <section style="height: 300px;" class="wrapper">
    <el-steps direction="vertical" :active="1">
      <el-step title="收货方">
        <ul slot="description">
          <li>收货人: </li>
          <li>收货地址: </li>
        </ul>
      </el-step>
      <el-step v-for="(item, index) in 3" :key="index" >
        <ul slot="description">
          <li>
            第一条
          </li>
          <li>
            第二条
          </li>
        </ul>
      </el-step>

      <el-step title="发货方">
        <ul slot="description">
          <li>发货人: </li>
          <li>发货地址: </li>
        </ul>
      </el-step>
    </el-steps>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  props: {},
  name: '',
  components: {},
  computed: {},
  filters: {},
  data(){
    return {}
  },
  methods: {},
  created(){
    console.log(this.$attrs)
  },
  mixins:[]
}
</script>
<style lang="scss" scoped>
</style>
