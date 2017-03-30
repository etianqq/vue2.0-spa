<template>
	<div class="business-add">
		<el-breadcrumb separator="|" class="header-breadcrumb">
		  	<el-breadcrumb-item :to="{ path: '/business-management' }" class="go-back"><i class="el-icon-arrow-left"></i>返回</el-breadcrumb-item>
		  	<el-breadcrumb-item class="current-text">添加开发商</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="business-add-developer">
			<el-form :label-position="labelPosition" label-width="120px" :model="addDeveloperFormData" ref="addDeveloperFormData">
			  	<el-row>
			  		<el-col :span="16">
					  	<el-form-item label="开发商名称：" prop="developerName">
					    	<el-input v-model="addDeveloperFormData.developerName" placeholder="请填写开发商名称"></el-input>
					  	</el-form-item>
			  		</el-col>
			  	</el-row>
			  	<el-row>
			  		<el-col :span="16">
					  	<el-form-item label="所属品牌：" prop="developerBrand">
					    	<!-- <el-select v-model="addDeveloperFormData.developerBrand" multiple placeholder="请选择开发商品牌" style="width: 100%;">
							    <el-option
							      v-for="item in brandOptions"
							      :label="item.developerName"
							      :value="item.developerId">
							    </el-option>
						  	</el-select> -->
						  	<div class="select-brandDeveloper">
						  		<div v-if="hasCheckValue">
						  			<ul class="checkBrandList">
							  			<li v-for="item in multipleSelection" class="check-active" @click="handleCheckDelete(item.applyId)">{{item.applyBrokerName}}<i class="el-icon-close"></i></li>
							  		</ul>
						  		</div>
						  		<div v-else>
							  		<ul class="checkBrandList">
							  			<li class="default-text">请选择开发商品牌</li>
							  		</ul>
						  		</div>
						  		<span class="btn-select" @click="brandDialog.dialogVisible = true">选择开发商品牌</span>
						  	</div>
					  	</el-form-item>
			  		</el-col>
			  	</el-row>
			  	<el-row>
			  		<el-col :span="16">
					  	<el-form-item label="联系人：" prop="developerContacts">
					    	<el-input v-model="addDeveloperFormData.developerContacts" placeholder="请填写联系人"></el-input>
					  	</el-form-item>
			  		</el-col>
			  	</el-row>
			  	<el-row>
			  		<el-col :span="16">
			  			<el-form-item label="联系人职位：" prop="developerPosition">
					    	<el-input v-model="addDeveloperFormData.developerPosition" placeholder="请填写联系人职位"></el-input>
					  	</el-form-item>
			  		</el-col>
			  	</el-row>
			  	<el-row>
			  		<el-col :span="16">
			  			<el-form-item label="联系电话：" prop="developerContactsPhone">
				    	<el-input v-model="addDeveloperFormData.developerContactsPhone" placeholder="请填写联系电话"></el-input>
				  	</el-form-item>
			  		</el-col>
			  	</el-row>
			  	<el-row>
			  		<el-col :span="16">
					  	<el-form-item class="text-right mt20">
					    	<el-button @click="resetForm('addDeveloperFormData')" class="button-style mr10">取消</el-button>
					    	<el-button type="primary" @click="onSubmit('addDeveloperFormData')" class="button-style ml10">保存</el-button>
					  	</el-form-item>
			  		</el-col>
			  	</el-row>
			</el-form>
		</div>

		<el-dialog title="关联品牌开发商" v-model="brandDialog.dialogVisible" @open="setRelationDeveloperTableData">
			<el-input placeholder="请输入搜索关键字" class="developer-search" icon="search" v-model="developerSearchQuery" :on-icon-click="handleSeacrhDeveloper" @keypress.native="keypress"></el-input>
			<el-table ref="table" :data="relationDeveloperTableData" style="width: 100%" @selection-change="handleCurrentCheckbox" @toggleRowSelection="handleToggleRowSelected">
		      	<el-table-column prop="applyBrokerName" label="开发商名称"></el-table-column>
		      	<el-table-column :selectable="canSelect" type="selection" width="55"></el-table-column>
		    </el-table>
		 	<div slot="footer" class="dialog-footer">
		    	<el-button @click="brandDialog.dialogVisible = false" class="mr10">取 消</el-button>
		    	<el-button type="primary" @click="handleCheckBrandDeveloper" class="ml10">确 定</el-button>
		  	</div>
		  	<div class="block text-right">
                <el-pagination class="self-pagination" small
                    layout="prev, pager, next"
                    @current-change="handleCurrentChange"
                    :total="relationDeveloperCount">
                </el-pagination>
            </div>
		</el-dialog>
	</div>
