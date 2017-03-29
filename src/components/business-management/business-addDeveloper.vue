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
							  			<li v-for="item in multipleSelection" class="check-active" @click="handleCheckDelete(item.dialogDeveloperId)">{{item.dialogDeveloperName}}<i class="el-icon-close"></i></li>
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

		<el-dialog title="关联品牌开发商" v-model="brandDialog.dialogVisible">
			<el-input placeholder="请输入搜索关键字" class="developer-search" icon="search" v-model="developerSearchQuery" :on-icon-click="handleSeacrhDeveloper"></el-input>
			<el-table :data="developerTableData" style="width: 100%" @select="handleCurrentCheckbox">
		      	<el-table-column prop="dialogDeveloperName" label="开发商名称"></el-table-column>
		      	<el-table-column type="selection" width="55"></el-table-column>
		    </el-table>
		 	<div slot="footer" class="dialog-footer">
		    	<el-button @click="brandDialog.dialogVisible = false" class="mr10">取 消</el-button>
		    	<el-button type="primary" @click="handleCheckBrandDeveloper" class="ml10">确 定</el-button>
		  	</div>
		  	<div class="block text-right">
                <el-pagination class="self-pagination" small
                    layout="prev, pager, next"
                    @current-change="handleCurrentChange"
                    :total="50">
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
					min-height: 37px;
					
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
						margin-right: 5px;
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
	export default {
		data() {
			return {
				brandOptions: [
					{
						developerId: 101,
						developerName: '滨江集团001'
					},
					{
						developerId: 102,
						developerName: '滨江集团002'
					},
					{
						developerId: 103,
						developerName: '滨江集团003'
					},
					{
						developerId: 104,
						developerName: '滨江集团004'
					},
					{
						developerId: 105,
						developerName: '滨江集团005'
					},
					{
						developerId: 106,
						developerName: '滨江集团006'
					}
				],
				labelPosition: 'right',
				addDeveloperFormData: {
					developerName: '',
					developerBrand: '',
					developerContacts: '',
					developerPosition: '',
					developerContactsPhone: ''
				},
				brandDialog: {
					dialogVisible: false
				},
				developerTableData: [
					{
						dialogDeveloperId: 101,
						dialogDeveloperName: '滨江集团001'
					},
					{
						dialogDeveloperId: 102,
						dialogDeveloperName: '滨江集团002'
					},
					{
						dialogDeveloperId: 103,
						dialogDeveloperName: '滨江集团003'
					},
					{
						dialogDeveloperId: 104,
						dialogDeveloperName: '滨江集团004'
					},
					{
						dialogDeveloperId: 105,
						dialogDeveloperName: '滨江集团005'
					},
					{
						dialogDeveloperId: 106,
						dialogDeveloperName: '滨江集团006'
					}
				],
				multipleSelection: [],
				developerSearchQuery: '',
				hasCheckValue: false
			}
		},

		methods: {
			//品牌开发商弹窗
			handleBrandDeveloper() {
				this.brandDialog.dialogVisible = true;
			},
			//选中品牌开发商
	      	handleCurrentCheckbox(checkVal){

				let length = checkVal.length;
				if(length > 3){
					this.$message({
			          	message: '最多可选三个品牌开发商',
			          	type: 'warning'
			        }); 
				}else{
					console.log("11");
	      			this.multipleSelection = checkVal;
				}
				console.log(this.multipleSelection);
				this.hasCheckValue = true;
				// let length = checkVal.length, mulLen = this.multipleSelection.length;
				// this.multipleSelection.splice(0, mulLen);
				// for(let i = 0; i < length; i++){
				// 	this.multipleSelection.push(checkVal[i].dialogDeveloperId);
				// }
	      	},
	      	//品牌开发商搜索
	      	handleSeacrhDeveloper(val) {
	      		console.log(val);
	      	},
	      	//弹窗当前页数
	      	handleCurrentChange(val) {
                console.log("current page---" + val);
            },
            //弹窗确定操作
            handleCheckBrandDeveloper() {
				this.brandDialog.dialogVisible = false;
            },
            //删除选中品牌开发商
            handleCheckDelete(val) {

            	let length = this.multipleSelection.length;
            	for(let i = 0; i < length; i++){
            		if(this.multipleSelection[i].dialogDeveloperId == val){
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
			}
		}
	}
</script>
