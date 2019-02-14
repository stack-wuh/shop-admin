import {
  handleJump2other,
} from '@/utils/table.click.js'


export const table = [
  {
    name: '营收统计',
    params: ['营收统计'],
    type: 'index',
    label: '序号',
    list: [
      {
        label: '订单编号',
        type: 'default',
        field: '',
      },
      {
        label: '商家名称',
        type: 'default',
        field: '',
      },
      {
        label: '商家账号',
        type: 'default',
        field: '',
      },
      {
        label: '时间',
        type: 'default',
        field: '',
      },
      {
        label: '订单金额',
        type: 'default',
        field: '',
      },
      {
        label: '佣金',
        type: 'default',
        field: '',
      },
      {
        label: '操作',
        type: 'setting',
        list: [
          {
            type: 0,
            text: '查看订单详情',
            click: handleJump2other
          }
        ]
      },
    ],
  },
  {
    name: 'banner管理',
    params: ['banner'],
    type: 'index',
    label: '序号',
    list: [
      {
        label: '位置',
        field: '',
        type: 'default'
      },
      {
        label: 'banner',
        field: '',
        type: 'image',
        width: 600
      },
      {
        label: '操作',
        type: 'setting',
        list: [
          {
            text: '修改'
          }
        ]
      }
    ],
  },
  {
    name: '底部导航管理',
    params: ['底部导航管理'],
    type: 'index',
    label: '序号',
    list: [
      {
        label: '标题',
        field: '',
        type: 'default'
      },
      {
        label: '上传时间',
        field: '',
        type: 'default'
      },
      {
        label: '状态',
        field: '',
        type: 'default'
      },
      {
        label: '操作',
        type: 'setting',
        list: [
          {
            text: '查看详情',
            click: handleJump2other
          },
          {
            text: '关闭'
          }
        ]
      }
    ]
  },
  {
    name: '公告管理',
    params: ['公告管理'],
    type: 'index',
    label: '序号',
    list: [
      {
        label: '公告',
        field: '',
        type: 'default'
      },
      {
        label: '发布时间',
        field: '',
        type: 'default'
      },
      {
        label: '操作',
        type: 'setting',
        list: [
          {
            text: '删除',
          }
        ]
      }
    ]
  },
  {
    name: '新闻中心',
    params: ['新闻中心'],
    type: 'index',
    label: '序号',
    list: [
      {
        label: '标题',
        field: '',
        type: 'default'
      },
      {
        label: '发布时间',
        field: '',
        type: 'default'
      },
      {
        label: '操作',
        type: 'setting',
        list: [
          {
            text: '查看详情',
            click: handleJump2other
          },
          {
            text: '删除',
          }
        ]
      }
    ]
  },
  {
    name: '积分管理',
    params: ['积分管理'],
    type: 'index',
    label: '序号',
    list: [
      {
        label: '积分来源/消耗名称',
        field: '',
        type: 'default'
      },
      {
        label: '积分详情',
        field: '',
        type: 'default'
      },
      {
        label: '状态',
        field: '',
        type: 'default'
      },
      {
        label: '操作',
        type: 'setting',
        list: [
          {
            text: '编辑',
          },
          {
            text: '关闭',
          }
        ]
      }
    ]
  },
  {
    name: '用户管理',
    params: ['个人管理'],
    type: 'index',
    label: '序号',
    list: [
      {
        label: '账号',
        field: '',
        type: 'default'
      },
      {
        label: '用户名',
        field: '',
        type: 'default'
      },
      {
        label: '身份证号',
        field: '',
        type: 'default'
      },
      {
        label: '状态',
        field: '',
        type: 'default'
      },
      {
        label: '积分',
        field: '',
        type: 'default'
      },
      {
        label: '注册时间',
        field: '',
        type: 'default'
      },
      {
        label: '操作',
        type: 'setting',
        list: [
          {
            text: '查看详情',
          },
        ]
      }
    ]
  },
  {
    name: '用户管理',
    params: ['企业认证'],
    type: 'index',
    label: '序号',
    list: [
      {
        label: '账号',
        field: '',
        type: 'default'
      },
      {
        label: '公司名称',
        field: '',
        type: 'default'
      },
      {
        label: '状态',
        field: '',
        type: 'default'
      },
      {
        label: '提交时间',
        field: '',
        type: 'default'
      },
      {
        label: '操作',
        type: 'setting',
        list: [
          {
            text: '查看详情',
          },
        ]
      }
    ]
  },
  {
    name: '店铺管理',
    params: ['店铺管理'],
    type: 'index',
    label: '序号',
    list: [
      {
        label: '账号',
        field: '',
        type: 'default'
      },
      {
        label: '店铺名称',
        field: '',
        type: 'default'
      },
      {
        label: '经营范围',
        field: '',
        type: 'default'
      },
      {
        label: '状态',
        field: '',
        type: 'default'
      },
      {
        label: '提交时间',
        field: '',
        type: 'default'
      },
      {
        label: '操作',
        type: 'setting',
        list: [
          {
            text: '查看详情',
          },
        ]
      }
    ]
  },
  {
    name: '店铺管理',
    params: ['商品查询'],
    type: 'index',
    label: '序号',
    list: [
      {
        label: '店铺名称',
        field: '',
        type: 'default'
      },
      {
        label: '商品名',
        field: '',
        type: 'default'
      },
      {
        label: '商品编号',
        field: '',
        type: 'default'
      },
      {
        label: '状态',
        field: '',
        type: 'default'
      },
      {
        label: '上传时间',
        field: '',
        type: 'default'
      },
      {
        label: '操作',
        type: 'setting',
        list: [
          {
            text: '查看详情',
          },
        ]
      }
    ]
  },
  {
    name: '订单管理',
    params: ['自营订单'],
    type: 'index',
    label: '序号',
    list: [
      {
        label: '订单编号',
        field: '',
        type: 'default'
      },
      {
        label: '买家名称',
        field: '',
        type: 'default'
      },
      {
        label: '买家账号',
        field: '',
        type: 'default'
      },
      {
        label: '下单时间',
        field: '',
        type: 'default'
      },
      {
        label: '合计',
        field: '',
        type: 'default'
      },
      {
        label: '订单状态',
        field: '',
        type: 'default'
      },
      {
        label: '操作',
        type: 'setting',
        list: [
          {
            text: '查看详情',
            click: handleJump2other
          },
        ]
      }
    ]
  },
  {
    name: '订单管理',
    params: ['第三方订单'],
    type: 'index',
    label: '序号',
    list: [
      {
        label: '订单编号',
        field: '',
        type: 'default'
      },
      {
        label: '买家名称',
        field: '',
        type: 'default'
      },
      {
        label: '卖家名称',
        field: '',
        type: 'default'
      },
      {
        label: '下单时间',
        field: '',
        type: 'default'
      },
      {
        label: '合计',
        field: '',
        type: 'default'
      },
      {
        label: '订单状态',
        field: '',
        type: 'default'
      },
      {
        label: '操作',
        type: 'setting',
        list: [
          {
            text: '查看详情',
            click: handleJump2other
          },
        ]
      }
    ]
  },
  {
    name: '订单管理',
    params: ['自营订单详情', '第三方订单详情'],
    type: 'index',
    label: '序号',
    list: [
      {
        label: '分类',
        field: '',
        type: 'default'
      },
      {
        label: '商品名称',
        field: '',
        type: 'default'
      },
      {
        label: '品名',
        field: '',
        type: 'default'
      },
      {
        label: '材质',
        field: '',
        type: 'default'
      },
      {
        label: '特性',
        field: '',
        type: 'default'
      },
      {
        label: '数量/单位',
        field: '',
        type: 'default'
      },
      {
        label: '地区',
        field: '',
        type: 'default'
      },
      {
        label: '价格',
        field: '',
        type: 'default'
      }
    ]
  },
  {
    name: '物流管理',
    params: ['物流管理'],
    type: 'index',
    label: '序号',
    list: [
      {
        label: '订单编号',
        field: '',
        type: 'default'
      },
      {
        label: '物流编号',
        field: '',
        type: 'default'
      },
      {
        label: '商家名称',
        field: '',
        type: 'default'
      },
      {
        label: '卖家账号',
        field: '',
        type: 'default'
      },
      {
        label: '发货时间',
        field: '',
        type: 'default'
      },
      {
        label: '物流状态',
        field: '',
        type: 'default'
      },
      {
        label: '操作',
        type: 'setting',
        list: [
          {
            text: '查看详情',
            click: handleJump2other
          },
        ]
      }
    ]
  },
  {
    name: '账号管理',
    params: ['账号管理'],
    type: 'index',
    label: '序号',
    list: [
      {
        label: '身份',
        field: '',
        type: 'default'
      },
      {
        label: '姓名',
        field: '',
        type: 'default'
      },
      {
        label: '账号',
        field: '',
        type: 'default'
      },
      {
        label: '操作',
        type: 'setting',
        list: [
          {
            text: '修改',
          },
          {
            text: '删除',
          }
        ]
      }
    ]
  },
]
