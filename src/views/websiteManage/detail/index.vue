<template>
  <section class="web-detail__wrapper">
    <my-crumbs :list="infoObj.crumbsList" >
      <el-button v-if="type == 'paper'" slot="right" type="success" @click="handleBtnClick">修改</el-button>
      <el-button v-if="type == 'editor'" slot="right" type="success" @click="handleBtnSubmit">保存</el-button>
    </my-crumbs>
    <section class="web-art__area">
      <section v-if="type == 'paper'">
        <div class="web-art__line">
          <span class="web-art__label">标题</span>
          <span>{{info.title}}</span>
        </div>
        <div class="web-art__line">
          <span class="web-art__label">详情</span>
          <article
            class="web-art__paper"
            v-html="info.content"
            v-if="info.content">
          </article>
          <span v-else >暂无详情</span>
        </div>
      </section>
      <section v-else>
        <div class="web-art__line flex-align__center">
          <span class="web-art__label">标题</span>
          <el-input v-model="form.title" placeholder="请编辑标题" class="my-input__220" />
        </div>
        <div class="web-art__line">
          <span class="web-art__label">详情</span>
          <article id="editor" style="width: 100%"></article>
        </div>
      </section>
    </section>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MyCrumbs from '@/components/schema/crumbs'

import {
  _getInfoList,
} from '@/utils/mixin'

export default {
  props: {},
  name: 'detail',
  components: {
    MyCrumbs,
  },
  computed: {},
  filters: {},
  data(){
    return {
      type: 'paper',
      info: {},
      form: {}
    }
  },
  methods: {
    ...mapActions(['GetBottomItemById', 'SetBottomItemInfoByParams']),
    handleBtnClick(){
      let {id, title, content} = this.info
      this.form = {
        id, title, content
      }
      this.type = this.type == 'paper' ? 'editor' : 'paper'
      setTimeout(() => {
        this.type !== 'paper' && this.editorInit()
        this.fetchData()
      }, 200)
    },
    handleBtnSubmit(){
      this.SetBottomItemInfoByParams(this.form).then(res => {
        setTimeout(() => {
          this.type = 'paper'
          this.form = {}
          this.fetchData()
        }, 500)
      })
    },
    /*
     * 初始化 富文本编辑器
     */
    editorInit(){
      let E = window.wangEditor
      let editor = new E('#editor')

      setTimeout(() => {
        editor.customConfig = {
          uploadImgServer: window.uploadPath,
          uploadImgMaxSize: 3 * 1024 * 1024,
          uploadImgMaxLength: 5,
          uploadFileName: 'multipartFile',
          uploadImgParams: {
            id: this.$route.query.id || 1
          },
          uploadImgHooks: {
            customInsert: function (insertImg, result, editor) {
              let {data: url} = result
              insertImg(url)
            }
          },
          customAlert: e => {
            _g._toast({
              type: 'error',
              msg: e,
              duration: 3
            })
          },
          onchange: e => {
            this.form.content = e
          }
        }
        editor.create()
        editor.txt.html(this.info.content)
      }, 200)
    },

    fetchData(){
      this.GetBottomItemById(this.$route.query.id).then(res => {
        this.info = res.data
      })
    }
  },
  created(){
    this.fetchData()
  },
  mixins:[_getInfoList]
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
.web-detail__wrapper{
  width: inherit;
  height: inherit;
  background-color: #fff;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    width: 4px;
    height: 3px;
  }
  &::-webkit-scrollbar-thumn{
    box-shadow: 0 0 inset 2px #000;
  }

  .web-art__area {
    padding: 20px;
    font-size: 15px;
    color: #666;
    .web-art__line {
      @include flex($dir: row);
      margin-bottom: 10px;
      .web-art__label {
        display: inline-block !important;
        min-width: 40px;
        margin-right: 15px;
        &:after{
          content: ' : ';
        }
      }
      .web-art__paper {
        display: inline-block;
        user-select: none;
      }
      .my-input__220 {
        width: 220px;
      }
    }
  }
}
</style>
