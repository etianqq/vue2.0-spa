/**
 * Created by jiangyan on 2017/3/14.
 */
const businessManagementComponent = resolve => {
  require(['@/components/business-management/business-management.vue'], resolve)
};

const businessManagementRoutes = [
  {
    path: 'business-management',
    name: 'business-management',
    component: businessManagementComponent
  }
];

export { businessManagementRoutes }
