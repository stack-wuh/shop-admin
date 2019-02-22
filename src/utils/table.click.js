import $router from 'vue-router'
import $store from '@/store'

/**
 * [handleJump2other 点击跳转事件]
 * @method handleJump2other
 * @param  {[type]}         args [description]
 * @return {[type]}              [description]
 */
export const handleJump2other = (args) => {
  let {crumbs: cls = [], index: cid = 0} = $store.state.schemaHeaderCurrent
  let map = new Map([
    [{l: '物流管理', f: '物流管理'}, {...args, path: '/travis/detail'}],
    [{l: '订单管理', f: '自营订单'}, {...args, path: '/order/self/detail', query: {...args.query, c: '自营订单详情'}}],
    [{l: '订单管理', f: '第三方订单'}, {...args, path: '/order/other/detail', query: {...args.query, c: '第三方订单详情'}}],
    [{l: '首页', f: '营收统计'}, {...args, path: '/order/self', query: {l: '订单管理', f: '自营订单'}}],
    [{l: '网站管理', f: '底部导航管理'}, {...args, path: '/web/article/detail', query: {...args.query, c: cls[cid] && cls[cid].name || '买家服务', s: '详情'}}],
    [{l: '网站管理', f: '新闻中心'}, {...args, path: '/web/news/detail', query: {...args.query, c: 'asd', s: '详情'}}],
    [{l: '用户管理', f: '企业认证'}, {...args, path: '/user/corporation/detail', query: {...args.query, c: '未通过', s: '详情'}}],
    [{l: '用户管理', f: '个人管理'}, {...args, path: '/user/user/detail', query: {...args.query, c: '未通过', s: '详情'}}],
    [{l: '店铺管理', f: '店铺管理'}, {...args, path: '/store/shop/detail', query: {...args.query, c: '未通过', s: '详情'}}],
    [{l: '店铺管理', f: '商品查询'}, {...args, path: '/store/goods/detail', query: {...args.query, c: '未通过', s: '详情'}}],
  ])
  let action = [...map].filter(([k, v]) => k.l === args.query.l && k.f === args.query.f)
  action.forEach(([k, i]) => {
    i.$router.push({path: i.path, query: {...i.query, ...args.params}})
  })
}

/**
 * [handleSwitchChagne table组件内的switch的change事件]
 * @method handleSwitchChagne
 * @param  {[type]}           argus [description]
 * @return {[type]}                 [description]
 */
export const handleSwitchChange = (argus) => {
  let {$route, params, params: {id, status}}  = argus
  let _obj = {
    '店铺管理_店铺管理': {
      dispatch: 'GetShopOneById',
      action: 'GetShopInfo',
      params: {
        id, status : status == 0 ? 1 : 0
      }
    }
  }
  let action = _obj[`${$route.query.l}_${$route.query.f}`]
  status = $store.state.schemaHeaderCurrent.index - 1 >= 0 ? $store.state.schemaHeaderCurrent.index : ''
  $store.dispatch(action.dispatch, action.params).then(res => {
    if(!res.status) {
      setTimeout($store.dispatch(action.action,
          {
            ...$store.state.search,
            status ,
            currPageNo: $store.state.currPageNo}
          ), 1000)
    }
  })
}

/**
 * [handleSwitchChangeWeb 网站管理 -- 底部导航栏的状态切换]
 * @method handleSwitchChangeWeb
 * @param  {[type]}              argus [description]
 * @return {[type]}                    [description]
 */
export const handleSwitchChangeWebBottom = (argus) => {
  let {params: {id }} = argus
  $store.dispatch('SetBottomItemStatusById', id)
}

/**
 * [handleSwitchChangeWebIntegral 网站管理 -- 积分管理的状态切换]
 * @method handleSwitchChangeWebIntegral
 * @param  {[type]}                      argus [description]
 * @return {[type]}                            [description]
 */
export const handleSwitchChangeWebIntegral = argus => {
  let {params: {id }} = argus
  $store.dispatch('SetIntegralStatusById', id)
}

export default {
  handleJump2other,
  handleSwitchChange,
  handleSwitchChangeWebBottom
}
