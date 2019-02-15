<template>
  <section class="wrapper">
    <my-schema :panelList="[{name: '协议管理'}]" >
      <el-button @click="handleClick" slot="right" type="primary">{{type == 'paper' ? '编辑' : '保存'}}</el-button>
      <my-paper :type="type"></my-paper>
    </my-schema>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MySchema from '@/components/schema/schema'
import MyPaper from '@/views/details/child/paper'

export default {
  props: {},
  name: '',
  components: {
    MySchema,
    MyPaper,
  },
  computed: {},
  filters: {},
  data(){
    return {
      type: 'paper'
    }
  },
  methods: {
    editorInit(){
      let E = window.wangEditor
      let editor = new E('#editor')
      editor.create()
    },
    handleClick(){
      this.type = this.type == 'paper' ? 'editor' : 'paper'
      this.type == 'editor' && setTimeout(this.editorInit, 200)
    }
  },
  created(){},
  mixins:[]
}
</script>
<style lang="scss" scoped>
.wrapper{
  width: inherit;
  height: inherit;

  .art{
    font-size: 14px;
    line-height: 1.4;
  }
}
</style>
