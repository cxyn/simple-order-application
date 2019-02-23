import Vue from 'vue'
import Router from 'vue-router'
import TodayMenu from '@/components/TodayMenu'
import OrderListToday from '@/components/OrderListToday'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'
import AdminIndex from '@/components/admin/Index'
import OrderList from '@/components/admin/OrderList'
import UserList from '@/components/admin/Userlist'
import MenuList from '@/components/admin/MenuList'
import AddMenu from '@/components/admin/MenuAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodayMenu',
      component: TodayMenu
    },
    {
      path: '/orderListToday',
      name: 'orderListToday',
      component: OrderListToday
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/admin/index',
      name: 'index',
      component: AdminIndex
    },
    {
      path: '/admin/orderList',
      name: 'orderList',
      component: OrderList
    },
    {
      path: '/admin/user',
      name: 'userList',
      component: UserList
    },
    {
      path: '/admin/menuList',
      name: 'menuList',
      component: MenuList
    },
    {
      path: '/admin/addMenu',
      name: 'addMenu',
      component: AddMenu
    }

  ]
})
