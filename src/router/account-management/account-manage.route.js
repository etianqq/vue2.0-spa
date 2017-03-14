/**
 * Created by jiangyan on 2017/3/14.
 */
const accountManagementComponent = resolve => {
  require(['@/components/account-management/account-management.vue'], resolve)
};

const accountManagementRoutes = [
  {
    path: 'account-management',
    name: 'account-management',
    component: accountManagementComponent
  }
];

export { accountManagementRoutes }

