/**
 * Created by jiangyan on 2017/3/13.
 */
import axios from 'axios'

var commonService = {
  login(){
	var referrer =  encodeURIComponent(window.location.href);
    var data = {
        callback: referrer
    };
  	var config = {
  		url: 'authentication/oauth/login',
  		method: 'get',
  		baseURL: HOST.host,
  		headers: {
  			UserToken: '90abf029-3f9a-47b3-89ff-4964c4bf2054'
  		},
  		params: data,
  		withCredentials: true
  	};
    return axios(config);
  }
}
export { commonService }