/**
 * [_router 定义一个路由跳转事件]
 * path -- query
 * name -- params
 * deply -- 延迟执行
 * @type {Object}
 */

export const _router = {
  methods: {
    $push({path, name, query, params, deply = 100}){
      setTimeout(() => {
        this.$router.push({path, name, query, params})
      }, deply, false)
    }
  }
}

/**
 * [PanelList 后台全部的panel列表]
 * 重新赋值 -- PanelList
 * 并且return
 * @type {Array}
 */
const PanelList = [
  {
    l: '首页',
    f: '营收统计',
    list: [
      {
        name: '营收统计'
      }
    ]
  },
  {
    l: '用户管理',
    f: '个人管理',
    list: [
      {
        name: '全部',
      },
      {
        name: '未认证',
      },
      {
        name: '待审核',
      },
      {
        name: '审核为通过',
      },
      {
        name: '审核已通过',
      },
    ],
  },
  {
    l: '用户管理',
    f: '企业认证',
    list: [
      {
        name: '全部'
      },
      {
        name: '待审核'
      },
      {
        name: `审核未通过`
      },
      {
        name: '审核已通过'
      }
    ]
  },
  {
    l: '店铺管理',
    f: '店铺管理',
    list: [
      {
        name: '全部'
      },
      {
        name: '待审核'
      },
      {
        name: '审核为通过',
      },
      {
        name: '审核已通过',
      },
      {
        name: '已禁用',
      },
    ]
  },
  {
    l: '店铺管理',
    f: '商品查询',
    list: [
      {
        name: '全部'
      },
      {
        name: '已上架'
      },
      {
        name: '已下架',
      },
      {
        name: '未上架',
      },
    ]
  },
  {
    l: '订单管理',
    f: ['自营订单', '第三方订单'],
    list: [
      {
        name: '全部'
      },
      {
        name: '待发货'
      },
      {
        name: '已发货',
      },
      {
        name: '已完成',
      },
      {
        name: '已取消',
      },
    ]
  },
  {
    l: '物流管理',
    f: ['物流管理'],
    list: [
      {
        name: '物流管理'
      },
    ]
  },
  {
    l: '账号管理',
    f: ['账号管理'],
    list: [
      {
        name: '账号管理'
      }
    ]
  }
]
export const _getPanelList = {
  data(){
    return {
      panelList: [],
      PanelList,
    }
  },
  watch: {
    $route(){
      this.__getPanelList()
    }
  },
  methods: {
    query(){
      return this.$route.query
    },
    __getPanelList(){
      let _obj =  this.PanelList.find(kk => kk.l === this.query().l && (typeof kk.f === 'string' ? kk.f === this.query().f : kk.f.includes(this.query().f)))
      this.panelList = _obj.list
      return _obj
    }
  },
  created(){
    this.__getPanelList()
  }
}


/**
 * [searchList 后台全部页面的search列表]
 * 重新赋值 searchList
 * return 出来
 */
