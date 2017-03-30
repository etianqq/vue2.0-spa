/**
 * Created by jiangyan on 2017/3/13.
 */

import axios from 'axios'
import router from '../router/index'
import {homeService} from './home/home.service'
import {buildingService} from './building-management/building-management.service'
import {businessDeveloperService} from './business-management/business.developer.service'
import {todoAuditService} from './todo-audit/todo-audit.service'

axios.interceptors.response.use(
    response => {
        console.log("response")
        console.log(response);
        console.log("response.data")
        console.log(response.data);
        // 如果是未登录，那么把响应reject掉
        if (response.data.Code == 4002) {
            console.log("response.Message");
            console.log(response.data.Message);
            router.replace('/login');
            return Promise.reject(response.data.Message);
        } else {
            return Promise.resolve(response.data.data);
        }
    },
    error => {
        return Promise.reject(error.response);
    }
);

export {
    homeService,
    buildingService,
    businessDeveloperService,
    todoAuditService
}
