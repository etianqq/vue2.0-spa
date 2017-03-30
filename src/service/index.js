/**
 * Created by jiangyan on 2017/3/13.
 */

import axios from 'axios'
import router from '../router/index'
import {homeService} from './home/home.service'
import {buildingService} from './building-management/building-management.service'
import {businessDeveloperService} from './business-management/business.developer.service'
import {orderService} from './order-management/order.service'
import {todoAuditService} from './todo-audit/todo-audit.service'

axios.interceptors.response.use(
    response => {
        // 如果是未登录，那么把响应reject掉
        if (response.data.Code == 4002) {
            //这里测试接口，才对url处理，正式对接不需要
            let urlApi = response.config.url.split('/')[2];
            if(urlApi === 'brokeroa.dev.apitops.com'){
                return Promise.resolve(response.data);
            }else{
                router.replace('/login');
            }
            return Promise.reject(response.data.Message);
        } else {
            return Promise.resolve(response.data.Data);
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
    orderService,
    todoAuditService
}
