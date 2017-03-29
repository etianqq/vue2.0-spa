/**
 * Created by linaqiu on 2017/3/6.
 */
var APIS = {
    /*
     * @action 公共使用的api
     */
    COMMON_API: {
        //获取默认楼盘编号菜单信息
        AUTH_MENU_INFO: 'topsales-web/v4/auth/getDefaultMenuInfo',
        // 登录
        LOGIN_SERVICE: 'topsales-web/v4/login',
        // Admin登录验证模块
        LOGIN_ADMIN_INFO_WEB: 'topsales-web/v4/Profile/GetAdminInfoV14Web',
        // oauth登录验证模块
        LOGIN_OAUTH_INFO_WEB: 'topsales-web/v4/auth/bulk',
        // 登出验证模块
        LOGIN_OUT: 'topsales-web/v4/logout'
    },

    /*
     * @action 基础数据
     */
    BASIC_DATA_API: {
        /*--------------楼盘配置API-----------------*/
        BULIDING_CONFIG_API: 'topsales-web/v4/Building/GetBuildingForKid',
        BULIDING_CONFIG_EDIT_API: 'topsales-web/v4/Building/EditBuildingConfig',
    },

    SETTING: {
        //楼盘渠道列表
        CHANNEL_LIST: 'topsales-web/v4/building/pushChannels',
        //添加一个楼盘渠道
        ADD_CHANNEL: 'topsales-web/v4/building/addPushChannel',
        //删除一个楼盘渠道
        DELETE_CHANNEL: 'topsales-web/v4/building/deletePushChannel/',
        //编辑渠道
        EDIT_CHANNEL: 'topsales-web/v4/building/editPushChannel',
        //获取银行列表
        BANK_LIST: 'topsales-web/v4/capital/banks',
        //添加(编辑)银行
        ADD_BANK: 'topsales-web/v4/capital/bank',
        //删除银行
        DELETE_BANK: 'topsales-web/v4/capital/bank/'
    },

    CHART: {
        //汇总分析报表
        SUMMARY_CHART: 'topsales-web/v4/report/gather/all'
    },

    CITY_LSIT: {
        OA_CITY_LIST_URL: 'common-data/managing-city-list'
    }
};

module.exports = APIS;