</template>
<style lang="scss" rel="stylesheet/scss">
	.input-col{
		height: 37px;
		line-height: 37px;
	}
	.business-add{

		.header-breadcrumb{
			height: 60px;
			line-height: 60px;

			.current-text{
				font-size: 16px;
				margin-left: 10px;
			}
		}

		.business-add-developer{
			background-color: #fff;
			border-radius: 4px;
			margin-right: 20px;
			padding: 40px 60px 40px 20px;

			.select-brandDeveloper{
				display: table;
				width: 100%;
				.checkBrandList{
					// display: table-cell;
					// width: 80%;
					border: 1px solid #bfcbd9;
					border-right: 0;
					border-top-left-radius: 4px;
					border-bottom-left-radius: 4px;
					min-height: 36px;

					>li{
						display: inline-block;
					    border: 1px solid transparent;
					}
					>li.check-active{
						background-color: hsla(206, 100%, 56%, 0.1);
    					border-color: rgba(32,160,255,.2);
						color: #20a0ff;
						padding: 5px;
						border-radius: 4px;
						margin-left: 5px;
						>i{
							padding-left: 5px;
							-moz-transform:scale(.7);
							-webkit-transform:scale(.7);
							-ms-transform:scale(.7);
							transform:scale(.7);
							cursor: pointer;
							zoom:1;
						}
					}
					.default-text{
						padding: 3px 10px;
						color: #97a8be;
						font-size: 14px;
					}
				}
				.btn-select{
					display: table-cell;
					width: 20%;
					text-align: center;
					cursor: pointer;
					color: #97a8be;
					border: 1px solid #bfcbd9;
					border-top-right-radius: 4px;
					border-bottom-right-radius: 4px;
					vertical-align: middle;
				}
			}

			.button-style{
				width: 120px;
				border-radius: 20px;
			}
		}
	}

	.developer-search{
		margin-bottom: 20px;
		width: 300px;
	}

	.self-pagination{
		margin-top: 20px;
	}
