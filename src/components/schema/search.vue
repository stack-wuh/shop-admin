<template>
  <section class="wrapper search-wrapper">
    <section class="search-wrapper--box">
      <ul class="search-wrapper--list">
        <li
          class="search-wrapper--item"
          v-for="(item, index) in searchList" :key="index">
          <span v-if="item.label" class="search-wrapper--item__label">{{item.label}}</span>
          <el-input
            class="search-wrapper--item__input"
            v-if="item.type == 'default' || item.type == undefined"
            :placeholder="'请编辑' + item.label"
            v-model="item.value"
            clearable/>
          <el-date-picker
            value-format="yyyy-MM-dd"
            class="search-wrapper--item__date-picker"
            v-if="item.type == 'date'"
            :placeholder="'请选择' + item.label"
            v-model="item.value"
            clearable
          ></el-date-picker>
          <el-date-picker
            value-format="yyyy-MM-dd"
            class="search-wrapper--item__date-picker"
            v-if="item.type == 'daterange'"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :placeholder="'请选择' + item.label"
            v-model="item.value"
            clearable
          ></el-date-picker>
          <span
            @click="__handleChooseItem(item)"
            v-if="item.type == 'button'"
            class="search-wrapper--item__button"
            :class="[{'search-wrapper--item__button-is--action': item.value}]"
          >{{item.text}}</span>
          <div
            v-if="item.type == 'buttongroup'"
            class="search-wrapper--item__button-group">
            <span
              v-for="(btn, bid) in item.list"
              :key="bid"
              class="search-wrapper--item__button"
              :class="[btn.class, {'search-wrapper--item__button-is--action': item.value == btn.value}]"
              @click="handleClickSub(item, btn)"
            >{{btn.text}}</span>
          </div>
        </li>
      </ul>
      <el-button @click="handleConfirm" type="primary" size="small" >搜索</el-button>
    </section>
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
  computed: {
    ...mapState({
      status: state => state.schemaHeaderCurrent.index
    }),
    canShowDateRange(){
      return []
    },
    changePath(){
      return this.$route.query
    }
  },
  filters: {},
  data(){
    return {
      currPicker: 0,
    }
  },
  watch: {
    changePath(){
      this.CLEAR_SEARCH_FORM()
    }
  },
  methods: {
    ...mapActions(['GetShopInfo', 'GetShopSearchInfo', 'GetUserIndex', 'GetCorporationIndex', 'GetIndexStatistic', 'GetOrderListByParams']),
    ...mapMutations(['SET_SEARCH_FORM', 'CLEAR_SEARCH_FORM']),
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
      let data = this.data.map(kk => {return this.setObjAttr(kk.field, kk.value)})
      this.$emit('confirm', data)
      this.$bus.$emit('confirm', data)
      this.fetchData(data)
    },
    /**
     * [handleClickSub type为buttongroup的点击事件]
     * @method handleClickSub
     * @param  {[type]}       item [description]
     * @param  {[type]}       btn  [description]
     * @return {[type]}            [description]
     */
    handleClickSub(item, btn){
      item.value = btn.value
    },
    fetchData (data){
      let params = {}
      data.map(k => {
        Object.assign(params, k)
      })
      const initForm = {
        currPageNo: 1,
        pageSize: 10
      }
      const _obj = {
        '店铺管理_店铺管理': {
          action: 'GetShopInfo',
          params: {
            ...params,
            commitStartDate: params.commitDate && params.commitDate[0],
            commitEndDate: params.commitDate && params.commitDate[1],
            authenticationStartTime: params.checkDate && params.checkDate[0],
            authenticationEndTime: params.checkDate && params.checkDate[1],
            status: this.status
          }
        },
        '店铺管理_商品查询': {
          action: 'GetShopSearchInfo',
          params: {
            ...params,
            startDate: params.createTime && params.createTime[0],
            endDate: params.createTime && params.createTime[1],
          }
        },
        '用户管理_个人管理': {
          action: 'GetUserIndex',
          params: {
            ...params,
            startDate: params.commitTime && params.commitTime[0],
            endDate: params.commitTime && params.commitTime[1],
            status: this.status
          }
        },
        '用户管理_企业认证': {
          action: 'GetCorporationIndex',
          params: {
            ...params,
            startDate: params.commitTime && params.commitTime[0],
            endDate: params.commitTime && params.commitTime[1],
            status: this.status
          }
        },
        '首页_营收统计': {
          action: 'GetIndexStatistic',
          params: {
            ...params,
            startTime: params.daterange && params.daterange[0],
            endTime: params.daterange && params.daterange[1]
          }
        },
        '订单管理_自营订单': {
          action: 'GetOrderListByParams',
          params: {
            ...params,
            startDate: params.orderTime && params.orderTime[0],
            endDate: params.orderTime && params.orderTime[1],
            status: this.status
          }
        },
        '订单管理_第三方订单': {
          action: 'GetOrderListByParams',
          params: {
            ...params,
            startDate: params.orderTime && params.orderTime[0],
            endDate: params.orderTime && params.orderTime[1],
            status: this.status
          }
        }
      }
      let query = this.$route.query
      let action = _obj[`${query.l}_${query.f}`]
      this.SET_SEARCH_FORM(action.params)
      this[action.action].call(this, initForm)
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
  padding: 15px 20px;
  padding-bottom: 0;
  &--box {
    @include flex($dir: row, $justify: space-between, $align: flex-start);
  }
  &--list {
    @include flex($dir: row, $wrap: wrap, $align: center);
    flex: 1;
    padding-left: 10px;
    margin-right: 10px;
  }
  &--item {
    margin-bottom: 15px;
    &__label {
      display: inline-block;
      width: 90px;
      text-align: right;
      color: $t-999;
      &:after {
        content: ' : ';
        padding-right: 10px;
      }
    }
    &__input {
      width: 240px;
    }
    &__date-picker {
      width: 240px;
    }
    &__button {
      max-height: 40px;
      padding: 5px 5px;
      margin-right: 10px;
      border: 1px solid $b-base;
      border-radius: 4px;
      font-size: 15px;
      user-select: none;
      &:hover {
        cursor: pointer;
        color: $base;
        border-color: $base;
      }
      &:first-of-type{
        margin-left: 10px;
      }
      &-is--action {
        border: 1px solid $base;
        color: $base;
      }
      &-middle {
        display: inline-block;
        min-width: 80px;
        text-align: center;
      }
    }
  }
}
</style>
