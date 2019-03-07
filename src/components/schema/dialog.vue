<template>
  <section class="my-dialog-page">
    <el-dialog :visible.sync="visibleDialog" :title="title" :before-close="CLEAR_DIALOG_INFO">
      <el-form
        :model="formObj.form"
        ref="myDialogForm"
        label-width='120px'>
        <el-form-item
          v-for="(item, index) in formObj.list"
          :key="'d' + index"
          :label="item.label + ' : '"
          :rules="item.rules"
          :prop="item.field">
          <template v-if="item.type === 'default'">
            <span>{{formObj.form[item.field]}}</span>
          </template>
          <template v-if="item.type === 'textarea'">
            <el-input class="my-input__220" type="textarea" :rows="item.rows" v-model="formObj.form[item.field]" :placeholder="'请编辑' + item.label" />
          </template>
          <template v-if="item.type === 'input'">
            <el-input class="my-input__220" :disabled="inputCanEditor(item)"  v-model="formObj.form[item.field]" :placeholder="'请编辑' + item.label" />
          </template>
          <template v-if="item.type === 'password'">
            <el-input class="my-input__220" type="password" v-model="formObj.form[item.field]" :placeholder="'请编辑' + item.label" />
          </template>
          <template v-if="item.type === 'switch'">
            <el-switch
              :value="formObj.form[item.field]"
              :active-text="item.activeText"
              :inactive-text="item.inactiveText"
              :active-value="item.activeValue"
              :inactive-value="item.inactiveValue"
            ></el-switch>
          </template>
          <template v-if="item.type === 'uploadImg'">
            <el-upload
              :action="uploadPath"
              class="avatar-uploader"
              :show-file-list="false"
              name="multipartFile"
              :data = "{
                id: formObj.form.id || 1
              }"
              :on-success="e => {return hanleUploadSuccess(e, item)}"
              >
                <img v-if="formObj.form[item.field]" :src="formObj.form[item.field]" style="width: 175px; height: 175px;" alt="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon" ></i>
            </el-upload>
          </template>
        </el-form-item>
      </el-form>
      <div class="" slot="footer">
        <el-button type="danger" @click="SET_DIALOG_INFO({isShowDialog: false, type: 'post'})">取消</el-button>
        <el-button type="primary" @click="handleClickSubmit">确定</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import Form from '@/utils/form'

export default {
  props: {},
  name: '',
  components: {},
  computed: {
    ...mapState({
      visibleDialog: state => state.dialogInfo.isShowDialog,
      title: state => state.dialogInfo.title,
      temp_form: state => state.dialogInfo.form,
      schemaHeaderCurrent: state => state.schemaHeaderCurrent,
      type: state => state.dialogInfo.type
    }),
    changePath(){
      let {l, f, c} = this.$route.query
      return c || f || l
    }
  },
  filters: {},
  data(){
    return {
      uploadPath: window.uploadPath,
      Form,
      form: {},
      formObj: {},
    }
  },
  watch: {
    temp_form(){
      this.formObj = {
        ...this.formObj,
        form: this.temp_form
      }
    },
    changePath(){
      this.getFormList()
    }
  },
  methods: {
    ...mapMutations(['SET_DIALOG_INFO', 'CLEAR_DIALOG_INFO']),
    ...mapActions([
      'UpdateUserByParams',
      'ClearDialogInfoAsync',
      'PostNoticeListByParams',
      'UpdateClassifyByParams',
      'UpdateNewsListByParams',
      'UpdateScoerInfoByParams'
    ]),
    inputCanEditor(item){
      const _fields = ['name', 'realName', 'userName']
      if(_fields.includes(item.field) && this.type === 'update')
      return true
    },

    getFormList(){
      let {query: {l, f, c}} = this.$route
      let _obj = Form.find(k => (k.c ? (k.l === l && k.f === f) : (k.l === l && k.f === f && k.c === c)))
      this.formObj = _obj || {}
    },

    hanleUploadSuccess(res, item){
      this.formObj.form[item.field] = res.data
    },
    /**
     * [handleClickSubmit 表单的提交事件]
     * @method handleClickSubmit
     * @return {[type]}          [description]
     */
    handleClickSubmit(){
      this.$refs.myDialogForm.validate(valid => {
        if(valid){
          let form = this.formObj.form
          let {query: {l, f, c}} = this.$route
          let actions = {
            '账号管理_账号管理': {
              action: 'UpdateUserByParams',
              params: {}
            },
            '网站管理_公告管理': {
              action: 'PostNoticeListByParams',
              params: {}
            },
            '网站管理_分类管理': {
              action: 'UpdateClassifyByParams',
              params: {}
            },
            '网站管理_图片管理': {
              action: '',
              params: {}
            },
            '网站管理_新闻中心': {
              action: 'UpdateNewsListByParams',
              params: {
                belongId: this.schemaHeaderCurrent.index
              }
            },
            '网站管理_积分管理': {
              action: 'UpdateScoerInfoByParams',
              params: {}
            }
          }
          let action = c ? actions[`${l}_${f}_${c}`] : actions[`${l}_${f}`]
          this[action.action].call(this, {...form, ...action.params})
        }else {
          _g._toast({
            type: 'error',
            msg: '请重新编辑错误或必填项目',
            duration: 3
          })
        }
      })
    },
  },
  created(){
    this.getFormList()
  },
  mixins:[]
}
</script>
<style lang="scss" scoped>
.my-dialog-page {
  .my-input__220 {
    width: 90%;
  }

  .avatar-uploader {
  width: 178px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
}
</style>
