<template>
    <div class="businessList">
        <div class="total-info">
            <div class="total-left">
                <span class="tips">今日售卖<em class="color_black">24</em>个月</span>
                <span class="tips">剩余销冠服务<em class="color_black">87</em>个月</span>
                <span class="tips">累计购买<em class="color_black">329</em>个月</span>
            </div>
            <div class="total-right">
                <span class="go-buy">去购买<i class="fa fa-chevron-right"></i></span>
            </div>
        </div>
        <el-row class="operate">
            <el-col :span="6">
                <el-input class="search-input"
                        v-model="keyWords"
                        @keypress.native="keypress"
                        placeholder="请输入搜索关键词">
                    <el-button slot="prepend" @click="handleSearch" icon="search"></el-button>
                </el-input>
                <!-- <el-input class="search-input"
                        placeholder="请输入搜索关键词"
                        icon="search"
                        v-model="keyWords"
                        @keypress.native="keypress"
                        :on-icon-click="handleSearch">
                </el-input> -->
            </el-col>
            <el-col :span="2" class="text-center">
                <el-button class="btn-refresh"><i class="fa fa-refresh"></i>刷新</el-button>
            </el-col>
            <el-col class="expire-tips" :span="4">
                <el-button><i class="fa fa-circle"></i>即将到期（4）</el-button>
            </el-col>
            <el-col :span="5" :offset="7" class="text-right">
                <router-link to="/home/business-addDeveloper" class="btn-link"><i class="el-icon-circle-cross"></i><i class="text-develop">添加开发商</i></router-link>
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
                        <el-col :span="8" :offset="4" class="developer-contacts">{{item.developerContacts}}({{item.developerPosition}}) {{item.developerContactsPhone}}</el-col>
                        <el-col :span="2" :offset="2" class="text-right"><i class="fa fa-arrow-circle-right cur_pointer"></i></el-col>
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
                                    <h3>剩余销冠服务</h3>
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
                                        <p class="color_grey fs14">共购买<span>{{childItem.subBuildingTotalDate}}</span>个月</p>
                                    </div>
                                </el-col>
                                <el-col :span="6" class="btn-control text-right pr20">
                                    <span class="developer-renew" @click="handleRenewBuy">续费</span>
                                    <i class="fa fa-chevron-right"></i>
                                </el-col>
                            </el-row>
                        </li>
                    </ul>
                    <el-row class="text-center">
                        <el-col>
                            <span class="btn-addDeveloper">
                                <i class="el-icon-circle-cross"></i><i class="text-develop">添加楼盘</i>
                            </span>
                        </el-col>
                    </el-row>
                </li>
            </ul>
            <div class="block text-right" style="margin-bottom: 60px;">
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
                <span>新增销冠服务</span>
                <span>
                    <el-input placeholder="请输入月份"></el-input>
                </span>
                <span>个月</span>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="reNewDialog.visible = false">取 消</el-button>
                <el-button type="primary" @click="reNewDialog.visible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
    //&bull;
    em{
        font-style: normal;
        font-weight: bold;
    }
    i{
        font-style: normal;
    }
    ul,ol,li{
        padding: 0;
        margin: 0;
    }
    .clearfix::after {
        display: block;
        content: "";
        clear: both;
    }   
    .color_black{
        color: #000;
    }
    .text-center{
        text-align: center;
    }
    .text-right{
        text-align: right;
    }
    .fs14{
        font-size: 14px;
    }
    .pr20{
        padding-right: 20px;
    }
    .cur_pointer{
        cursor: pointer;
    }

    .businessList{
        padding-top: 10px;
        padding-right: 20px;
        min-width: 950px;
        overflow-x: auto;
        .total-info{
            width: 100%;
            height: 60px;
            line-height: 60px;
            display:-webkit-flex;
            display:flex;
            position: relative;
            &:after{
                position: absolute;
                right: 0;
                bottom: 0;
                left: 0;
                height: 1px;
                content: '';
                background-color: #e5e5e5;
                width: 100%;
            }
            .total-left{
                -webkit-flex:3;flex:3;
                .tips{
                    &:nth-child(1){width: 180px;}
                    &:last-child{background: none;}
                    width: 220px;
                    display: inline-block;
                    font-size: 14px;
                    letter-spacing: 1px;
                    background: url("../../assets/images/mid_line.jpg") no-repeat;
                    background-position: right;
                    text-indent: 20px;
                    em{
                        letter-spacing: 0px;
                        padding: 0 5px;
                    }
                }
            }
            .total-right{
                -webkit-flex:1;flex:1;
                text-align: right;
                margin-right: 60px;
                .go-buy{
                    color: #008ee5;
                    font-weight: bold;
                    cursor: pointer;

                    .fa{padding-left: 5px;}
                }
            }
        }

        .operate{
            padding-top: 15px;
            padding-bottom: 15px;
            position: relative;
            .btn-refresh{
                .fa-refresh{
                    padding-right: 5px;
                }
            }
    
            .expire-tips{
                .fa-circle{
                    font-size: 12px;
                    padding-right: 5px;
                    color: #e96151;
                    -moz-transform:scale(.6);
                    -webkit-transform:scale(.6);
                    -ms-transform:scale(.6);
                    transform:scale(.6);
                }
            }
            
            .btn-link{
                display: inline-block;
                line-height: 1;
                white-space: nowrap;
                cursor: pointer;
                background: #fff;
                border: 1px solid #bfcbd9;
                color: #1f2d3d;
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
                .el-icon-circle-cross{
                    -moz-transform:rotate(45deg);
                    -webkit-transform:rotate(45deg);
                    -ms-transform:rotate(45deg);
                    transform:rotate(45deg);
                }
                .text-develop{
                    font-style: normal;
                    padding-left: 10px;
                }
            }
        }

        .developer{
            max-height: 800px;
            overflow-y: auto;
            >ul>li{
                background-color: #fff; 
                border: 1px solid #E5E5E5;
                border-radius: 4px;
                margin-bottom: 20px;
                overflow: hidden;
                .developer-list-title{
                    padding: 0 40px;
                    height: 50px;
                    line-height: 50px;
                    background-color: #fafafa;
                    i{
                        font-size: 14px;
                        padding-right: 20px;
                    }
                }
                .developer-name{
                    color: #40474f;
                    font-weight: bold;
                    font-size: 16px;
                }
                .developer-tag{
                    padding: 0 40px;
                    background-color: #fafafa;
                    border-bottom: 1px solid #E5E5E5;
                    padding-bottom: 10px;
                }
                .developer-contacts{
                    color: #40474f;
                    font-size: 15px;
                }

                >.developer-child-list{

                    .developer-child-content{                  
                        margin: 0 40px;
                        border-bottom: 1px dashed #e5e5e5;
                        padding: 20px 0;
                        h3{
                            color: #40474f;
                            font-size: 15px;
                        }
                        p{
                            margin: 8px 0;
                        }
                        
                        .line-right{
                            border-right: 1px solid #eef1f6;
                            height: 120px;
                        }

                        .date-view{
                            >span{
                                display: inline-block;
                                width: 44px;
                                height: 44px;
                                line-height: 44px;
                                text-align: center;
                                &:nth-child(2),&:nth-child(4){
                                    width: 12px;
                                }
                            }
                        }
                        
                        .btn-control{
                            i{
                                color: #e5e5e5;
                                font-size: 18px;
                                vertical-align: middle;
                                cursor: pointer;
                            }
                        }
                        .developer-renew{
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
                        }
                    }
                }
                
                .btn-addDeveloper{
                    color: #2896f3;
                    height:  70px;
                    line-height: 70px;   
                    font-size: 15px;    
                    cursor: pointer;        
                    .el-icon-circle-cross{
                        -moz-transform:rotate(45deg);
                        -webkit-transform:rotate(45deg);
                        -ms-transform:rotate(45deg);
                        transform:rotate(45deg);
                    }
                    .text-develop{
                        font-style: normal;
                        padding-left: 10px;
                    }
                }
            }           
        }

        /*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
        .developer::-webkit-scrollbar{
            width: 4px;
            height: 4px;
            background-color: #f5f5f5;
        }
        /*定义滚动条的轨道，内阴影及圆角*/
        .developer::-webkit-scrollbar-track{
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.1);
            border-radius: 10px;
            background-color: #f0f0f0;
        }
        /*定义滑块，内阴影及圆角*/
        .developer::-webkit-scrollbar-thumb{
            height: 5px;
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background-color: #e5e5e5;
        }
    }

    .renew-content{
        display: table;
        width: 100%;
        >span{
            display: table-cell;
        }
    }

