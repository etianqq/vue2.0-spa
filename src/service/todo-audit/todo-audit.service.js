/**
 * 
 * @authors xuZhiQiang (xuzhiqiang928@tops001.com)
 * @date    2017-03-28 11:18:25
 * @version $Id$
 */
import axios from 'axios'
var todoAuditService = {
  getTodoAuditData() {
    return axios.get('/todo-audit-table-data');
  }
}
export { todoAuditService }
