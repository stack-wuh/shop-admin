<template>
  <section class="wrapper">
    <section class="img-list">
      <section class="img-item" v-for="(item, index) in forms" :key="index">
        <span class="img-item__label">{{item.label}}</span>
        <div class="img-item__right">
          <img :src="item.img" alt="img" class="margin-bm__15">
          <el-upload
            :limit="1"
            :action="uploadPath"
            name="file"
            :on-success="(e) => {return handleSuccessImg(e, item)}"
            >
            <el-button type="primary" size="small">点击上传</el-button>
          </el-upload>
        </div>
      </section>
    </section>
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
    return {
      uploadPath: window.uploadPath,
      forms: [
        {
          label: '顶部导航广告位',
          field: '',
          img: '',
        },
        {
          label: '底部导航广告位A',
          field: '',
          img: '',
        },
        {
          label: '底部导航广告位B',
          field: '',
          img: '',
        }
      ]
    }
  },
  methods: {
    ...mapActions(['GetWebBannerOrAd']),
    handleSuccessImg(argus){

    },

    /**
     * [fetchData fetch]
     * @method fetchData
     * @return {[type]}  [description]
     */
    fetchData(){
      this.GetWebBannerOrAd(0).then(res => {
        res.data.map((k, i) => {
          this.forms[i].img = k.pic
        })
      })
    }
  },
  created(){
    this.fetchData()
  },
  mixins:[]
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
.wrapper{
  padding: 20px;
  .img-list{
    @include flex($align: strecth);
    .img-item{
      @include flex($dir: row, $align: flex-start);
      margin-bottom: 20px;
      .img-item__label{
        margin-right: 20px;
      }
      .img-item__right{
        @include flex;
      }
    }
  }
}
</style>
