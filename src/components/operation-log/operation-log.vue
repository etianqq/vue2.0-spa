<template>
<div class="operationList">
	<el-row class="operation">
	    <el-col :span="6">
	        <el-input class="search-input"
	                v-model="keyWords"
	                @keypress.native="keypress"
	                placeholder="请输入搜索关键词">
	            <el-button slot="prepend" @click="handleSearch" icon="search"></el-button>
	        </el-input>
	    </el-col>
	    <el-col :span="2" class="text-center">
	        <el-button class="btn-refresh" @click="refreshHander"><i class="fa fa-refresh"></i>刷新</el-button>
	    </el-col>
	</el-row>

<!-- 表格 -->
	<div class="operationTab">
	<el-table
	:data="tableData"
	stripe
	border
	style="width: 100%" >
    <el-table-column
      type="index"
      label="序号"
      width="50">
    </el-table-column>
	<el-table-column
	  prop="date"
	  label="序号"
	  width="180">
	</el-table-column>
	<el-table-column
	  prop="name"
	  label="操作模块"
	  width="180">
	</el-table-column>
	<el-table-column
	  prop="address"
	  label="操作内容">
	</el-table-column>
	<el-table-column
	  prop="date"
	  label="操作人"
	  width="180">
	</el-table-column>
	<el-table-column
	  prop="name"
	  label="账号"
	  width="180">
	</el-table-column>
	<el-table-column
	  prop="address"
	  label="操作时间">
	</el-table-column>
	</el-table>
	</div>
<!-- 分页 -->
	<div class="block text-right" style="margin-bottom: 60px;">
	    <el-pagination class="self-pagination"
	        layout="prev, pager, next"
	        @current-change="handleCurrentChange"
	        :total="100">
	    </el-pagination>
	</div>
</div>
</template>

<script>
  export default {
    data() {
      return {
      	keyWords: '',
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
                console.log(this.keyWords);
            },
            refreshHander:function (){
            	this.keyWords = '';
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
                    title: '服务期续费',
                    formData: {
                        newDate: ''
                    }
                }
            }
        }
  }
</script>
<style type="text/css">
	.el-table--striped .el-table__body tr:nth-child(2n) td {
	    background: #FAFAFA;
	}

</style>
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

    .operationList{
        padding-top: 10px;
        padding-right: 20px;
        .operation{
            padding-top: 15px;
            padding-bottom: 15px;

            position: relative;
            .btn-refresh{
                .fa-refresh{
                    padding-right: 5px;
                }
            }
        }
		.operationTab{
			background:white;
			padding:10px;
			border-radius:5px;
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

</style>