const SearchList = [
  {
    l: '首页',
    f: '营收统计',
    list: [
      {
        label: '时间',
        type: 'daterange',
        field: '',
        value: '',
      },
      {
        label: '订单编号',
        type: 'default',
        field: '',
        value: '',
      },
      {
        label: '商家名称',
        type: 'default',
        field: '',
        value: '',
      }
    ],
  },
  {
    l: '用户管理',
    f: '个人管理',
    list: [
      {
        label: '提交时间',
        type: 'daterange',
        field: '',
        value: '',
      },
      {
        label: '账号',
        type: 'default',
        field: '',
        value: '',
      }
    ],
  },
  {
    l: '用户管理',
    f: '企业认证',
    list: [
      {
        label: '提交时间',
        type: 'daterange',
        field: '',
        value: '',
      },
      {
        label: '账号',
        type: 'default',
        field: '',
        value: '',
      },
      {
        label: '公司名称',
        type: 'default',
        field: '',
        value: '',
      }
    ],
  },
  {
    l: '店铺管理',
    f: '店铺管理',
    list: [
      {
        label: '提交时间',
        type: 'daterange',
        field: '',
        value: '',
      },
      {
        label: '审核时间',
        type: 'daterange',
        field: '',
        value: '',
      },
      {
        label: '账号',
        type: 'default',
        field: '',
        value: '',
      },
      {
        label: '店铺名称',
        type: 'default',
        field: '',
        value: '',
      },
      {
        label: '现货商家',
        type: 'button',
        field: 'a1',
        value: false,
      },
      {
        label: '仓储加工',
        type: 'button',
        field: 'q2',
        value: false,
      }
    ],
  },
  {
    l: '店铺管理',
    f: '商品查询',
    list: [
      {
        label: '上架时间',
        type: 'daterange',
        field: '',
        value: '',
      },
      {
        label: '商品编号',
        type: 'default',
        field: '',
        value: '',
      },
      {
        label: '店铺名称',
        type: 'default',
        field: '',
        value: '',
      },
      {
        label: '品名',
        type: 'default',
        field: '',
        value: '',
      },
      {
        label: '材质',
        type: 'default',
        field: '',
        value: '',
      },
      {
        label: '类目',
        type: 'default',
        field: '',
        value: '',
      }
    ],
  },
  {
    l: '订单管理',
    f: '自营订单',
    list: [
      {
        label: '下单时间',
        type: 'daterange',
        field: '',
        value: '',
      },
      {
        label: '订单编号',
        type: 'default',
        field: '',
        value: '',
      },
      {
        label: '买家名称',
        type: 'default',
        field: '',
        value: '',
      },
      {
        label: '现货商家',
        type: 'button',
        field: '',
        value: false,
      },
      {
        label: '仓储加工',
        type: 'button',
        field: '',
        value: false,
      }
    ],
  },
  {
    l: '订单管理',
    f: '第三方订单',
    list: [
      {
        label: '下单时间',
        type: 'daterange',
        field: '',
        value: '',
      },
      {
        label: '订单编号',
        type: 'default',
        field: '',
        value: '',
      },
      {
        label: '买家名称',
        type: 'default',
        field: '',
        value: '',
      },
      {
        label: '店铺名称',
        type: 'default',
        field: '',
        value: '',
      },
      {
        label: '现货商家',
        type: 'button',
        field: '',
        value: false,
      },
      {
        label: '仓储加工',
        type: 'button',
        field: '',
        value: false,
      }
    ],
  },
  {
    l: '物流管理',
    f: '物流管理',
    list: [
      {
        label: '下单时间',
        type: 'daterange',
        field: '',
        value: '',
      },
      {
        label: '订单编号',
        type: 'default',
        field: '',
        value: '',
      },
      {
        label: '物流编号',
        type: 'default',
        field: '',
        value: '',
      },
      {
        label: '买家名称',
        type: 'default',
        field: '',
        value: '',
      },
      {
        label: '物流状态',
        type: 'default',
        field: '',
        value: '',
      }
    ],
  },
]
export const _getSearchList = {
  data(){
    return {
      searchList: [],
      SearchList,
    }
  },
  watch:{
    $route(){
      this.__getSearchList()
    }
  },
  methods: {
    __getSearchList(){
      let _obj = this.SearchList.find(kk => kk.l === this.query().l && (typeof kk.f === 'string' ? kk.f === this.query().f : kk.f.includes(this.query().f)))
      this.searchList = _obj.list
      return _obj
    },
    __handleChooseItem(item){
      item.value = !item.value
    }
  },
  created(){
    this.__getSearchList()
  }
}


/**
 * [detail info 详情页的全部列表信息]
 */
