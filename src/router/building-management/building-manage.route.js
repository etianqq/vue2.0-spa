/**
 * Created by etianqq on 2017/3/14.
 */
const buildingManagementComponent = resolve => {
    require(['@/components/building-management/building-management.vue'], resolve)
};
const addBuildingNavComponent = resolve => {
    require(['@/components/building-management/add-building/add-nav.vue'], resolve)
}


const buildingManagementRoutes = [
    {
        path: 'building-management',
        name: 'building-management',
        component: buildingManagementComponent
    },
    {
        path: 'building-management/add-nav',
        name: 'building-management-add-nav',
        component: addBuildingNavComponent
    }
];

export {buildingManagementRoutes}
