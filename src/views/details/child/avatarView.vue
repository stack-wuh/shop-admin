<template>
  <section class="avatar-wrapper">
    <section class="avatar-wrapper-box">
      <img :src="$attrs[$attrs.item.value]" alt="avatar" class="avatar-wrapper-box__image">
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
    return {}
  },
  methods: {},
  created(){},
  mixins:[]
}
</script>
<style lang="scss" scoped>
.avatar-wrapper{
  &-box{
    max-width: 200px;
    max-height: 180px;
    &__image{
      width: inherit;
    }
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