const InfoList = [
  {
    l: '物流管理',
    f: '物流管理',
    list: [
      {
        title: '订单信息',
        list: [
          {
            label: '订单编号'
          },
          {
            label: '订单状态'
          },
          {
            label: '商家名称'
          },
          {
            label: '商家账号'
          },
          {
            label: '发货时间'
          }
        ],
        slots: [],
      },
      {
        title: '物流信息',
        list: [
          {
            label: '物流公司'
          },
          {
            label: '物流单号',
            slot: 'MyTravisInfo',
            name: 'self',
            type: 'solt'
          }
        ],
        slots: ['MyTravisInfo'],
      }
    ],
    crumbsList: [
      {
        name: '用户管理'
      },
      {
        name: '企业认证'
      },
      {
        name: '待审核1'
      },
      {
        name: '详情'
      }
    ],
  },
  {
    l: '订单管理',
    f: '自营订单',
    list: [
      {
        title: '订单信息',
        list: [
          {
            label: '订单编号'
          },
          {
            label: '订单状态'
          },
          {
            label: '付款时间'
          },
          {
            label: '发货时间'
          },
          {
            label: '发票'
          },
          {
            label: '运费'
          },
          {
            label: '税点'
          },
          {
            label: '税费'
          }
        ],
        slots: [],
      },
      {
        title: '商品信息',
        list: [
          {
            label: '买家信息',
            slot: 'MyBuyer',
            type: 'slot',
            name: 'right'
          },
          {
            label: '合计金额',
            slot: 'MyMoney',
            type: 'slot',
            name: 'right',
          },
          {
            label: '订单内容',
            type: 'solt',
            name: 'right',
            slot: 'MyMiniTable'
          },
          {
            label: '备注',
            type: 'solt',
            name: 'right',
            slot: 'MyPaper'
          }
        ],
        slots: [],
      }
    ],
    crumbsList: [
      {
        name: '订单管理'
      },
      {
        name: '已发货'
      },
      {
        name: '订单详情'
      }
    ],
  },
  {
    l: '订单管理',
    f: '第三方订单',
    list: [
      {
        title: '卖家信息',
        list: [
          {
            label: '卖家信息',
            slot: 'MyBuyer',
            name: 'right',
            type: 'slot'
          }
        ],
      },
      {
        title: '买家信息',
        list: [
          {
            label: '买家信息',
            slot: 'MyBuyer',
            name: 'right',
            type: 'slot'
          }
        ]
      },
      {
        title: '订单信息',
        list: [
          {
            label: '订单编号'
          },
          {
            label: '订单状态'
          },
          {
            label: '付款方式'
          },
          {
            label: '付款时间'
          },
          {
            label: '发货时间'
          },
          {
            label: '发票'
          },
          {
            label: '运费'
          },
          {
            label: '税点'
          },
          {
            label: '税费'
          },
          {
            label: '合计金额',
            slot: 'MyMoney',
            type: 'slot',
            name: 'right',
          },
          {
            label: '订单内容',
            type: 'solt',
            name: 'right',
            slot: 'MyMiniTable'
          },
          {
            label: '备注',
            type: 'solt',
            name: 'right',
            slot: 'MyPaper'
          }
        ],
      }
    ],
    crumbsList: [
      {
        name: '订单管理'
      },
      {
        name: '已发货'
      },
      {
        name: '订单详情'
      }
    ],
  },
  {
    l: '网站管理',
    f: '底部导航管理',
    crumbsList: [
      {
        name: '网站管理'
      },
      {
        name: '底部导航管理'
      },
      {
        name: '买家服务'
      },
      {
        name: '详情'
      }
    ]
  },
  {
    l: '网站管理',
    f: '新闻中心',
    crumbsList: [
      {
        name: '网站管理'
      },
      {
        name: '新闻中心'
      },
      {
        name: '风类新闻'
      },
      {
        name: '详情'
      }
    ]
  },
  {
    l: '用户管理',
    f: '企业认证',
    crumbsList: [
      {
        name: '用户管理'
      },
      {
        name: '企业认证'
      },
      {
        name: '详情'
      }
    ]
  },
  {
    l: '店铺管理',
    f: '店铺管理',
    crumbsList: [
      {
        name: '店铺管理'
      },
      {
        name: '店铺管理'
      },
      {
        name: '详情'
      }
    ],
    list: [
      {
        title: '店铺佣金',
        list: [
          {
            label: '店铺佣金',
          },
          {
            label: '店铺年费',
          }
        ]
      },
      {
        title: '关于店铺',
        list: [
          {
            label: '店铺logo',
          },
          {
            label: '店铺名称',
          },
          {
            label: '店铺地址',
          },
          {
            label: '详细地址',
          },
          {
            label: '经营范围',
          },
          {
            label: '仓储加工',
          },
          {
            label: '现货商家',
          }
        ]
      },
      {
        title: '视频接口',
        list: [
          {
            label: '视频接口',
          }
        ]
      }
    ],
  },
  {
    l: '店铺管理',
    f: '商品查询',
    crumbsList: [
      {
        name: '店铺管理'
      },
      {
        name: '商品查询'
      },
      {
        name: '详情'
      }
    ],
    list: [
      {
        title: '基础信息',
        list: [
          {
            label: '商品名称',
          },
          {
            label: '商品类目',
          },
          {
            label: '商品品牌',
          },
          {
            label: '商品类型',
          },
          {
            label: '商品材料',
          },
          {
            label: '商品用途',
          }
        ]
      },
      {
        title: '商品信息',
        list: [
          {
            label: '商品图片',
          },
          {
            label: '商品简介',
          },
        ]
      },
      {
        title: '商品型号',
        list: [
          {
            label: '商品型号',
            name: 'self',
            type: 'slot',
            slot: 'MyTravisInfo',
            isShowLabel: true,
          }
        ]
      },
      {
        title: '商品介绍',
        list: [
          {
            label: '商品介绍',
            name: 'self',
            type: 'slot',
            slot: 'MyTravisInfo',
            isShowLabel: true,
          }
        ]
      },
      {
        title: '商品参数',
        list: [
          {
            label: '商品参数',
            name: 'self',
            type: 'slot',
            slot: 'MyTravisInfo',
            isShowLabel: true,
          }
        ]
      }
    ],
  },
]
export const _getInfoList = {
  data(){
    return {
      infoObj: {},
      InfoList,
    }
  },
  methods: {
    query(){
      return this.$route.query
    },
    __getInfoList(){
      let _obj = this.InfoList.find(k => k.l === this.query().l && k.f === this.query().f)
      this.infoObj = _obj
      return _obj
    }
  },
  created(){
    this.__getInfoList()
  }
}
