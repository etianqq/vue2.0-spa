import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'

import { accountManagementRoutes } from './account-management/account-manage.route'
import { brokerCompanyRoutes } from './broker-company/broker-company.route'
import { buildingManagementRoutes } from './building-management/building-manage.route'
import { businessManagementRoutes } from './business-management/business-manage.route'
import { operationLogRoutes } from './operation-log/operation-log.route'
import { orderManagementRoutes } from './order-management/order-management.route'
import { todoAuditRoutes } from './todo-audit/todo-audit.route'

Vue.use(VueRouter)

// 把各个模块下的路由拼接起来，作为home下的子路由
var childRoutes = [];
childRoutes = childRoutes
  .concat(accountManagementRoutes)
  .concat(brokerCompanyRoutes)
  .concat(buildingManagementRoutes)
  .concat(businessManagementRoutes)
  .concat(operationLogRoutes)
  .concat(orderManagementRoutes)
  .concat(todoAuditRoutes);

// 整体路由的配置
var routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    children: childRoutes
  }
];

export default new VueRouter({
  routes: routes
})
