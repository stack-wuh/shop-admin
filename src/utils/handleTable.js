import $router from 'vue-router'

export const handleJump2other = (args) => {
  let map = new Map([
    [{l: '物流管理', f: '物流管理'}, {...args, path: '/travis/detail'}],
    [{l: '订单管理', f: '自营订单'}, {...args, path: '/order/self/detail'}]
  ])
  let action = [...map].filter(([k, v]) => k.l === args.query.l && k.f === args.query.f)
  action.forEach(([k, i]) => {
    i.$router.push({path: i.path, query: {...args.query, ...args.params}})
  })
}

export default {
  handleJump2other
}
