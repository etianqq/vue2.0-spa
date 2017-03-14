/**
 * Created by jiangyan on 2017/3/14.
 */
const todoAuditComponent = resolve => {
  require(['@/components/todo-audit/todo-audit.vue'], resolve)
};

const todoAuditRoutes = [
  {
    path: 'todo-audit',
    name: 'todo-audit',
    component: todoAuditComponent
  }
];

export { todoAuditRoutes }
