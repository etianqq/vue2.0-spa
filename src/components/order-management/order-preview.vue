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
            <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="日期"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
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
	}
</style>
<script>
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
                },
                tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
            }
        },

        created() {
            this.getDeveloperList();
        },

        methods: {
            getDeveloperList(){
                console.log("this is api")

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
