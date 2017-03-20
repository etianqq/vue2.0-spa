<template>
	<div class="business-add">
		<el-breadcrumb separator="|" class="header-breadcrumb">
		  	<el-breadcrumb-item :to="{ path: '/business-management' }" class="go-back"><i class="el-icon-arrow-left"></i>返回</el-breadcrumb-item>
		  	<el-breadcrumb-item class="add-text">添加楼盘</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="business-info">
			<el-form :label-position="labelPosition" label-width="120px" :model="businessAddFromData" class="business-form">
			  	<el-form-item label="楼盘名称：">
			  		<el-row>
			  			<el-col :span="8">
			    			<el-input placeholder="请输入楼盘名称"></el-input>
			  			</el-col>			  			
			  		</el-row>
			  	</el-form-item>
			  	<el-form-item label="楼盘地址：">
			  		<el-row class="build-col">
			  			<el-col :span="2">
			  				<el-select v-model="provinceValue" placeholder="省">
							    <el-option
							      v-for="item in businessAddFromData.province"
							      :label="item.cityName"
							      :value="item.cityId">
							    </el-option>
							</el-select>
			  			</el-col>
			  			<el-col :span="2">
			  				<el-select v-model="cityValue" placeholder="市">
							    <el-option
							      v-for="item in businessAddFromData.province"
							      :label="item.cityName"
							      :value="item.cityId">
							    </el-option>
							</el-select>
			  			</el-col>
			  			<el-col :span="2">
			  				<el-select v-model="countyValue" placeholder="区/县">
							    <el-option
							      v-for="item in businessAddFromData.province"
							      :label="item.cityName"
							      :value="item.cityId">
							    </el-option>
							</el-select>
			  			</el-col>
			  			<el-col :span="10">
			    			<el-input placeholder="详细地址"></el-input>
			  			</el-col>			  			
			  		</el-row>
			  	</el-form-item>
			  	<el-form-item>
			    	<el-row>
			    		<el-col :span="16" class="border"></el-col>
			    	</el-row>
			  	</el-form-item>
			  	<el-form-item label="活动形式">
			    	<el-input ></el-input>
			  	</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
	.pr20{
		padding-right: 20px;
	}
	.pl20{
		padding-left: 20px;
	}
	.business-add{

		.header-breadcrumb{
			height: 60px;
			line-height: 60px;

			.add-text{
				font-size: 16px;
				margin-left: 15px;
			}
		}

		.business-info{
			background-color: #fff;
			border-radius: 4px;
			margin-right: 20px;
			height: 400px;
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
			}
		}
	}
</style>
<script>
	export default {
		data() {
			return {
				labelPosition: 'right',
				provinceValue: '',
				cityValue: '',
				countyValue: '',
				businessAddFromData: {
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
					]
				}
			}
		}
	}
</script>