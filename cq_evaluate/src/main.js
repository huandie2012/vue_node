// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { 
  Layout, 
  Menu, 
  Icon, 
  Avatar,
  Breadcrumb,
  Form,
  Input,
  Select,
  Button,
  Row,
  Col,
  Table,
  notification,
  DatePicker,
  Popconfirm
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false
Vue.prototype.$notification = notification
Vue.use(Layout).use(Menu).use(Icon).use(Avatar).use(Breadcrumb).use(Form)
.use(Input).use(Select).use(Button).use(Row).use(Col).use(Table).use(DatePicker)
.use(Popconfirm)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
