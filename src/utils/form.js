export const myForms = [
  {
    l: '网站管理',
    f: '公告管理',
    list: [
      {
          label: '公告内容',
          type: 'textarea',
          rows: 3,
          field: 'content',
          prop: 'content',
          rules: [
            {
              required: true,
              message: '请编辑公告内容',
              trigger: 'blur'
            }
          ]
      }
    ],
    form: {
      content: ''
    }
  },
  {
    l: '网站管理',
    f: '积分管理',
    list: [
      {
        label: '积分来源/消耗名称',
        type: 'input',
        field: 'name',
        prop: '',
        rules: [
          {
            required: true,
            message: '请编辑积分来源/消耗名称',
            trigger: 'blur'
          }
        ]
      },
      {
        label: '积分详情',
        type: 'input',
        field: 'socer',
        prop: '',
        rules: [
          {
            required: true,
            message: '请编辑积分详情',
            trigger: 'blur'
          }
        ]
      },
      {
        label: '状态',
        type: 'switch',
        field: 'status',
        prop: '',
        rules: [
          {
            required: true,
            message: '请选择状态',
            trigger: ['change']
          }
        ],
        activeValue: 1,
        inactiveValue: 0,
        activeText: '已开启',
        inactiveText: '已关闭',
      }
    ],
    form: {
      name: '',
      status: 0,
      socer: ''
    }
  },
  {
    l: '网站管理',
    f: '分类管理',
    list: [
      {
        label: '名称',
        type: 'input',
        field: 'name',
        prop: 'name',
        rules: [
          {
            required: true,
            message: '请编辑名称',
            trigger: 'blur'
          }
        ]
      }
    ],
    form: {
      name: '',
      status: 1,
    }
  },
  {
    l: '网站管理',
    f: '新闻中心',
    list: [
      {
        label: '标题',
        type: 'input',
        field: 'name',
        rules: [
          {
            required: true,
            message: '请编辑标题',
            trigger: 'blur'
          }
        ]
      },
      {
        label: '内容',
        type: 'textarea',
        field: 'content',
        rows: 3
      }
    ],
    form: {
      name: '',
      content: ''
    }
  },
  {
    l: '账号管理',
    f: '账号管理',
    list: [
      {
        label: '姓名',
        type: 'input',
        field: 'realName',
        rules: [
          {
            required: true,
            message: '请编辑姓名',
            trigger: ['change','blur'],
          }
        ]
      },
      {
        label: '账号',
        type: 'input',
        field: 'userName',
        rules: [
          {
            required: true,
            message: '请编辑账号',
            trigger: ['change','blur'],
          }
        ]
      },
      {
        label: '密码',
        type: 'password',
        field: 'password',
        rules: [
          {
            required: true,
            message: '请编辑密码',
            trigger: ['change','blur'],
          }
        ]
      }
    ],
    form: {}
  },
  {
    l: '网站管理',
    f: '图片管理',
    list: [
      {
        label: '位置',
        type: 'default',
        field: 'adName',
      },
      {
        label: 'banner',
        type: 'uploadImg',
        field: 'pic',
      }
    ],
    form: {
      pic: ''
    }
  }
]


export default myForms
