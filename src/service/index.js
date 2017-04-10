/**
 * Created by jiangyan on 2017/3/13.
 */

import axios from 'axios'
import router from '../router/index'
import { Loading } from 'element-ui'
import {homeService} from './home/home.service'
import {buildingService} from './building-management/building-management.service'
import {businessDeveloperService} from './business-management/business.developer.service'
import {todoAuditService} from './todo-audit/todo-audit.service'
import {orderService} from './order-management/order.service'

// 声明一个loading变量存储Loading实例
let loading;
axios.interceptors.request.use(
    config => {
        // 发送请求时，显示loading
        loading = Loading.service({ fullscreen: true });
        return config;
    }
);

axios.interceptors.response.use(
    response => {

        // 收到响应后，隐藏loading
        loading.close();

        // 如果是未登录，那么把响应reject掉
        if (response.data.Code == 4002) {
            router.replace('/login');
            return Promise.reject(response.data.Message);
        } else {
            return Promise.resolve(response.data);
        }
    },
    error => {

        // 响应失败后，隐藏loading
        loading.close();

        return Promise.reject(error.response);
    }
);

export {
    homeService,
    buildingService,
    businessDeveloperService,
    todoAuditService,
    orderService
}
