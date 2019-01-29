<template>
  <section class="wrapper search-wrapper">
    <section class="search-box">
      <section class="date-box">
        <template>
          <span @click="handleChoose({dateCurr: 0})" class="date-item" :class="currPicker === 0 ? 'date-item__active' : ''">今天</span>
          <span @click="handleChoose({dateCurr: 1})" class="date-item" :class="currPicker === 1 ? 'date-item__active' : ''">本周</span>
          <span @click="handleChoose({dateCurr: 2})" class="date-item" :class="currPicker === 2 ? 'date-item__active' : ''">本月</span>
          <span @click="handleChoose({dateCurr: 3})" class="date-item" :class="currPicker === 3 ? 'date-item__active' : ''">本年</span>
        </template>
        <span
          v-for="(item, index) in data" :key="index"
          v-if="item.type === 'button'"
          class="date-item"
          :class="item.value ? 'date-item__active' : ''"
          @click="__handleChooseItem(item)">
          {{item.label}}
        </span>
      </section>
      <section class="flex-box">
        <template v-for="(item, index) in data">
          <el-input
            clearable
            @change="(e) => {return handleClick(setObjAttr(item.field, e))}"
            class="my-input"
            v-if="['input', 'default', ''].includes(item.type)"
            :placeholder="'请编辑' + item.label"
            v-model="item.value"
          ></el-input>
          <el-date-picker
            value-format="yyyy-MM-dd"
            @change="(e) => {return handleClick(setObjAttr(item.field, e))}"
            class="my-date-picker"
            v-if="item.type == 'date'"
            :placeholder="'请选择' + item.label"
            v-model="item.value"
          ></el-date-picker>
          <el-date-picker
            value-format="yyyy-MM-dd"
            @change="e => {return handleClick(setObjAttr(item.field, e))}"
            class="my-daterange-picker"
            v-if="item.type === 'daterange'"
            v-model="item.value"
            range-separator="-"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </template>
      </section>
    </section>
    <el-button @click="handleConfirm" type="primary">搜索</el-button>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import {
  _getSearchList, _getPanelList
} from '@/utils/mixin'
export default {
  props: {
    data: {
      type: Array,
      default: [],
      required: true,
    }
  },
  name: '',
  components: {},
  computed: {},
  filters: {},
  data(){
    return {
      currPicker: 0,
    }
  },
  methods: {
    /**
     * [handleClick 年月日按钮组的点击事件， 向上传递表单]
     * @method handleClick
     * @param  {[type]}    argus [description]
     * @return {[type]}          [description]
     */
    handleChoose(argus){
      this.currPicker = argus.dateCurr
      return this.$emit('change', argus)
    },
    handleClick(argus){
      return this.$emit('change', argus)
    },
    /**
     * [setObjAttr 设置参数为键值对的对象]
     * @method setObjAttr
     * @param  {[type]}   key [description]
     * @param  {[type]}   val [description]
     */
    setObjAttr(key, val){
      let _obj = {}
      _obj[key] = val
      return _obj
    },
    /**
     * [handleConfirm 搜索按钮的点击事件 , 向上传递表单]
     * @method handleConfirm
     * @return {[type]}      [description]
     */
    handleConfirm(){
      this.$emit('confirm', [...this.data.map(kk => {return this.setObjAttr(kk.field, kk.value)}), {currPicker: this.currPicker}])
      this.$bus.$emit('confirm', [...this.data.map(kk => {return this.setObjAttr(kk.field, kk.value)}), {currPicker: this.currPicker}])
    }
  },
  created(){},
  mixins:[_getSearchList, _getPanelList]
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
@import '@/assets/style/color.scss';
.search-wrapper{
  @include flex($dir: row, $justify: space-between, $align: flex-start);
  padding: 15px 20px;
  .date-box{
    margin-bottom: 15px;
    .date-item{
      padding: 4px 10px;
      margin-right: 20px;
      border:1px solid $b-base;

      &:hover{
        cursor: pointer;
        border: 1px solid $base;
      }
    }
    .date-item__active{
      border: 1px solid $base;
    }
  }
  .flex-box{
    @include flex($dir: row, $justify:space-between, $align: center);
    .my-input, .my-date-picker, .my-daterange-picker{
      flex: 1;
      margin-right: 15px;
    }
    .my-daterange-picker{
      min-width: 240px;
    }
  }
}
</style>
