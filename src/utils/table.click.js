import $router from 'vue-router'

export const handleJump2other = (args) => {
  let map = new Map([
    [{l: '物流管理', f: '物流管理'}, {...args, path: '/travis/detail'}],
    [{l: '订单管理', f: '自营订单'}, {...args, path: '/order/self/detail', query: {...args.query, c: '自营订单详情'}}],
    [{l: '订单管理', f: '第三方订单'}, {...args, path: '/order/other/detail', query: {...args.query, c: '第三方订单详情'}}],
    [{l: '首页', f: '营收统计'}, {...args, path: '/order/self', query: {l: '订单管理', f: '自营订单'}}],
    [{l: '网站管理', f: '底部导航管理'}, {...args, path: '/web/article/detail', query: {...args.query, c: '买家服务', s: '详情'}}],
    [{l: '网站管理', f: '新闻中心'}, {...args, path: '/web/news/detail', query: {...args.query, c: '买家服务', s: '详情'}}],
  ])
  let action = [...map].filter(([k, v]) => k.l === args.query.l && k.f === args.query.f)
  action.forEach(([k, i]) => {
    i.$router.push({path: i.path, query: {...i.query, ...args.params}})
  })
}

export default {
  handleJump2other
}