</style>
<script>
	import { businessDeveloperService } from '../../service/business-management/business.developer.service'
	import { commonService } from '../../service/common'
	export default {
		data() {
			return {
//				brandOptions: [
//					{
//						developerId: 101,
//						developerName: '滨江集团001'
//					},
//					{
//						developerId: 102,
//						developerName: '滨江集团002'
//					},
//					{
//						developerId: 103,
//						developerName: '滨江集团003'
//					},
//					{
//						developerId: 104,
//						developerName: '滨江集团004'
//					},
//					{
//						developerId: 105,
//						developerName: '滨江集团005'
//					},
//					{
//						developerId: 106,
//						developerName: '滨江集团006'
//					}
//				],
				labelPosition: 'right',
				// 表单数据源
				addDeveloperFormData: {
					developerName: '',
					developerBrand: '',
					developerContacts: '',
					developerPosition: '',
					developerContactsPhone: ''
				},
				// 控制弹窗显示或隐藏
				brandDialog: {
					dialogVisible: false
				},
				// 品牌列表数据源
				relationDeveloperTableData: [],
				// 品牌列表页总页数
				relationDeveloperCount: '',
        // 品牌列表页当前页码
				relationConfig: {
					pageIndex: 1
				},
        // 品牌列表页搜索关键字
				developerSearchQuery: '',
        // 输入框已选中的品牌商数据源
				multipleSelection: [],
        // 是否有选中的品牌商标记
				hasCheckValue: false,
        // 品牌列表页中被选中的选项
        selectedOptions: []
			}
		},

		created() {
			this.handleList(this.relationConfig);
		},

		methods: {
			//获取城市列表
			handleList(params){

				businessDeveloperService.getList(params).then((response) => {

					switch(response.data.Code){
						case 4002:
							commonService.login().then((response) => {
								location.href = response.data.Data.location;
							});
							break;
						default:
							this.relationDeveloperTableData = response.data.Data.items;
							this.relationDeveloperCount = response.data.Data.count;
							break;
					}
				})
			},
			//品牌开发商弹窗
			handleBrandDeveloper() {
				this.brandDialog.dialogVisible = true;
			},
			//选中品牌开发商
      handleCurrentCheckbox(checkVal){

        // 获取mulLen和selLen来判断是否选择超过了3个
        let mulLen = this.multipleSelection.length,
          checkLen = checkVal.length;
        console.log(mulLen);
        console.log(checkLen);
        console.log(checkVal);
        if(mulLen+checkLen>3){
          alert("最多选三个");
          this.$refs.table.toggleRowSelection(checkVal[checkVal.length-1],false);
          return;
        }

				let selLen = this.selectedOptions.length;
        // 每次选中复选框时，先清除selectedOptions中的选项
        this.selectedOptions.splice(0, selLen);

        // 每次选中复选框时，先清除multipleSelection中的选项
//				this.multipleSelection.splice(0, mulLen);

				for(let i = 0; i < checkLen; i++){
					var obj = {
						applyId: checkVal[i].applyId,
						applyBrokerName: checkVal[i].applyBrokerName,
					}
					this.selectedOptions.push(obj);
//					this.selectedOptions.push(checkVal[i].applyId);
				}

        // 每次只增加最后一个元素，即增量追加
//        var obj = {
//          applyId: checkVal[length-1].applyId,
//          applyBrokerName: checkVal[length-1].applyBrokerName,
//        }
//        this.selectedOptions.push(obj);
        console.log(this.selectedOptions);
//				this.hasCheckValue = true;
      },
			//选中三个后禁止
      canSelect(item, index){
//        if(this.multipleSelection.length > 2){
//            if(this.selectedOptions.indexOf(item.applyId)!= -1){
//                return true;
//            }
//            return false;
//        }
        return true;
		    },
      //判断某一行是否选中
      handleToggleRowSelected(row, selected) {
        console.log(row);
        console.log(selected);
      },
      //品牌开发商搜索
      handleSeacrhDeveloper(val) {
        console.log(val);
        this.developerSearchQuery = val;
        this.handleList(this.relationConfig);
      },
      //键盘事件
			keypress(event){
				if(event.keyCode == 13){
					this.handleList(this.relationConfig);
				}
			},
      //弹窗当前页数
      handleCurrentChange(val) {
        this.relationConfig.pageIndex = val;
        this.handleList(this.relationConfig);
      },
      //弹窗确定操作
      handleCheckBrandDeveloper() {
        // 点击确定时，才把列表中选中的值传递给multipleSelection
        for(let i=0;i<this.selectedOptions.length;i++){
            // 这里只会增加，不会减少
            this.multipleSelection.push(this.selectedOptions[i]);
        }
        // 如果multipleSelection不为空，则把hasCheckValue置为true
        if(this.multipleSelection.length>0){
          this.hasCheckValue = true;
        }
        this.brandDialog.dialogVisible = false;
      },
      //删除选中品牌开发商
      handleCheckDelete(val) {

        let length = this.multipleSelection.length;
        for(let i = 0; i < length; i++){
          if(this.multipleSelection[i].applyId == val){
            this.multipleSelection.splice(i, 1);
            break;
          }
        }

        if(this.multipleSelection == ""){
          this.hasCheckValue = false;
        }
      },
      //添加开发商提交
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
        });
      },
			//添加开发商重置
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
      // 设置开发商品牌列表源数据
      setRelationDeveloperTableData(){
        this.handleList(this.relationConfig);
      }
		}
	}
</script>
