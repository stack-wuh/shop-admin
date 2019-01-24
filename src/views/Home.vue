<template>
  <div class="home">
    <MyHeader />
    <section class="body-wrapper">
      <MyAside />
      <section class="router-wrapper">
        <router-view />
      </section>
    </section>
  </div>
</template>

<script>
import MyHeader from '@/components/nav/header'
import MyAside from '@/components/nav/aside'
import MyFooter from '@/components/nav/footer'
export default {
  name: 'home',
  components: {
    MyHeader,
    MyAside,
    MyFooter,
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/color.scss';
  .home{
    height: inherit;
    display: flex;
    flex-flow: column nowrap;

    .body-wrapper{
      height: inherit;
      display: flex;
      justify-content: space-between;
      flex:1;
      .router-wrapper{
        flex:1;
        height: inherit;
        padding: 20px;
        background-color: $b-base;
        overflow-y: scroll;

        &::-webkit-scrollbar{
          width: 5px;
          height: 1px;
        }
        &::-webkit-scrollbar-thumb{
          box-shadow: 0 0 5px inset rgba(132,31,222,.26);
          border-radius: 4px;
        }
      }
    }
  }
</style>
