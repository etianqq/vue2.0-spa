<template>
    <div class="businessList">
        <title-info :titles="[
            {first:'今日售卖',value:24,last:'个月'},
            {first:'剩余服务',value:87,last:'个月'},
            {first:'累计购买',value:329,last:'个月'},
        ]"></title-info>
        <el-row class="operate">
            <el-col :span="8">
                <search-bar :handleSearchChild="handleSearch" :handleRefresh="handleRefresh"></search-bar>
            </el-col>
            <el-col class="expire-tips" :span="4">
                <el-button><i class="fa fa-circle"></i>即将到期（4）</el-button>
            </el-col>
            <el-col :span="5" :offset="7" class="text-right">
                <router-link to="/business-management/business-addDeveloper" class="btn-link"><i
                    class="el-icon-circle-cross"></i><i class="text-develop">添加开发商</i></router-link>
            </el-col>
        </el-row>
        <div class="developer">
            <ul>
                <li v-for="item in developerList.items">
                    <el-row class="developer-list-title">
                        <el-col :span="8" class="developer-name">
                            <span>{{item.developerName}}</span>
                            <span class=""><i class="el-icon-star-off fs14"></i></span>
                            <span class=""><i class="el-icon-star-on fs14"></i></span>
                        </el-col>
                        <el-col :span="8" :offset="4" class="developer-contacts">
                            {{item.developerContacts}}({{item.developerPosition}}) {{item.developerContactsPhone}}
                        </el-col>
                        <el-col :span="2" :offset="2" class="text-right"><i
                            class="fa fa-arrow-circle-right cur_pointer"></i></el-col>
                    </el-row>
                    <div v-if="item.developerTag">
                        <el-row>
                            <el-col class="developer-tag">
                                <span>{{item.developerTag}}</span>
                            </el-col>
                        </el-row>
                    </div>
                    <ul class="developer-child-list">
                        <li v-for="childItem in item.childItems">
                            <el-row class="developer-child-content">
                                <el-col :span="6" class="developer-info line-right">
                                    <h3>{{childItem.subBuildingName}}</h3>
                                    <div>
                                        <p class="color_grey fs14">地址：{{childItem.subBuildingAdress}}</p>
                                        <p class="color_grey fs14">对接人：{{childItem.subBuildingContacts}}</p>
                                        <p class="color_grey fs14">联系电话：{{childItem.subBuildingContactsPhone}}</p>
                                    </div>
                                </el-col>
                                <el-col :span="6" class="developer-service text-center line-right">
                                    <h3>剩余服务</h3>
                                    <div class="date-view">
                                        <span class="number-view">{{childItem.subBuildingSurplusMonth}}</span>
                                        <span class="fs14 color_grey">月</span>
                                        <span class="number-view">{{childItem.subBuildingSurplusDay}}</span>
                                        <span class="fs14 color_grey">日</span>
                                    </div>
                                </el-col>
                                <el-col :span="4" :offset="2" class="developer-sign-date">
                                    <h3>签约时间</h3>
                                    <div>
                                        <p class="color_grey fs14">{{childItem.subBuildingSignDate}}</p>
                                        <p class="color_grey fs14">共购买<span>{{childItem.subBuildingTotalDate}}</span>个月
                                        </p>
                                    </div>
                                </el-col>
                                <el-col :span="6" class="btn-control text-right pr20">
                                    <div v-if="item.isExpire" class="btn-expire">
                                        <span class="btn-expire-left">
                                            <span class="developer-renew" @click="handleRenewBuy">续费</span>
                                            <span class="developer-delete" @click="handleRenewBuy">删除</span>
                                        </span>
                                        <span class="btn-expire-left"><i class="fa fa-chevron-right"></i></span>
                                    </div>
                                    <div v-else>
                                        <span class="developer-renew" @click="handleRenewBuy">续费</span>
                                        <i class="fa fa-chevron-right"></i>
                                    </div>
                                </el-col>
                            </el-row>
                        </li>
                    </ul>
                    <el-row class="text-center">
                        <el-col>
                            <span class="btn-addDeveloper">
                                <router-link to="/business-management/business-addBuilding" class="btn-link"><i
                                    class="el-icon-circle-cross"></i><i class="text-develop">添加楼盘</i></router-link>
                            </span>
                        </el-col>
                    </el-row>
                </li>
            </ul>
            <div class="block text-right">
                <el-pagination class="self-pagination"
                               layout="prev, pager, next"
                               @current-change="handleCurrentChange"
                               :total="100">
                </el-pagination>
            </div>
        </div>

        <!-- 续费dialog -->
        <el-dialog :title="reNewDialog.title" v-model="reNewDialog.visible" size="tiny">
            <div class="renew-content">
                <el-row>
                    <el-col :span="6" :offset="3" class="el-col-height">新增服务</el-col>
                    <el-col :span="10">
                        <el-input class="input-reset"></el-input>
                    </el-col>
                    <el-col :span="2" class="el-col-height">个月</el-col>
                </el-row>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="reNewDialog.visible = false" class="mr20">取 消</el-button>
                <el-button type="primary" @click="reNewDialog.visible = false" class="ml20">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
    em{
        font-weight: bold;
    }

    .businessList{

        .total-info {
            width: 100%;
            height: 60px;
            line-height: 60px;
            display: -webkit-flex;
            display: flex;
            position: relative;

            &:after {
                position: absolute;
                right: 0;
                bottom: 0;
                left: 0;
                height: 1px;
                content: '';
                background-color: #e5e5e5;
                width: 100%;
            }

            .total-left {
                -webkit-flex: 3;
                flex: 3;

                .tips {
                    width: 220px;
                    display: inline-block;
                    font-size: 14px;
                    letter-spacing:1px;
                    background: url("../../assets/images/mid_line.jpg") no-repeat;
                    background-position: right;
                    text-indent: 20px;

                    &:nth-child(1) {width: 180px;}
                    &:last-child {background: none;}

                    em {
                        letter-spacing: 0px;
                        padding: 0 5px;
                    }

                }
            }
            .total-right {
                -webkit-flex: 1;
                flex: 1;
                text-align: right;
                margin-right: 60px;

                .go-buy {
                    color: #008ee5;
                    font-weight: bold;
                    cursor: pointer;

                    .fa {
                        padding-left: 5px;
                    }

                }
            }
        }
        .operate {
            padding-top: 15px;
            padding-bottom: 15px;
            position: relative;
            .btn-refresh {
                .fa-refresh {
                    padding-right: 5px;
                }
            }

            .expire-tips {
                .fa-circle {
                    font-size: 12px;
                    padding-right: 5px;
                    color: #e96151;
                    -moz-transform: scale(.6);
                    -webkit-transform: scale(.6);
                    -ms-transform: scale(.6);
                    transform: scale(.6);
                }
            }

            .btn-link {
                display: inline-block;
                line-height: 1;
                white-space: nowrap;
                cursor: pointer;
                -webkit-appearance: none;
                text-align: center;
                box-sizing: border-box;
                outline: 0;
                padding: 10px 15px;
                font-size: 14px;
                border-radius: 20px;
                color: #fff;
                background-color: #20a0ff;
                border-color: #20a0ff;
                text-decoration: none;
                font-style: normal;
                margin-right: 50px;
                width: 160px;
                .el-icon-circle-cross {
                    -moz-transform: rotate(45deg);
                    -webkit-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                }
                .text-develop {
                    font-style: normal;
                    padding-left: 10px;
                }
            }
        }

        .developer {
            > ul > li {
                background-color: #fff;
                border: 1px solid #E5E5E5;
                border-radius: 4px;
                margin-bottom: 20px;
                overflow: hidden;
                .developer-list-title {
                    padding: 0 40px;
                    height: 50px;
                    line-height: 50px;
                    background-color: #fafafa;
                    i {
                        font-size: 14px;
                        padding-right: 20px;
                    }
                }
                .developer-name {
                    color: #40474f;
                    font-weight: bold;
                    font-size: 16px;
                }
                .developer-tag {
                    padding: 0 40px;
                    background-color: #fafafa;
                    border-bottom: 1px solid #E5E5E5;
                    padding-bottom: 10px;
                }
                .developer-contacts {
                    color: #40474f;
                    font-size: 15px;
                }

                > .developer-child-list {

                    .developer-child-content {
                        margin: 0 40px;
                        border-bottom: 1px dashed #e5e5e5;
                        padding: 20px 0;
                        h3 {
                            color: #40474f;
                            font-size: 15px;
                            margin-bottom: 20px;
                            font-weight: bold;
                        }
                        p {
                            margin: 8px 0;
                        }

                        .line-right {
                            border-right: 1px solid #eef1f6;
                            height: 120px;
                        }

                        .date-view {
                            > span {
                                display: inline-block;
                                width: 44px;
                                height: 44px;
                                line-height: 44px;
                                text-align: center;
                                &:nth-child(2), &:nth-child(4) {
                                    width: 12px;
                                }
                            }
                        }

                        .btn-control {

                            .btn-expire {
                                display: table;
                                float: right;

                                .btn-expire-left {
                                    display: table-cell;
                                    vertical-align: middle;
                                    > span {
                                        display: block;
                                        margin: 10px;
                                    }
                                    > i {
                                        padding-left: 30px;
                                    }
                                }
                            }
                            i {
                                color: #e5e5e5;
                                font-size: 18px;
                                vertical-align: middle;
                                cursor: pointer;
                            }

                            .developer-renew {
                                display: inline-block;
                                width: 87px;
                                height: 35px;
                                line-height: 35px;
                                color: #2896f3;
                                border: 1px solid #2896f3;
                                border-radius: 20px;
                                text-align: center;
                                cursor: pointer;
                                margin: 36px;

                                &:hover {
                                    background-color: #2896f3;
                                    color: #fff;
                                }
                            }
                            .developer-delete {
                                display: inline-block;
                                width: 87px;
                                height: 35px;
                                line-height: 35px;
                                color: #757575;
                                border: 1px solid #757575;
                                border-radius: 20px;
                                text-align: center;
                                cursor: pointer;
                                margin: 36px;

                                &:hover {
                                    background-color: #757575;
                                    color: #fff;
                                }
                            }
                        }
                    }
                }

                .btn-addDeveloper {
                    line-height: 70px;
                    font-size: 15px;
                    .el-icon-circle-cross {
                        color: #20a0ff;
                        -moz-transform: rotate(45deg);
                        -webkit-transform: rotate(45deg);
                        -ms-transform: rotate(45deg);
                        transform: rotate(45deg);
                    }
                    .text-develop {
                        color: #20a0ff;
                        font-size: 14px;
                        padding-left: 10px;
                    }
                }
            }
        }

    }

    .mr20 {
        margin-right: 20px;
    }

    .ml20 {
        margin-left: 20px;
    }

    .renew-content {
        .el-col-height {
            height: 37px;
            line-height: 37px;
            display: inline-block;
        }
        .el-col {
            border-bottom: 1px dashed #ccc;
        }
    }



