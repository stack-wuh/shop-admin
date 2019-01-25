<template>
  <section class="wrapper">
    <my-schema :panelList="panelList">
      <el-form label-width="100px">
        <el-form-item label="商家信息管理">
          <el-switch
            active-text="开启"
            inactive-text="关闭"
            :active-value="1"
            :inactive-value="0"
            v-model="isOpen"></el-switch>
        </el-form-item>
        <el-form-item label="管理说明">
          <el-input type="textarea" rows="3"></el-input>
        </el-form-item>
      </el-form>
    </my-schema>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MySchema from '@/components/schema/schema'

const panelList = [
  {
    name: '商家信息管理'
  }
]

export default {
  props: {},
  name: '',
  components: {
    MySchema,
  },
  computed: {},
  filters: {},
  data(){
    return {
      panelList,
      isOpen: 0,
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
