<template>
  <section class="web-detail__wrapper">
    <my-crumbs :list="infoObj.crumbsList" >
      <el-button slot="right" type="success" @click="handleBtnClick" >{{type === 'paper' ? '修改' : '保存'}}</el-button>
    </my-crumbs>

    <section class="web-art__area">
      <section v-if="type == 'paper'">
        <div class="web-art__line">
          <span class="web-art__label">标题</span>
          <span>买家服务</span>
        </div>
        <div class="web-art__line">
          <span class="web-art__label">详情</span>
          <article class="web-art__paper">
            党和国家机关通用公文的种类国务院办公厅曾发布的《国家行政机关公文处理办法》，经过多年的实践，修订后的《办法》从1994年1月1日起施行。把公文种类调整为十二类十三种，删去“指令”、“决议”、“布告”三个文种，将“议案”作为一个新文种列入主要公文种类。即：命令（令），议案，决定，指示，公告，通告，通知，通报，报告，请示，批复，函，会议纪要。此外，中共中央办公厅于1989年4月25日发布的《中国共产党各级领导机关文件处理条例（试行）》中，正式文件的种类里还列有公报、条例、规定三个文种。这样，现在常用的公文种类总共有十六种。

       在选择词语的过程中应注意： 认真辨析词语的确切含义，使词语的意义符合客观实际；注意分辨词语的感情色彩，以正确表达作者的立场观点；注意词语声音和语调对语义的影响，以提高表达效果；注意词语间的正确搭配，遵循语言法则；注意公文具体使用场合对词语风格的要求，维护公文的严肃性及强制执行性；注意针对公文具体收受对象的特点选词，以“有的放矢”便于理解和执行；注意根据公文中所涉及的人和事物的特殊性质选词，以获得更加鲜明直接的表达效果；注意根据上下文的需要选词，以维护公文的完整有效性；注意根据文种的不同特点选词，以保证语言得体而有力；注意词语的规范性，以提高公文沟通的效果，扩展沟通的范围。
          </article>
        </div>
      </section>
      <section v-else>
        <div class="web-art__line flex-align__center">
          <span class="web-art__label">标题</span>
          <el-input placeholder="请编辑标题" class="my-input__220" />
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
      type: 'paper'
    }
  },
  methods: {
    handleBtnClick(){
      this.type = this.type == 'paper' ? 'editor' : 'paper'
      this.type !== 'paper' && this.editorInit()
    },
    editorInit(){
      let E = window.wangEditor
      let editor = new E('#editor')
      setTimeout(() => {
        editor.create()
      }, 200)
    }
  },
  created(){

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
