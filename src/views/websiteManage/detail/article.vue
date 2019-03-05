<template>
  <section class="web-detail__wrapper">
    <my-crumbs></my-crumbs>
    <section class="web-art__area">
      <div class="web-art__line">
        <span class="web-art__label">标题</span>
        <span>{{info.name}}</span>
      </div>
      <div class="web-art__line">
        <span class="web-art__label">详情</span>
        <span>{{info.content}}</span>
      </div>
    </section>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MyCrumbs from '@/components/schema/crumbs';


export default {
  props: {},
  name: '',
  components: {
    MyCrumbs
  },
  computed: {},
  filters: {},
  data(){
    return {
      info: {}
    }
  },
  methods: {
    ...mapActions(['GetNewsChildInfoById'])
  },
  created(){
    this.GetNewsChildInfoById(this.$route.query.id).then(res => {
        this.info = res.data
    })
  },
  mixins:[]
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
