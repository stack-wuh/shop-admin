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
        name: '审核未通过',
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
        name: '全部',
      },
      {
        name: '待审核'
      },
      {
        name: '审核未通过',
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
        field: 'daterange',
        value: '',
      },
      {
        label: '订单编号',
        type: 'default',
        field: 'orderCode',
        value: '',
      },
      {
        label: '商家名称',
        type: 'default',
        field: 'merchantName',
        value: '',
      },
      {
        label: '',
        type: 'buttongroup',
        value: 3,
        field: 'timeState',
        list: [
          {
            text: '今天',
            type: 'button',
            value: 0,
            class: 'search-wrapper--item__button-middle margin-lf__20 ',
            field: '',
          },
          {
            text: '本周',
            type: 'button',
            value: 1,
            field: '',
            class: 'search-wrapper--item__button-middle margin-lf__20 ',
          },
          {
            text: '本月',
            type: 'button',
            value: 2,
            field: '',
            class: 'search-wrapper--item__button-middle margin-lf__20 ',
          },
          {
            text: '本年',
            type: 'button',
            value: 3,
            field: '',
            class: 'search-wrapper--item__button-middle margin-lf__20 ',
          },
        ]
      },
    ],
  },
  {
    l: '用户管理',
    f: '个人管理',
    list: [
      {
        label: '提交时间',
        type: 'daterange',
        field: 'commitTime',
        value: '',
      },
      {
        label: '账号',
        type: 'default',
        field: 'username',
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
        field: 'commitTime',
        value: '',
      },
      {
        label: '账号',
        type: 'default',
        field: 'username',
        value: '',
      },
      {
        label: '公司名称',
        type: 'default',
        field: 'companyName',
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
        field: 'commitDate',
        value: '',
      },
      {
        label: '审核时间',
        type: 'daterange',
        field: 'checkDate',
        value: '',
      },
      {
        label: '账号',
        type: 'default',
        field: 'userName',
        value: '',
      },
      {
        label: '店铺名称',
        type: 'default',
        field: 'name',
        value: '',
      },
      {
        text: '现货商家',
        type: 'button',
        field: 'processStatus',
        value: false,
      },
      {
        text: '仓储加工',
        type: 'button',
        field: 'spotGoodsStatus',
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
        field: 'createTime',
        value: '',
      },
      {
        label: '商品编号',
        type: 'default',
        field: 'productCode',
        value: '',
      },
      {
        label: '店铺名称',
        type: 'default',
        field: 'merchantName',
        value: '',
      },
      {
        label: '品名',
        type: 'default',
        field: 'topName',
        value: '',
      },
      {
        label: '商品名称',
        type: 'default',
        field: 'goodName',
        value: '',
      },
      {
        label: '材质',
        type: 'default',
        field: 'materials',
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
        field: 'orderTime',
        value: '',
      },
      {
        label: '订单编号',
        type: 'default',
        field: 'orderNo',
        value: '',
      },
      {
        label: '买家名称',
        type: 'default',
        field: 'realName',
        value: '',
      },
      {
        text: '现货商家',
        type: 'button',
        field: 'spotGoodsStatus',
        value: false,
      },
      {
        text: '仓储加工',
        type: 'button',
        field: 'processStatus',
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
        field: 'orderTime',
        value: '',
      },
      {
        label: '订单编号',
        type: 'default',
        field: 'orderNo',
        value: '',
      },
      {
        label: '买家名称',
        type: 'default',
        field: 'realName',
        value: '',
      },
      {
        label: '店铺名称',
        type: 'default',
        field: 'merchantName',
        value: '',
      },
      {
        text: '现货商家',
        type: 'button',
        field: 'spotGoodsStatus',
        value: false,
      },
      {
        text: '仓储加工',
        type: 'button',
        field: 'processStatus',
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
            label: '订单编号',
            type: 'default',
            value: 'orderNo'
          },
          {
            label: '订单状态',
            type: 'default',
            value: 'orderStatus'
          },
          {
            label: '付款时间',
            type: 'default',
            value: 'paymentTime'
          },
          {
            label: '发货时间',
            value: 'sendTime'
          },
          {
            label: '发票',
            value: 'invoice'
          },
          {
            label: '运费',
            value: 'postage'
          },
          {
            label: '税点',
            value: 'taxPoint'
          },
          {
            label: '税费',
            value: 'taxation'
          },
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
            name: 'right',
            props: {
              name: 'buyRealName',
              avatar: 'buyPic',
              phone: 'buyUserName',
            }
          },
          {
            label: '合计金额',
            slot: 'MyMoney',
            type: 'slot',
            name: 'right',
            value: '',
          },
          {
            label: '订单内容',
            type: 'solt',
            name: 'right',
            slot: 'MyMiniTable'
          },
          {
            label: '备注',
            type: 'default',
            value: 'remark'
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
            type: 'slot',
            props: {
              name: 'merchantName',
              avatar: 'merchantPic',
              phone: 'merchantPhone',
            }
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
            type: 'slot',
            props: {
              name: 'buyRealName',
              avatar: 'buyPic',
              phone: 'buyUserName',
            }
          }
        ]
      },
      {
        title: '订单信息',
        list: [
          {
            label: '订单编号',
            value: 'orderNo',
          },
          {
            label: '订单状态',
            value: 'orderStatus',
          },
          {
            label: '付款方式',
            value: 'paymentType',
            type: 'defaultrange',
            order: ['微信', '支付宝', '银联'],
          },
          {
            label: '付款时间',
            value: 'paymentTime'
          },
          {
            label: '发货时间',
            value: 'sendTime'
          },
          {
            label: '发票',
            value: 'invoice',
            type: 'defaultrange',
            order: ['不开发票', '开发票']
          },
          {
            label: '运费',
            value: 'postage'
          },
          {
            label: '税点',
            value: 'taxPoint'
          },
          {
            label: '税费',
            value: 'taxation'
          },
          {
            label: '合计金额',
            slot: 'MyMoney',
            type: 'slot',
            name: 'right',
            props: {
              money: 'allPrice'
            },
          },
          {
            label: '订单内容',
            type: 'solt',
            name: 'right',
            slot: 'MyMiniTable'
          },
          {
            label: '备注',
            type: 'default',
            value: 'remark'
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
        bind: 'info',
        list: [
          {
            label: '店铺佣金',
            type: 'input',
            field: 'commission',
            value: '',
            style: {
              width: '220px',
            }
          },
          {
            label: '店铺年费',
            field: 'annualFee',
            value: '',
            type: 'input',
            style: {
              width: '220px',
            }
          }
        ]
      },
      {
        title: '关于店铺',
        list: [
          {
            label: '店铺logo',
            slot: 'MyAvatar',
            name: 'right',
            type: 'slot',
            value: 'logo'
          },
          {
            label: '店铺名称',
            value: 'name'
          },
          {
            label: '店铺地址',
            value: 'address'
          },
          {
            label: '详细地址',
            value: 'addressInfo'
          },
          {
            label: '经营范围',
            value: 'businessScope'
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
            value: 'videoInterface'
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
            value: 'name'
          },
          {
            label: '商品类目',
            value: 'productCate'
          },
          {
            label: '商品材料',
            value: 'materials',
          },
        ]
      },
      {
        title: '商品信息',
        list: [
          {
            label: '商品图片',
            type: 'slot',
            name: 'right',
            slot: 'MyAvatar',
            value: 'mainImage'
          },
          {
            label: '商品简介',
            value: 'subtitle'
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
            slot: 'MyMiniTable',
            isShowLabel: true,
          }
        ]
      },
      {
        title: '商品介绍',
        list: [
          {
            label: '商品介绍',
            value: 'subtitle'
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
            slot: 'MyRowTable',
            isShowLabel: true,
            props: {
              rows: [
                {
                  name: '名称',
                  field: 'name'
                },
                {
                  name: '型号',
                  field: ''
                },
                {
                  name: '规格',
                  field: ''
                },
                {
                  name: '长度',
                  field: ''
                },
                {
                  name: '导体材质',
                  field: ''
                },
                {
                  name: '绝缘材质',
                  field: ''
                }
              ]
            }
          }
        ]
      }
    ],
  },
  {
    l: '用户管理',
    f: '个人管理',
    crumbsList: [
      {
        name: '用户管理'
      },
      {
        name: '个人管理'
      },
      {
        name: '未通过'
      },
      {
        name: '详情'
      }
    ]
  }
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