</style>
<script>
    import DeveloperList from '../../mockData/developer_list_mock_data';
    import titleInfo from '../common/title-info/title-info.vue';
    import searchBar from '../common/search-bar/search-bar.vue';
    export default{
        data() {
            return {
                keyWords: '',
                developerList: {
                    count: '',
                    items: [
                        {
                            childItems: []
                        }
                    ]
                },
                developerChildList: [],
                reNewDialog: {
                    visible: false,
                    title: '',
                    formData: {
                        newDate: ''
                    }
                }
            }
        },

        created() {
            this.getDeveloperList();
        },
        components:{
            titleInfo,
            searchBar
        },
        methods: {
            getDeveloperList(){
                var params = {}, headers = {}, _self = this;

                _self.developerList.count = DeveloperList.Data.count;
                _self.developerList.items = DeveloperList.Data.items;
                let childLength = DeveloperList.Data.items.length;
                for (let i = 0; i < childLength; i++) {
                    _self.developerChildList = DeveloperList.Data.items[i].childItems;
                }
            },

            handleCurrentChange(val) {
                console.log("current page---" + val);
            },

            handleSearch(value) {
                console.log("这里是父级组件的处理方法");
                console.log(value);
            },
            handleRefresh(){
                console.log("刷新事件的处理方法");
            },
            //续费
            handleRenewBuy() {
                var _self = this;

                _self.reNewDialog = {
                    visible: true,
                    title: '服务期续费',
                    formData: {
                        newDate: ''
                    }
                }
            }
        },

        mounted() {
            console.log("DOM");
        }
    }
</script>