</style>
<script>
    import DeveloperList from '../../mockData/developer_list_mock_data';
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

        methods: {
            getDeveloperList(){
                var params = {},headers = {}, _self = this;

                console.log("111");
                _self.developerList.count = DeveloperList.Data.count;
                _self.developerList.items = DeveloperList.Data.items;
                let childLength = DeveloperList.Data.items.length;
                for(let i = 0; i < childLength; i++){
                    _self.developerChildList = DeveloperList.Data.items[i].childItems;
                }

                // this.$http.get('../../mockData/business_mock_data.json',
                //     {
                //         params: params,
                //         headers: headers
                //     })
                //     .then((response) => {
                //         console.log(response);
                //     },(response) => {
                //         console.log("error response");
                //     })
                //     .catch(function(response) {
                //         //do something  
                //     });
            },

            handleCurrentChange(val) {
                $(".el-pager li").css({
                    'background': 'none',
                    'border': 'none'
                });
                $(".el-pagination button").css('color', '#97a8be');
                $(".el-pager li.active").css('background', '#20a0ff');
                $('.el-pagination button.disabled').css('color', '#d1dbe5');
            },

            handleSearch(value) {
                console.log(this.keyWords);
            },
            //键盘事件
            keypress(event){
                if(event.keyCode == 13){
                    console.log(this.keyWords);
                }
            },
            //续费
            handleRenewBuy() {
                var _self = this;

                _self.reNewDialog = {
                    visible: true,
                    title: '销冠服务期续费',
                    formData: {
                        newDate: ''
                    }
                }
            }
        },

        mounted() {
            $('.btn-prev').find('i').removeClass('el-icon-arrow-left').addClass('el-icon-d-arrow-left');
            $('.btn-next').find('i').removeClass('el-icon-arrow-right').addClass('el-icon-d-arrow-right');
            $('.el-pager li').css({
                'margin-left': '5px',
                'background': 'none',
                'border-radius': '14px',
                'border': 'none'
            });
            $('.el-pager li.active').css('background', '#20a0ff');
            $('.el-pagination button.disabled').css('color', '#d1dbe5');
            $('.el-pager li.el-icon-more').css('background', 'none');
            $('.el-pagination .btn-prev').css({
                'border': 'none',
                'background': 'none'
            });
            $('.el-pagination .btn-next').css({
                'border': 'none',
                'background': 'none'
            });
            $('.el-autocomplete-suggestion__wrap').css('background', 'none');
        }
    }
</script>
