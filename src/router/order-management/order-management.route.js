/**
 * Created by jiangyan on 2017/3/14.
 */
const orderManagementComponent = resolve => {
  require(['@/components/order-management/order-management.vue'], resolve)
};

const orderManagementRoutes = [
  {
    path: 'order-management',
    name: 'order-management',
    component: orderManagementComponent
  }
];

export { orderManagementRoutes }
