/**
 * Created by jiangyan on 2017/3/21.
 */
import axios from 'axios'

var businessDeveloperService = {
  getList(params){
  	var data = {
  		pageIndex: params.pageIndex
  	};

  	var config = {
  		url: 'broker-apply/list',
  		method: 'get',
  		baseURL: HOST.host,
  		headers: {
  			UserToken: '90abf029-3f9a-47b3-89ff-4964c4bf2054'
  		},
  		params: {
  			pageIndex: params.pageIndex
  		},
  		withCredentials: true
  	};
    return axios(config);
  }
}
export { businessDeveloperService }
