<template>
    <div>
        <!--<el-row class="total-info">-->
            <!--<el-col>-->
                <!--<span>今日供给<em>{{newBuildings}}</em>套新房</span>-->
                <!--<span>总供给<em>{{buildingList.length}}</em>套新房</span>-->
            <!--</el-col>-->
        <!--</el-row>-->
        <title-info :titles="[{first:'今日供给',value:newBuildings,last:'套新房'},{first:'总供给',value:buildingList.length,last:'套新房'}]"></title-info>
        <el-row class="search">
            <el-col>
                <span>销冠渠道</span>
                <el-button type="primary">全部（{{buildingList.length}}）</el-button>
                <el-button>上架（{{onSaleBuildings}}）</el-button>
                <el-button>审核中（{{auditBuildings}}）</el-button>
                <el-button>下架（{{noSaleBuildings}}）</el-button>
                <el-button>审核未通过（{{rejectBuildings}}）</el-button>
            </el-col>
        </el-row>
        <el-row class="building-list" :gutter="20">
            <el-col v-for="building in buildingList" :key="building.id" class="building-wrapper" :span="8">
                <el-card>
                    <img src="../../assets/images/building.jpg" alt="楼盘图片">
                    <div class="building-info">
                        <h2>{{building.title}}</h2>
                        <div class="tags">
                            <el-tag v-for="tag in building.tags" :key="tag" type="danger">{{tag}}</el-tag>
                        </div>
                        <p>均价：{{building.averagePrice}}元/m²</p>
                        <p>居室：{{building.household}}</p>
                        <p>面积：{{building.area}}m²</p>
                        <p>地址：{{building.addr}}</p>
                    </div>
                    <div class="sale-info">
                        <!--这里有几种状态：重新上架(re-shelves)，审核(audit)，销冠上架(shelves)-->
                        <button v-if="building.status!=4" :class="operateStatusClasses[building.status]">
                            {{operateStatusFilter(building.status)}}
                        </button>
                        <div class="sale-status-edit">
                            <!--这里有几种状态：已上架(0-on-sale)，审核中（1-auditing），审核未通过(2-reject)，已下架(3-off-shelf),信息待完善(4-imperfect)-->
                            <span class="sale-status"
                                  :class="saleStatusClasses[building.status]">{{saleStatusFilter(building.status)}}</span>
                            <router-link to="building-management/add-nav">
                                <button class="edit"><i class="fa fa-angle-right"></i></button>
                            </router-link>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="pagination-wrapper">
                <el-pagination
                    layout="prev, pager, next"
                    :total="50">
                </el-pagination>
            </el-col>
        </el-row>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../assets/scss/basic/variable";
    .search {
        padding: 15px;
        font-size: 14px;
        color: #666;

        span {
            margin-right: 20px;
        }
    }

    .building-list {

        .building-wrapper {
            margin-bottom: 15px;

            img {
                width: 100%;
                height: 50%;
            }
            .building-info {
                padding-bottom: 10px;

                h2 {
                    margin-bottom: 5px;
                    font-size: 24px;
                    color: #000;
                }
                .tags {
                    margin-bottom: 15px;

                    span {
                        margin-right: 10px;
                    }
                }
                p {
                    height: 20px;
                    line-height: 20px;
                    color: #666;
                    font-size: 14px;
                }
            }
            .sale-info {
                height: 30px;
                padding: 15px 0;
                border-top: 1px dashed #666;

                > button {
                    width: 70px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    background: #fff;
                    border-radius: 30px;
                }
                > button.re-shelves {
                    border: 1px solid $green;
                    color: $green;
                }
                > button.shelves {
                    border: 1px solid $blue;
                    color: $blue;
                }
                > button.audit {
                    border: 1px solid $red;
                    color: $red;
                }
                .sale-status-edit {
                    float: right;
                    margin-top: 5px;
                    height: 20px;
                    font-size: 14px;

                    .imperfect {
                        color: $green;
                    }
                    .auditing {
                        color: $green;
                    }
                    .on-sale {
                        color: $blue;
                    }
                    .reject {
                        color: $red;
                    }
                    .off-shelf {
                        color: $grey;
                    }
                    .edit {
                        width: 16px;
                        height: 16px;
                        line-height: 10px;
                        text-align: center;
                        padding-left: 1px;
                        background: #fff;
                        color: #666;
                        border: 1px solid #666;
                        border-radius: 16px;
                        box-sizing: border-box;
                    }
                }
            }
        }
    }

    .pagination-wrapper {
        text-align: right;
    }
</style>
<script>
    import {buildingService} from '../../service/index'

    // 引入title-info组件
    import titleInfo from '../common/title-info/title-info.vue'
    export default {

        data(){
            return {
                newBuildings: 0,
                onSaleBuildings: 0,
                auditBuildings: 0,
                noSaleBuildings: 0,
                rejectBuildings: 0,
                buildingList: [],
                operateStatusClasses: ['re-shelves', 'audit', 'shelves', 'shelves', ''],
                saleStatusClasses: ['on-sale', 'auditing', 'reject', 'off-shelf', 'imperfect']
            }
        },
        created(){
            this.getBuildingData();
        },
        mounted(){

        },
        components: {
            // 声明要引用的组件,这里的命名与html中的引用名直接相关，
            // vue2.0能够区分标签中的大小写字母，但是，为了规范代码，
            // html中还是使用小写带中划线的方式，这里titleInfo会自动匹配title-info标签
            titleInfo
        },
        computed: {},
        methods: {
            getBuildingData(){
                buildingService.getBuildingData().then(
                    data => {
                        this.newBuildings = data.Data.newBuildings;
                        this.onSaleBuildings = data.Data.onSaleBuildings;
                        this.auditBuildings = data.Data.auditBuildings;
                        this.noSaleBuildings = data.Data.noSaleBuildings;
                        this.rejectBuildings = data.Data.rejectBuildings;
                        this.buildingList = data.Data.buildingList;
                    }
                ).catch(
                    error => {
                        console.log(error);
                    }
                )
            },
            operateStatusFilter: function (status) {
                var operateStatusStr = ['重新上架', '审核', '销冠上架', '销冠上架', '信息待完善'];
                return operateStatusStr[status];
            },
            saleStatusFilter: function (status) {
                var saleStatusStr = ['已上架', '审核中', '审核未通过', '已下架', '信息待完善'];
                return saleStatusStr[status];
            }
        }
    }
</script>
