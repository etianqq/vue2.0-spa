/**
 * Created by etianqq on 2017/3/14.
 */
const operationLogComponent = resolve => {
  require(['@/components/operation-log/operation-log.vue'], resolve)
};

const operationLogRoutes = [
  {
    path: 'operation-log',
    name: 'operation-log',
    component: operationLogComponent
  }
];

export { operationLogRoutes }
