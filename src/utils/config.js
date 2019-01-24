import Vue from 'vue'
import '@/assets/style/base.scss'
import '@/assets/style/element/index.css'
import '@/assets/style/font/iconfont.css'

import {
  Button,
  Table,
  TableColumn,
  Message,
  Input,
  Select,
  Form,
  FormItem,
  Pagination,
  Dialog,
  Loading,
  Menu,
  MenuItem,
  Submenu,
  DatePicker,
} from 'element-ui'

Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(Select)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Loading)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(DatePicker)
Vue.prototype.$ELEMENT = {size: 'small', zIndex: 999999}
Vue.prototype.$message = Message


var $bus = new Vue()
Vue.prototype.$bus = $bus
