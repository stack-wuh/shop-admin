<template>
  <section class="art-wrapper">
    <article v-if="type == 'paper'" class="art-paper">
      this is paper
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
    }
  },
  name: 'paper',
  components: {},
  computed: {},
  filters: {},
  data(){
    return {}
  },
  methods: {
    editorInit(){
      let E = window.wangEditor
      let editor = new E('#editor')
      editor.create()
    }
  },
  created(){
    this.type !== 'paper' && setTimeout(this.editorInit, 1000)
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
