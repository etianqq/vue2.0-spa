/**
 * 
 * @authors xuZhiQiang (xuzhiqiang928@tops001.com)
 * @date    2017-03-28 11:18:25
 * @version $Id$
 */
import axios from 'axios'
var orderService = {
  getOrderTableData() {
    return axios.get('/order-table-data');
  },

  getOrderListData() {
  	return axios.get('/order-list-data');
  }
}
export { orderService }
