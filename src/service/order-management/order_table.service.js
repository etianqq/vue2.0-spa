/**
 * 
 * @authors xuZhiQiang (xuzhiqiang928@tops001.com)
 * @date    2017-03-28 11:18:25
 * @version $Id$
 */
import axios from 'axios'
var orderTableService = {
  getOrderTableData(){
    return axios.get('/order-table-data');
  }
}
export { orderTableService }
