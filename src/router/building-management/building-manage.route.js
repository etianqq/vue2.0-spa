/**
 * Created by jiangyan on 2017/3/14.
 */
const buildingManagementComponent = resolve => {
  require(['@/components/building-management/building-management.vue'], resolve)
};

const buildingManagementRoutes = [
  {
    path: 'building-management',
    name: 'building-management',
    component: buildingManagementComponent
  }
];

export { buildingManagementRoutes }
