<template>
  <section class="wrapper">
      <section class="img-list">
        <section class="img-item" v-for="(item, index) in list" :key="index">
          <span class="img-item__label">{{item.adName}}</span>
          <div class="img-item__right">
            <img :src="item.pic" alt="img" class="margin-bm__15 img-item__right--avatar">
            <el-upload
              :limit="1"
              :action="uploadPath"
              name="multipartFile"
              class="avatar-uploader"
              :show-file-list="false"
              :data = "{
                id: item.id
              }"
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
import MyTable from '@/components/schema/table'

export default {
  props: {},
  name: '',
  components: {
    MyTable,
  },
  computed: {},
  filters: {},
  data(){
    return {
      list: [],
      uploadPath: window.uploadPath
    }
  },
  methods: {
    ...mapActions(['GetWebBannerOrAd']),
    handleSuccessImg(res, item){
      item.pic = res.data
    },

    fetchData(){
      this.GetWebBannerOrAd(1).then(res => {
        this.list = res.data
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

        &--avatar {
            width: 300px;
        }
      }
    }
  }
}
</style>
