 	<template>
	<div class="business-add">
		<el-breadcrumb separator="|" class="header-breadcrumb">
		  	<el-breadcrumb-item :to="{ path: '/business-management' }" class="go-back"><i class="el-icon-arrow-left"></i>返回</el-breadcrumb-item>
		  	<el-breadcrumb-item class="add-text">添加楼盘</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="business-info">
			<el-form ref="businessAddFormData" :label-position="labelPosition" :relus="businessRelus" label-width="120px" :model="businessAddFormData" class="business-form">
			  	<el-form-item label="楼盘名称：">
			  		<el-row>
			  			<el-col :span="12">
			  				<el-form-item prop="buildingName">
			    				<el-input placeholder="请输入楼盘名称"></el-input>
			  				</el-form-item>
			  			</el-col>
			  		</el-row>
			  	</el-form-item>
			  	<el-form-item label="楼盘地址：" >
			  		<el-row class="build-col">
			  			<el-col :span="4">
			  				<el-form-item prop="provinceValue">
				  				<el-select v-model="businessAddFormData.provinceValue" placeholder="省">
								    <el-option
								      v-for="item in province"
                      :key="item.cityId"
								      :label="item.cityName"
								      :value="item.cityId">
								    </el-option>
								</el-select>
			  				</el-form-item>
			  			</el-col>
			  			<el-col :span="4">
			  				<el-form-item prop="cityValue">
				  				<el-select v-model="businessAddFormData.cityValue" placeholder="市">
								    <el-option
								      v-for="item in city"
                      :key="item.cityId"
								      :label="item.cityName"
								      :value="item.cityId">
								    </el-option>
								</el-select>
			  				</el-form-item>
			  			</el-col>
			  			<el-col :span="4">
				  			<el-form-item prop="countyValue">
				  				<el-select v-model="businessAddFormData.countyValue" placeholder="区/县">
								    <el-option
								      v-for="item in county"
                      :key="item.cityId"
								      :label="item.cityName"
								      :value="item.cityId">
								    </el-option>
								</el-select>
				  			</el-form-item>
			  			</el-col>
			  			<el-col :span="10">
				  			<el-form-item>
				    			<el-input placeholder="详细地址"></el-input>
				  			</el-form-item>
			  			</el-col>
			  		</el-row>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-row>
			    		<el-col :span="20" class="border" id="divMap"></el-col>
			    		<el-input id="input-hidden" class="hidden"></el-input>
			    	</el-row>
			  	</el-form-item>
			  	<el-row>
			  		<el-col :span="8">
					  	<el-form-item label="对接人：" prop="contacts">
					    	<el-input placeholder="默认生成为管理员"></el-input>
					  	</el-form-item>
			  		</el-col>
			  		<el-col :span="8">
					  	<el-form-item label="签约时间：" prop="signDate">
					    	<el-date-picker
						      	v-model="businessAddFormData.signDate"
						      	type="date"
						      	placeholder="请选择签约时间"
						      	:editable="false"
						      	:picker-options="pickerOptions">
						    </el-date-picker>
					  	</el-form-item>
			  		</el-col>
			  	</el-row>
			  	<el-row>
			  		<el-col :span="8">
					  	<el-form-item label="联系电话：" prop="contactsPhone">
					    	<el-input placeholder="请填写联系电话"></el-input>
					  	</el-form-item>
			  		</el-col>
			  		<el-col :span="6">
					  	<el-form-item label="销冠服务：" prop="serviceDate">
					    	<el-input placeholder="请填写服务时间"></el-input>
					  	</el-form-item>
			  		</el-col>
			  		<el-col :span="2" class="input-col fs14">个月</el-col>
			  	</el-row>
			  	<el-form-item class="text-center mt20">
			    	<el-button @click="resetForm('businessAddFormData')" class="button-style mr10">取消</el-button>
			    	<el-button type="primary" @click="onSubmit('businessAddFormData')" class="button-style ml10">保存</el-button>
			  	</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
	.input-col{
		height: 37px;
		line-height: 37px;
	}
	.business-add{

		.header-breadcrumb{
			height: 60px;
			line-height: 60px;

			.add-text{
				font-size: 16px;
				margin-left: 10px;
			}
		}

		.business-info{
			background-color: #fff;
			border-radius: 4px;
			margin-right: 20px;
			padding: 40px 60px 40px 20px;

			.business-form{

				.build-col{

					.el-col{
						padding-right: 20px;
					}
				}

				.border{
					border: 1px solid #ccc;
					height: 300px;
				}

				.button-style{
					width: 120px;
					border-radius: 20px;
				}
			}
		}
	}
</style>
<script>
	export default {
		data() {
			return {
				pickerOptions: {
		          	disabledDate(time) {
		            	return time.getTime() < Date.now() - 8.64e7;
		          	}
		        },
				labelPosition: 'right',
				province: [
					{
						cityId: '112',
						cityName: '杭州'
					},
					{
						cityId: '113',
						cityName: '上海'
					}
				],
				city: [
					{
						cityId: '112',
						cityName: '杭州'
					},
					{
						cityId: '113',
						cityName: '上海'
					}
				],
				county: [
					{
						cityId: '112',
						cityName: '杭州'
					},
					{
						cityId: '113',
						cityName: '上海'
					}
				],
				businessAddFormData: {
					buildingName: '',
					provinceValue: '',
					cityValue: '',
					countyValue: '',
					address: '',
					longitude: '',
					latitude: '',
					contacts: '',
					signDate: '',
					contactsPhone: '',
					serviceDate: ''
				},
				businessRelus: {
					buildingName: [
						{require: true, message: '楼盘名称不能为空', trigger: 'blur'},
						{min: 6, max: 20, message: '长度在6到20个字符', trigger: 'blur'}
					]
				}
			}
		},
		created() {
			console.log("el created");
		},
		mounted(){
	       var map = new BMap.Map("divMap"); // 创建Map实例
	       map.clearOverlays();
	       var new_point = new BMap.Point(120.184086, 30.222135);
	       var marker = new BMap.Marker(new_point,17);  //创建标注
	       map.addOverlay(marker);
	       map.centerAndZoom(new_point, 17);

	       //启用地图滚轮放大缩小
	       //map.enableScrollWheelZoom();
	       //向地图中添加缩放控件
	       var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
	       map.addControl(ctrl_nav);

	       //单击获取点击的经纬度
	       map.addEventListener("click", function (e) {
	       		console.log("lng------" + e.point.lng);
	       		console.log("lat------" + e.point.lat);
	       		initMap(e.point.lng, e.point.lat);
	           	$("#input-hidden").val(e.point.lng + "," + e.point.lat);
	       });

	       function initMap(longitude, latitude) {
		        map.clearOverlays();
		        var new_point = new BMap.Point(longitude, latitude);
		        var marker = new BMap.Marker(new_point);  // 创建标注
		        map.addOverlay(marker);              // 将标注添加到地图中
		        map.panTo(new_point);
			}
		},

		methods: {
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
			//重置
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>
