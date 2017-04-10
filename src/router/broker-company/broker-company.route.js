/**
 * Created by jiangyan on 2017/3/14.
 */
const brokerCompanyComponent = resolve => {
  require(['@/components/broker-company/broker-company.vue'], resolve)
};
const brokerAddCompanyComponent = resolve => {
  require(['@/components/broker-company/broker-addCompany.vue'], resolve)
};
const brokerCompanyRoutes = [
  {
    path: 'broker-company',
    name: 'broker-company',
    component: brokerCompanyComponent
  },
  {
    path: 'broker-addCompany',
    name: 'broker-addCompany',
    component: brokerAddCompanyComponent
  }
];

export { brokerCompanyRoutes }
