<template>
	<div class="business-add">
		<el-breadcrumb separator="|" class="header-breadcrumb">
		  	<el-breadcrumb-item :to="{ path: '/home/business-management' }"><i class="el-icon-arrow-left"></i>返回</el-breadcrumb-item>
		  	<el-breadcrumb-item class="add-text">添加楼盘</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="business-info">
			<el-form :label-position="labelPosition" label-width="120px" :model="businessAddFromData">
			  	<el-form-item label="名称">
			    	<el-input ></el-input>
			  	</el-form-item>
			  	<el-form-item label="活动区域">
			    	<el-input ></el-input>
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
				font-size: 18px;
			}
		}

		.business-info{
			background-color: #fff;
			border-radius: 4px;
			margin-right: 20px;
			height: 400px;
		}
	}
</style>
<script>
	export default {
		data() {
			return {
				labelPosition: 'right',
				businessAddFromData: {}
			}
		}
	}
</script>