<template>
  <section class="wrapper aside-wrapper">
    <section class="user-wrapper">
      <img :src="AvatarImg" alt="avatar">
      <span class="margin-tp__10">管理员A</span>
    </section>
    <el-menu class="my-leftmenu"
      :unique-opened="true"
      router
      :default-active="routerPath">
      <el-submenu
        v-for="(item, index) in menu"
        :key="index" :index="item.path"
        v-if="item.child">
        <template slot="title">
          <i :class="item.icon" class="icon-menu-item"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item
          v-for="(sub, sid) in item.child"
          :key="sid" :index="sub.path"
          :route="sub.query"
        >{{sub.name}}</el-menu-item>
      </el-submenu>
      <el-menu-item
        v-for="(item, index) in menu" :key="index"
        :index="item.path"
        v-if="!item.child">
        <i :class="item.icon" class="icon-menu-item"></i>
        <span>{{item.name}}</span>
      </el-menu-item>
    </el-menu>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import {menu} from '@/utils/menu.js'
export default {
  props: {},
  name: '',
  components: {},
  computed: {
    routerPath(){
      return this.$route.path
    }
  },
  data(){
    return {
      menu,
      AvatarImg: require('@/assets/imgs/avatar.jpg')
    }
  },
  methods: {},
  created(){}
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
img[alt="avatar"]{
  width: 90px;
  height: 90px;
  border-radius: 50%;
}
.aside-wrapper{
  width: 220px;
  height: 100%;
  .user-wrapper{
    @include flex($justify: center, $align: center);
     width: inherit;
     height: 180px;
     border-right: 1px solid #e6e6e6;
  }

  .my-leftmenu{
    height: inherit;
    overflow-y: scroll;
    &::-webkit-scrollbar{
      display: none;
    }
    .icon-menu-item{
      margin-right: 15px;
    }
  }
}
</style>
