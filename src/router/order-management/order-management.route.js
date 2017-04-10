/**
 * Created by jiangyan on 2017/3/14.
 */
const orderManagementComponent = resolve => {
  require(['@/components/order-management/order-management.vue'], resolve)
};

const orderPreviewComponent = resolve => {
  require(['@/components/order-management/order-preview.vue'], resolve)
};

const orderManagementRoutes = [
  {
    path: 'order-management',
    name: 'order-management',
    component: orderManagementComponent
  },
  {
    path: 'order-management/order-preview',
    name: 'order-management-preview',
    component: orderPreviewComponent
  }
];

export { orderManagementRoutes }
