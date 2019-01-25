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
            text: '查看详情'
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
]
