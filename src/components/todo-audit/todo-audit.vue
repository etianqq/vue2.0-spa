<template>
    <div class="todo-audit">
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
            <el-col :span="1"><span class="filter-text">筛选</span></el-col>
            <el-col :span="2" class="mr20">
            	<el-button class="btn-all" :class="[activeName == 'all' ? 'active' : '']" @click="handleSelectType('all')">全部<i>（59）</i></el-button>
            </el-col>
            <el-col :span="2" class="mr20">
            	<el-button class="btn-property" :class="[activeName == 'property' ? 'active' : '']" @click="handleSelectType('property')">房产<i>（59）</i></el-button>
            </el-col>
            <el-col :span="2" class="mr20">
            	<el-button class="btn-finance" :class="[activeName == 'finance' ? 'active' : '']" @click="handleSelectType('finance')">金融<i>（59）</i></el-button>
            </el-col>
        </el-row>
        <div class="todo-table">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column type="index" label="序号" width="60"></el-table-column>
                <el-table-column prop="buildingName" label="楼盘名称"></el-table-column>
                <el-table-column prop="administrativeRegion" label="行政区"></el-table-column>
                <el-table-column prop="type" label="类目" width="100"></el-table-column>
                <el-table-column prop="launchCity" label="投放城市"></el-table-column>
                <el-table-column prop="avgPrice" label="均价(元/㎡)"></el-table-column>
                <el-table-column prop="commission" label="佣金"></el-table-column>
                <el-table-column label="操作">
                	<template scope="scope">
                		<span class="check mr10">查看</span>
                		<span class="audit">审核</span>
                	</template>
                </el-table-column>
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
<style lang="scss" rel="stylesheet/scss">
	.todo-audit{

        .operate{
            margin: 15px 0;
			.filter-text{
				height: 37px;
				line-height: 37px;
				display: block;
				text-align: center;
				font-size: 14px;
			}

            .el-button{
                i{
                    padding-right: 5px;
                }
            }

            .active{
                background-color: #2795ee;
                color: #fff;
            }
        }

        .todo-table{
        	padding: 15px;
        	background-color: #fff;
        	border-radius: 4px;

			.el-table th:nth-child(8) > .cell{
				text-align: center;
			}
			tr:hover{
				.check{
					border: 1px solid #2a90e5;
					border-radius: 15px;
				}

				.audit{
					background-color: #2a90e5;
					color: #fff;
					border-radius: 15px;
				}
			}

        	.check, .audit{
        		display: inline-block;
        		color: #2a90e5;
        		cursor: pointer;
        		height: 25px;
				width: 52px;
				text-align: center;
        	}
        }
	}
</style>
<script>
	import { todoAuditService } from "../../service/index";
    export default{
        data() {
            return {
            	activeName: "all",
                keyWords: '',
                tableData: []
            }
        },

        created() {
            this.getTodoAuditTable();
        },

        methods: {
            getTodoAuditTable(){
                todoAuditService.getTodoAuditData().then((response) => {
                    this.tableData = response;
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
            },
            //类型选择
            handleSelectType(name){
                this.activeName = name;
            }
        },

        mounted() {
            console.log("DOM");
        }
    }
</script>
