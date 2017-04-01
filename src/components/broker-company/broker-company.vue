<template>
    <div class="brokerList">
        <title-info :titles="
        [
            {first:'今日新增经纪人',value:24,last:'人'},
            {first:'注册经纪人总共',value:87,last:'人'},
            {first:'今日新增拓展经纪门店',value:3,last:'人'},
            {first:'拓展门店总共',value:329,last:'人'}
            ]"></title-info>
        <!--<div class="total-info">-->
            <!--<div class="total-left">-->
                <!--<span class="tips">今日新增经纪人<em class="color_black">24</em>人,&nbsp;</span>-->
                <!--<span class="tips">注册经纪人总共<em class="color_black">87</em>人</span>-->
                <!--<span class="tips">&nbsp;&nbsp;|&nbsp;&nbsp;</span>-->
                <!--<span class="tips">今日新增拓展经纪门店<em class="color_black">329</em>个,&nbsp;</span>-->
                <!--<span class="tips">拓展门店总共<em class="color_black">329</em>个</span>-->
            <!--</div>-->
        <!--</div>-->
        <el-row class="operate">
            <el-col :span="8">
                <search-bar :handleSearchChild="handleSearch" :handleRefresh="refreshHandler"></search-bar>
            </el-col>
            <!--<el-col :span="6">-->
                <!--<el-input class="search-input"-->
                        <!--v-model="keyWords"-->
                        <!--@keypress.native="keypress"-->
                        <!--placeholder="请输入搜索关键词">-->
                    <!--<el-button slot="prepend" @click="handleSearch" icon="search"></el-button>-->
                <!--</el-input>-->
            <!--</el-col>-->
            <!--<el-col :span="2" class="text-center">-->
                <!--<el-button class="btn-refresh" @click="refreshHander"><i class="fa fa-refresh"></i>刷新</el-button>-->
            <!--</el-col>-->
            <el-col class="expire-tips" :span="4">
                <el-button><i class="fa fa-circle"></i>即将到期（11）</el-button>
            </el-col>
            <el-col :span="5" :offset="7" class="text-right">
                <router-link to="/broker-addCompany" class="btn-link"><i class="el-icon-circle-cross"></i><i class="text-develop">添加开发商</i></router-link>
            </el-col>
        </el-row>
        <div class="developer">
            <ul>
                <li>
                    <el-row class="developer-list-title">
                        <el-col :span="10" class="developer-name">
                            <span>绿城华瑞</span>
                        </el-col>
                    </el-row>
                    <ul class="developer-child-list">
                        <li>
                            <el-row class="developer-child-content">
                                <el-col :span="6" class="developer-info line-right">
                                    <h3>杭州绿城华瑞房地产代理有限公司</h3>
                                    <div>
                                        <p class="color_grey fs14">地址：<span>迎泽区滨盛路与长河路交叉路口</span></p>
                                        <p class="color_grey fs14">对接人：<span>宋仲基</span></p>
                                        <p class="color_grey fs14">联系电话：<span>13455829357</span></p>
                                    </div>
                                </el-col>
                                <el-col :span="6" class="developer-service text-center line-right">
                                    <h3>注册经纪人<em>（位）</em></h3>
                                    <div class="brokerNum">
                                        <span class="number-view">11</span>
                                    </div>
                                </el-col>
                                <el-col :span="4" :offset="2" class="developer-sign-date ">
                                    <h3>门店代码</h3>
                                    <div class="brokerNumCode">
                                        <span class="number-view">LC001</span>
                                    </div>
                                </el-col>
                                <el-col :span="6" class="btn-control text-right pr20">
                                    <span class="developer-renew" @click="accountHandler">账号</span>
                                    <i class="fa fa-chevron-right"></i>
                                </el-col>
                            </el-row>
                        </li>
                    </ul>
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

        <!-- 管理员账号dialog -->
        <el-dialog :title="reNewDialog.title" v-model="reNewDialog.visible" size="small">
            <div class="renew-content">
                <!-- <span>设置管理员账号</span>
                <span>
                    <el-input placeholder="请输入月份"></el-input>
                </span>
                <span>个月</span> -->
                <el-row class="renew-row">
                    <el-col :span="2"></el-col>
                  <el-col :span="4"><div class="">登录名：</div></el-col>
                  <el-col :span="12"><el-input placeholder="请输入月份"></el-input></el-col>
                </el-row>
                <el-row class="renew-row">
                    <el-col :span="2"></el-col>
                  <el-col :span="4"><div class="">密码：</div></el-col>
                  <el-col :span="12"><el-input placeholder="请输密码"></el-input></el-col>
                </el-row>
                <el-row class="renew-row">
                    <el-col :span="2"></el-col>
                  <el-col :span="4"><div class="">确认密码：</div></el-col>
                  <el-col :span="12"><el-input placeholder="请再次输入密码"></el-input></el-col>
                </el-row>
                <el-row class="renew-row">
                    <el-col :span="2"></el-col>
                  <el-col :span="4"><div class="">到期日期：</div></el-col>
                  <el-col :span="12"><!-- <el-input placeholder="请输入日期"></el-input> -->
                      <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择日期"
                        :picker-options="pickerOptions0">
                      </el-date-picker>
                  </el-col>
                </el-row>
                <el-row class="renew-row">
                    <el-col :span="2"></el-col>
                  <el-col :span="4"><div class="">联系方式：</div></el-col>
                  <el-col :span="12"><el-input placeholder="请输入联系方式"></el-input></el-col>
                </el-row>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="reNewDialog.visible = false">取 消</el-button>
                <el-button type="primary" @click="reNewDialog.visible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import titleInfo from '../common/title-info/title-info.vue'
    import searchBar from '../common/search-bar/search-bar.vue'
    export default{
        data() {
            return {
                pickerOptions0: {
                  disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                  }
                },
                value1: '',
                keyWords: '',
                reNewDialog: {
                    visible: false,
                    title: '',
                    formData: {
                        newDate: ''
                    }
                }
            }
        },

        components:{
            titleInfo,
            searchBar
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
        },

        methods: {
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
                console.log(value);
            },
            refreshHandler:function (){
                this.keyWords = '';
                console.log('父级组件的刷新');
            },
            //键盘事件
            keypress(event){
                if(event.keyCode == 13){
                    console.log(this.keyWords);
                }
            },
            //账号管理
            accountHandler() {
                var _self = this;

                _self.reNewDialog = {
                    visible: true,
                    title: '设置管理员账号',
                    formData: {
                        newDate: ''
                    }
                }
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    em{
        font-style: normal;
        font-weight: bold;
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

    .brokerList{
        padding-right: 20px;

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

                >.developer-child-list{

                    .developer-child-content{
                        margin: 0 40px;
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

                        .brokerNum{
                            text-align: left;
                            text-align: center;
                            >span{
                                display: inline-block;
                                height: 100px;
                                line-height: 100px;
                                text-align: center;
                                font-size:20px;
                            }
                        }
                        .brokerNumCode{
                            text-align: left;
                            >span{
                                display: inline-block;
                                height: 100px;
                                line-height: 100px;
                                text-align: center;
                                font-size:20px;
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
        .renew-row{
            margin-bottom:10px;
        }
        div{
            height:36px;
            line-height:36px;
        }
    }

</style>
