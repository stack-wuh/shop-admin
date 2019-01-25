export const menu = [
  {
    name: '首页',
    icon: 'icon-index',
    path: '/index',
    child: [
      {
        name: '平台总览',
        icon: '',
        path: '/index/dashboard',
        query: {l: '首页', f: '平台总览'},
      },
      {
        name: '营收统计',
        icon: '',
        path: '/index/statistic',
        query: {l: '首页', f: '营收统计'}
      },
    ]
  },
  {
    name: '网站管理',
    icon: 'icon-leimupinleifenleileibie',
    path: '',
    child: [
      {
        name: '图片管理',
        icon: '',
        path: '/website/banner',
        query: {l: '网站管理', f: '图片管理'},
      },
      {
        name: '底部导航管理',
        icon: '',
        path: '/website/bottom',
        query: {l: '网站管理', f: '底部导航管理'},
      },
      {
        name: '公告管理',
        icon: '',
        path: '/website/notice',
        query: {l: '网站管理', f: '公告管理'},
      },
      {
        name: '分类管理',
        icon: '',
        path: '/website/classify',
        query: {l: '网站管理', f: '分类管理'},
      },
      {
        name: '积分管理',
        icon: '',
        path: '/website/integral',
        query: {l: '网站管理', f: '积分管理'},
      },
      {
        name: '协议管理',
        icon: '',
        path: '/website/agreement',
        query:{l: '网站管理', f: '协议管理'}
      },
      {
        name: '商家信息管理',
        icon: '',
        path: '/website/partner',
        query: {l: '网站管理', f: '商家信息管理'},
      },
      {
        name: '新闻中心',
        icon: '',
        path: '/website/news',
        query: {l: '网站管理', f: '新闻中心'},
      },
    ]
  },
  {
    name: '用户管理',
    icon: 'icon-yonghu',
    path: '6',
    child: [
      {
        name: '个人管理',
        icon: '',
        path: '7',
      },
      {
        name: '企业认证',
        icon: '',
        path: '8',
      },
    ]
  },
  {
    name: '店铺管理',
    icon: 'icon-dianpu',
    path: '9',
    child: [
      {
        name: '店铺管理',
        icon: '',
        path: '11',
      },
      {
        name: '商品查询',
        icon: '',
        path: '12',
      },
    ]
  },
  {
    name: '订单管理',
    icon: 'icon-dingdan',
    path: '13',
    child: [
      {
        name: '自营订单',
        icon: '',
        path: '14',
      },
      {
        name: '第三方订单',
        icon: '',
        path: '15',
      },
    ]
  },
  {
    name: '物流管理',
    icon: 'icon-wuliu',
    path: '/manage/travis'
  },
  {
    name: '账号管理',
    icon: 'icon-shezhi',
    path: '/manage/account'
  }
]
