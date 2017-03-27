/**
 * Created by jiangyan on 2017/3/14.
 */
const businessManagementComponent = resolve => {
  require(['@/components/business-management/business-management.vue'], resolve)
};

const businessAddDeveloperComponent = resolve => {
  require(['@/components/business-management/business-addDeveloper.vue'], resolve)
};

const businessAddBuildComponent = resolve => {
	require(['@/components/business-management/business-addBuilding.vue'], resolve)
};

const businessManagementRoutes = [
  {
    path: 'business-management',
    name: 'business-management',
    component: businessManagementComponent
  },
  {
    path: 'business-addDeveloper',
    name: 'business-addDeveloper',
    component: businessAddDeveloperComponent
  },
  {
  	path: 'business-addBuilding',
  	name: 'business-addBuilding',
  	component: businessAddBuildComponent
  }
];

export { businessManagementRoutes }
