<template>
  <section class="art-wrapper" :key='"111ads"'>
    <article v-if="type == 'paper' && info.content" class="art-paper" v-html="info.content"></article>
    <article v-if="type == 'paper' && !info.content" class="art-paper">
      <span>暂无详情</span>
    </article>
    <section v-else id="editor"></section>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  props: {
    type: {
        type: String,
        default: 'paper'
    },
    info: {
      type: Object,
      required: true,
    }
  },
  name: 'paper',
  components: {},
  computed: {
    changeType(){
      return
    }
  },
  filters: {},
  data(){
    return {}
  },
  watch: {

  },
  methods: {
    editorInit(){
      if(this.type == 'editor'){
        let E = window.wangEditor
        let editor = new E('#editor')
        editor.customConfig = {
          uploadImgServer: window.uploadPath,
          uploadImgMaxSize: 3 * 1024 * 1024,
          uploadImgMaxLength: 5,
          uploadFileName: 'file',
          uploadImgHooks: {
            customInsert: function (insertImg, result, editor) {
              let {url} = result
              insertImg(url)
            }
          },
        }
        editor.customConfig.onchange = e => {
          console.log(e)
        }
        editor.create()
        editor.txt.html('asd')
      }
    }
  },
  mounted(){
      this.editorInit()
      console.log('is init')
  },
  mixins:[]
}
</script>
<style lang="scss" scoped>
.art-wrapper{
  width: inherit;
  font-size: 14px;
  color: #666;
}
</style>
