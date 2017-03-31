<template>
    <div class="component-wrapper">
        <el-row class="first-row" :gutter="20">
            <el-col class="business card" :span="6">
                <router-link to="business-management">
                    <div class="grid-content">
                        <h2>合作开发商</h2>
                        <div class="sub">
                            <div class="total">
                                <em>{{business}}</em>
                                <p>合作开发商总计</p>
                            </div>
                            <div class="new-in">
                                <em>12<i class="fa fa-long-arrow-up"></i></em>
                                <p>昨日新增</p>
                            </div>
                        </div>
                    </div>
                </router-link>
            </el-col>
            <el-col class="building card" :span="6">
                <router-link to="business-management">
                    <div class="grid-content">
                        <h2>供给新房</h2>
                        <div class="sub">
                            <div class="total">
                                <em>390</em>
                                <p>供给新房总计</p>
                            </div>
                            <div class="new-in">
                                <em>65<i class="fa fa-long-arrow-up"></i></em>
                                <p>昨日新增</p>
                            </div>
                        </div>
                    </div>
                </router-link>
            </el-col>
            <el-col class="broker-company card" :span="6">
                <router-link to="business-management">
                    <div class="grid-content">
                        <h2>拓展经纪门店</h2>
                        <div class="sub">
                            <div class="total">
                                <em>28</em>
                                <p>经纪门店总计</p>
                            </div>
                            <div class="new-in">
                                <em>9<i class="fa fa-long-arrow-up"></i></em>
                                <p>昨日新增</p>
                            </div>
                        </div>
                    </div>
                </router-link>
            </el-col>
            <el-col class="broker card" :span="6">
                <router-link to="business-management">
                    <div class="grid-content">
                        <h2>拓展经纪人</h2>
                        <div class="sub">
                            <div class="total">
                                <em>1201</em>
                                <p>经纪人总计</p>
                            </div>
                            <div class="new-in">
                                <em>159<i class="fa fa-long-arrow-up"></i></em>
                                <p>昨日新增</p>
                            </div>
                        </div>
                    </div>
                </router-link>
            </el-col>
        </el-row>
        <el-row class="second-row" :gutter="20">
            <el-col class="order-statistics" :span="18">
                <div class="grid-content">
                    <div class="operate">
                        <h2>订单统计</h2>
                        <el-select v-model="type" class="switch-date-type">
                            <el-option :label="'周'" :value="0"></el-option>
                            <el-option :label="'月'" :value="1"></el-option>
                            <el-option :label="'年'" :value="2"></el-option>
                        </el-select>
                    </div>
                    <div class="titles">
                        <div class="order-amount">
                            <h3>订单量</h3>
                            <div class="sub">
                                <div class="total">
                                    <em>483</em>
                                    <p>订单总量</p>
                                </div>
                                <div class="new-in">
                                    <em>96<i class="fa fa-long-arrow-up"></i></em>
                                    <p>昨日新增</p>
                                </div>
                            </div>
                        </div>
                        <div class="deal-amount">
                            <h3>成交量</h3>
                            <div class="sub">
                                <div class="total">
                                    <em>97</em>
                                    <p>成交总量</p>
                                </div>
                                <div class="new-in">
                                    <em>15<i class="fa fa-long-arrow-up"></i></em>
                                    <p>昨日新增</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="chart-wrapper"></div>
                </div>
            </el-col>
            <el-col class="news" :span="6">
                <div class="grid-content">
                    <h2>最新动态</h2>
                    <ul>
                        <li>
                            <p class="event-time">2月7日12:34:45</p>
                            <p class="event-describe">理想银泰城成交一套住宅；</p>
                        </li>
                        <li>
                            <p class="event-time">2月7日12:34:45</p>
                            <p class="event-describe">理想银泰城成交一套住宅；</p>
                        </li>
                        <li>
                            <p class="event-time">2月7日12:34:45</p>
                            <p class="event-describe">理想银泰城成交一套住宅；</p>
                        </li>
                        <li>
                            <p class="event-time">2月7日12:34:45</p>
                            <p class="event-describe">理想银泰城成交一套住宅；</p>
                        </li>
                        <li>
                            <p class="event-time">2月7日12:34:45</p>
                            <p class="event-describe">理想银泰城成交一套住宅；</p>
                        </li>
                        <li>
                            <p class="event-time">2月7日12:34:45</p>
                            <p class="event-describe">理想银泰城成交一套住宅；</p>
                        </li>
                        <li>
                            <p class="event-time">2月7日12:34:45</p>
                            <p class="event-describe">理想银泰城成交一套住宅；</p>
                        </li>
                        <li>
                            <p class="event-time">2月7日12:34:45</p>
                            <p class="event-describe">理想银泰城成交一套住宅；</p>
                        </li>
                        <li>
                            <p class="event-time">2月7日12:34:45</p>
                            <p class="event-describe">理想银泰城成交一套住宅；</p>
                        </li>
                        <li>
                            <p class="event-time">2月7日12:34:45</p>
                            <p class="event-describe">理想银泰城成交一套住宅；</p>
                        </li>
                        <li>
                            <p class="event-time">2月7日12:34:45</p>
                            <p class="event-describe">理想银泰城成交一套住宅；</p>
                        </li>
                        <li>
                            <p class="event-time">2月7日12:34:45</p>
                            <p class="event-describe">理想银泰城成交一套住宅；</p>
                        </li>
                        <li>
                            <p class="event-time">2月7日12:34:45</p>
                            <p class="event-describe">理想银泰城成交一套住宅；</p>
                        </li>
                        <li>
                            <p class="event-time">2月7日12:34:45</p>
                            <p class="event-describe">理想银泰城成交一套住宅；</p>
                        </li>
                        <li>
                            <p class="event-time">2月7日12:34:45</p>
                            <p class="event-describe">理想银泰城成交一套住宅；</p>
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
    .component-wrapper {
        width: 100%;

        .first-row {

            .grid-content {
                height: 170px;
                padding: 20px 30px;
                background-color: #fff;
                border-radius: 4px;
                box-sizing: border-box;

                h2 {
                    margin-bottom: 20px;
                    font-size: 20px;
                    color: #000;
                }
                .sub {

                    .new-in, .total {
                        display: inline-block;

                        em {
                            position: relative;
                            font-size: 30px;
                            font-weight: bold;
                            color: #666;

                            i {
                                position: absolute;
                                margin-left: 6px;
                                top: 6px;
                                font-size: 16px;
                            }
                        }
                        p {
                            margin-top: 20px;
                            font-size: 16px;
                            color: #666;
                        }
                    }

                    .new-in {
                        margin-left: 20px;
                        em {
                            font-weight: normal;
                            font-size: 24px;
                            color: #008ee6;
                        }
                    }
                }
            }
        }

        .second-row {
            margin-top: 20px;

            .order-statistics {

                .grid-content {
                    background-color: #fff;

                    .operate {
                        padding: 20px 30px 0;

                        h2 {
                            display: inline-block;
                            font-size: 20px;
                            color: #000;
                        }
                        .switch-date-type {
                            float: right;
                            display: inline-block;
                            overflow: hidden;
                            width: 60px;
                        }
                    }
                    .titles {
                        padding: 20px 30px;

                        .order-amount,
                        .deal-amount {
                            margin-right: 80px;
                            display: inline-block;

                            h3 {
                                margin-bottom: 10px;
                                font-size: 16px;
                                color: #666;
                            }
                            h3:before {
                                content: '';
                                margin-right: 15px;
                                display: inline-block;
                                width: 10px;
                                height: 10px;
                                border-radius: 10px;
                                background: #008ee6;
                            }

                            .sub {
                                margin-right: 20px;

                                .total,
                                .new-in {
                                    margin-right: 50px;
                                    display: inline-block;

                                    em {
                                        position: relative;
                                        font-size: 30px;
                                        font-weight: bold;
                                        color: #666;

                                        i {
                                            position: absolute;
                                            margin-left: 6px;
                                            top: 6px;
                                            font-size: 16px;
                                        }
                                    }
                                    p {
                                        margin-top: 20px;
                                        font-size: 16px;
                                        color: #666;
                                    }
                                }

                                .new-in em {
                                    font-weight: normal;
                                    font-size: 24px;
                                    color: #008ee6;
                                }
                            }
                        }
                        .deal-amount {
                            h3:before {
                                background: #9de7ff;
                            }
                        }
                    }
                    .chart-wrapper {
                        width: 100%;
                        height: 300px;
                    }
                }
            }

            .news {
                vertical-align: top;

                .grid-content {
                    height: 530px;
                    background-color: #fff;
                    padding: 20px;
                    box-sizing: border-box;

                    h2 {
                        margin-bottom: 10px;
                        font-size: 20px;
                    }
                    ul {
                        height: 440px;
                        box-sizing: border-box;
                        overflow-y: auto;

                        li {
                            margin-bottom: 10px;

                            p {
                                font-size: 14px;
                                height: 20px;
                                line-height: 20px;
                            }
                            .event-time {
                                color: #666;
                            }
                            .event-describe {
                                color: #000;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<script>
    import {homeService} from '../../service/index'
    import echarts from 'echarts'

    export default{

        data(){
            return {
                type: 0,
                business: 0
            }
        },
        methods: {
            getData(){
                homeService.getHomeData().then(
                    data => {
                        this.type = data.type;
                        this.business = data.business;
                    }
                );
            },

            renderChart(){
                var homeChart = echarts.init(document.querySelector(".chart-wrapper"));
                var option = {
                    grid: {
                        left: '-2%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            axisLine: {
                                show: false
                            },
                            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            min: 0,
                            max: 2000,
                            interval: 500,
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            },
                        }
                    ],
                    series: [
                        {
                            name: '订单量',
                            type: 'line',
                            stack: '总量',
                            smooth: true,
                            showSymbol: false,
                            lineStyle: {
                                normal: {
                                    show: false,
                                    color: '#9de7ff'
                                }
                            },
                            areaStyle: {
                                normal: {
                                    color: '#9de7ff'
                                }
                            },
                            data: [120, 506, 101, 305, 354, 230, 210]
                        },
                        {
                            name: '成交量',
                            type: 'line',
                            stack: '总量',
                            smooth: true,
                            showSymbol: false,
                            lineStyle: {
                                normal: {
                                    show: false,
                                    color: '#3fadf8'
                                }
                            },
                            areaStyle: {
                                normal: {
                                    color: '#3fadf8'
                                }
                            },
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                };
                homeChart.setOption(option);
            }
        },
        created(){
            this.getData();
        },
        mounted(){
            this.renderChart();
        }

    }


</script>
