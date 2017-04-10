const homeComponent = resolve => {
  require(['@/components/home/home.vue'], resolve)
};

const homeRoutes = [
  {
    path: 'home',
    name: 'home',
    component: homeComponent
  }
];

export { homeRoutes }
