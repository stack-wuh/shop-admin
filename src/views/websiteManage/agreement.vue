<template>
  <section class="wrapper">
    <my-schema :panelList="[{name: '协议管理'}]" >
      <el-button @click="handleClick" slot="right" v-if="type == 'paper'" type="primary">编辑</el-button>
      <el-button @click="handleClickBtnSubmit" slot="right" v-if="type == 'editor'" type="primary">保存</el-button>
      <article id="editor" v-if="type == 'editor' && info.content"></article>
      <span v-if="type == 'paper' && info.content" v-html="info.content"></span>
      <span v-if="type == 'paper' && !info.content">暂无详情</span>
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
      type: 'paper',
      form: {
        content: ''
      },
      info: {
        content: ''
      }
    }
  },
  methods: {
    ...mapActions(['SetAgreementByContent', 'GetAgreementContent']),
    handleClickBtnSubmit(){
      this.SetAgreementByContent(this.form.content).then(res => {
        this.type = 'paper'
        this.form.content = ''
      })
    },
    editorInit(){
      let E = window.wangEditor
      let editor = new E('#editor')

      setTimeout(() => {
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
          onchange: e => {
            this.form.content = e
          }
        }
        editor.create()
        editor.txt.html(this.info.content)
      }, 200)
    },
    handleClick(){
      this.type = this.type == 'paper' ? 'editor' : 'paper'
      this.type == 'editor' && this.editorInit()
    }
  },
  created(){
    this.GetAgreementContent().then(res => {
      this.info = res.data
    })
  },
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
