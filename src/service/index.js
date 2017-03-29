/**
 * Created by jiangyan on 2017/3/13.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import axios from 'axios'

Vue.use(VueResource);

//添加响应拦截器
// axios.interceptors.response.use(function (response) {
// 	// 对响应数据做点什么
// 	switch(response.data.Code){
// 		case 4002:
// 			var referrer =  encodeURIComponent(window.location.href);
//             var data = {
//                 callback: referrer
//             };
// 		  	var config = {
// 		  		url: 'authentication/oauth/login',
// 		  		method: 'get',
// 		  		baseURL: HOST.host,
// 		  		headers: {
// 		  			UserToken: '90abf029-3f9a-47b3-89ff-4964c4bf2054'
// 		  		},
// 		  		params: data,
// 		  		withCredentials: true
// 		  	};
// 		    axios(config);
// 			break;
// 		default:
// 		//do nothing
// 	}
// }, function (error) {
// 	// 对响应错误做点什么
// 	return Promise.reject(error);
// });