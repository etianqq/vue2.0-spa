<template>
    <div class="order-management">
        <div class="total-info">
            <div class="total-left">
                <span class="tips">成交<i class="color_black">24</i>套</span>
                <span class="tips">推客<i class="color_black">87</i>位</span>
                <span class="tips">订单<i class="color_black">329</i>个</span>
            </div>
        </div>
        <div class="operate">
	        <el-row>
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
	        </el-row>
        </div>
        <div class="order-content">
        	<ul id="order-list">
        		<li v-for="item in list">
        			<div class="list-box">
        				<div class="list-sub-box">
        					<p class="building-name">{{item.buildingName}}</p>
        					<p class="company">{{item.company}}</p>
        				</div>
        				<div class="list-sub-box">
        					<p class="title">成交<i class="unit">（套）</i></p>
        					<p class="count">{{item.dealCount}}</p>
        				</div>
        				<div class="list-sub-box">
        					<p class="title">推客<i class="unit">（位）</i></p>
        					<p class="count">{{item.pushCount}}</p>
        				</div>
        				<div class="list-sub-box">
        					<p class="title">订单<i class="unit">（个）</i></p>
        					<p class="count">{{item.orderCount}}</p>
        				</div>
        				<div class="list-link">
        					<router-link to="/order-management/order-preview"><i class="fa fa-chevron-right"></i></router-link>
        				</div>
        			</div>
        		</li>
        	</ul>
            <div class="block text-right">
                <el-pagination
                  layout="prev, pager, next"
                  :total="50">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
	.order-management{

		.total-info{
            width: 100%;
            height: 60px;
            line-height: 60px;
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

                .tips{
                    &:last-child{background: none;}
                    padding-right: 20px;
                    display: inline-block;
                    font-size: 14px;
                    letter-spacing: 1px;
                    background: url("../../assets/images/mid_line.jpg") no-repeat;
                    background-position: right;
                    text-indent: 20px;
                    i{
                        font-weight: bold;
                        padding: 0 5px;
                    }
                }
            }
        }

        .operate{
        	padding: 20px 0;

        	.btn-refresh{

                i{
                    padding-right: 5px;
                }
            }
        }

        #order-list{
        	>li{
				background-color: #fff;
				border-radius: 4px;
				margin-bottom: 14px;
        		.list-box{

        			display:-webkit-flex;
        			display:flex;

        			.list-sub-box{
        				-webkit-flex:1;
        				flex:1;
						margin: 28px 30px 28px 36px;
						border-right: 1px solid #f8f8f8;
						&:first-of-type{
							border-right: 1px dashed #e7e7e7;
							margin: 0;
							padding: 28px 30px 28px 36px;
						}
						&:nth-child(4){
							border-right: none;
						}
        				.building-name{
        					color: #333;
        					font-size: 18px;
        					font-weight: bold;
        					margin-bottom: 10px;
        				}

        				.company{
        					color: #999;
        					font-size: 14px;
        				}

        				.title{
							color: #333;
							font-size: 14px;
							font-weight: bold;
							margin-bottom: 10px;
							.unit{
								color: #999;
							}
        				}
        				.count{
        					color: #999;
        					font-size: 20px;

        					&:hover{
        						color: #2698f0;
        					}
        				}
        			}

        			.list-link{
        				margin: auto 0;
        				padding-right: 30px;
        				cursor: pointer;
        				i{
        					font-size: 16px;
        					color: #999;
        				}
        			}
        		}
        	}
        }
	}
</style>
<script>
    import { orderService } from '../../service/index'
    export default{
        data() {
            return {
                keyWords: '',
                list: []
            }
        },

        created() {
            this.getOrderList();
        },

        methods: {
            getOrderList(){
                orderService.getOrderListData().then((response) => {
                    this.list = response;
                }).catch(error => {
                    console.log(error);
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
