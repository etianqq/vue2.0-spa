import Vue from 'vue'
import VueRouter from 'vue-router'
import wrapper from '@/components/wrapper'
import login from '@/components/login'

import { homeRoutes } from './home/home.route'
import { accountManagementRoutes } from './account-management/account-manage.route'
import { buildingManagementRoutes } from './building-management/building-manage.route'
import { businessManagementRoutes } from './business-management/business-manage.route'
import { operationLogRoutes } from './operation-log/operation-log.route'
import { orderManagementRoutes } from './order-management/order-management.route'
import { todoAuditRoutes } from './todo-audit/todo-audit.route'

Vue.use(VueRouter)

// 把各个模块下的路由拼接起来，作为home下的子路由
var childRoutes = [
  {
    path:'',
    redirect:'home'
  }
];
childRoutes = childRoutes
  .concat(homeRoutes)
  .concat(accountManagementRoutes)
  .concat(buildingManagementRoutes)
  .concat(businessManagementRoutes)
  .concat(operationLogRoutes)
  .concat(orderManagementRoutes)
  .concat(todoAuditRoutes);

// 整体路由的配置
var routes = [
  {
    path: '/',
    component: wrapper,
    children: childRoutes
  },
  {
    path:'/login',
    name:'login',
    component:login
  }
];

export default new VueRouter({
  routes: routes
})
