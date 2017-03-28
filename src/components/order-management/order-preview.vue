<template>
    <div class="order-preview">
        <el-breadcrumb separator="|" class="header-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/order-management' }" class="go-back"><i class="el-icon-arrow-left"></i>返回</el-breadcrumb-item>
            <el-breadcrumb-item class="current-text">查看订单</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row class="operate">
            <el-col :span="6">
                <el-input class="search-input"
                        v-model="keyWords"
                        @keypress.native="keypress"
                        placeholder="请输入搜索关键词">
                    <el-button slot="prepend" @click="handleSearch" icon="search"></el-button>
                </el-input>
            </el-col>
            <el-col :span="2" class="text-center">
                <el-button class="btn-refresh"><i class="fa fa-refresh"></i>刷新</el-button>
            </el-col>
            <el-col :span="4">
                <el-button class="btn-export"><i class="el-icon-upload2"></i>导出</el-button>
            </el-col>
        </el-row>
        <el-row class="btn-list">
            <el-col :span="2">
                <el-button class="btn-all btn-hover">全部<i>（59）</i></el-button>
            </el-col>
            <el-col :span="2" class="ml20">
                <el-button class="btn-push-cusomter btn-hover">推客<i>（59）</i></el-button>
            </el-col>
            <el-col :span="2" class="ml20">
                <el-button class="btn-visited btn-hover">到访<i>（59）</i></el-button>
            </el-col>
            <el-col :span="2" class="ml20">
                <el-button class="btn-voucher btn-hover">认筹<i>（59）</i></el-button>
            </el-col>
            <el-col :span="2" class="ml20">
                <el-button class="btn-sell btn-hover">认购<i>（59）</i></el-button>
            </el-col>
            <el-col :span="2" class="ml20">
                <el-button class="btn-deal btn-hover">成交<i>（59）</i></el-button>
            </el-col>
        </el-row>
        <div class="order-table">
            <el-table :data="tableData" stripe border style="width: 100%">
                <el-table-column type="index" label="序号" width="80"></el-table-column>
                <el-table-column prop="buildingName" label="楼盘名称"></el-table-column>
                <el-table-column prop="companyShop" label="经纪门店"></el-table-column>
                <el-table-column prop="customerName" label="客户" width="120"></el-table-column>
                <el-table-column prop="customerPhone" label="手机号"></el-table-column>
                <el-table-column prop="status" label="状态">
                    <template scope="scope">
                        <span >{{scope.row.statusText}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="date" label="最新操作时间"></el-table-column>
            </el-table>
            <div class="block text-right mt20">
                <el-pagination
                  layout="prev, pager, next"
                  :total="50">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
	.order-preview{

        .header-breadcrumb{
            height: 55px;
            line-height: 55px;
            border-bottom: 1px solid #e5e5e5;

            .current-text{
                font-size: 16px;
                margin-left: 10px;
            }
        }

        .operate{
            margin: 15px 0;

            .el-button{
                i{
                    padding-right: 5px;
                }
            }
        }

        .btn-list{
            margin-bottom: 15px;
            .btn-hover{
                &:hover{
                    background-color: #2795ee;
                    color: #fff;
                }
            }
        }

        .order-table{
            background-color: #fff;
            padding: 15px;
            border-radius: 4px;
        }
	}
</style>
<script>
    import { orderService } from '../../service/order-management/order.service'
    export default{
        data() {
            return {
                keyWords: '',
                tableData: []
            }
        },

        created() {
            this.getOrderTable();
        },

        methods: {
            getOrderTable(){
                orderService.getOrderTableData().then((response) => {
                    var result = response.data.Data;

                    result.forEach(function(item, index){
                        switch(item.status){
                            case 1: 
                                item.statusText = "等待界定";
                                break;
                            case 2: 
                                item.statusText = "界定成功";
                                break;
                            case 3: 
                                item.statusText = "界定失败";
                                break;
                            case 4: 
                                item.statusText = "界定成功，但未带看失效";
                                break;
                            case 5: 
                                item.statusText = "界定推客";
                                break;
                            default: 
                                break;
                        }
                    });
                    this.tableData = result;
                });
            },

            handleCurrentChange(val) {
                console.log("current page---" + val);
            },

            handleSearch(value) {
                console.log(this.keyWords);
            },
            //键盘事件
            keypress(event){
                if(event.keyCode == 13){
                    console.log(this.keyWords);
                }
            }
        },

        mounted() {
            console.log("DOM");
        }
    }    
</script>
