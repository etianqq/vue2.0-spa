<template>
  <div>
    <el-row class="top-bar">
      <el-col class="logo">
        <img src="../assets/images/top_logo.png" alt="销冠科技">
      </el-col>
      <el-col class="operate">
        <el-dropdown class="drop-down" :trigger="'click'">
          <span class="el-dropdown-link">
            郭大明<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <el-row class="content-bar">
      <el-col class="menu-bar">
        <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="/home"><i class="el-icon-message"></i>销冠首页</el-menu-item>
          <el-menu-item index="/business-management"><i class="el-icon-message"></i>商家管理</el-menu-item>
          <el-menu-item index="/broker-company"><i class="el-icon-message"></i>经纪公司</el-menu-item>
          <el-menu-item index="/building-management"><i class="el-icon-message"></i>商品管理</el-menu-item>
          <el-menu-item index="/order-management"><i class="el-icon-message"></i>订单管理</el-menu-item>
          <el-menu-item index="/todo-audit"><i class="el-icon-message"></i>待办审核</el-menu-item>
          <el-menu-item-group title="系统管理">
            <el-menu-item index="/account-management"><i class="el-icon-message"></i>账号管理</el-menu-item>
            <el-menu-item index="/operation-log"><i class="el-icon-message"></i>操作日志</el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </el-col>
      <el-col class="route-wrapper">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {

    data(){
      return　{
          isActive:false,
          nowPath:""
      }
    },
//    computed:{
//        setActiveClass: (path) => {
//          return {
//              'is-active' : this.nowPath === path
//          }
//        }
//    },
    methods: {
      getHost(){
          console.log(HOST);
          console.log(APIS);
      }
    },
    created(){
        this.getHost();
    }
//    watch:{
//        "$route": (to,from) => {
//          this.nowPath=to.path;
//          console.log(this.nowPath);
//          console.log(to);
//          console.log(from);
//        }
//    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .top-bar {
    height: 55px;
    background-color: #008ee6;

    .logo {
      display: table-cell;
      width: 200px;
      height: 55px;
      text-align: center;
      cursor: pointer;

        img {
          width: 84px;
          height: 27px;
          margin-top: 14px;
        }
    }

    .operate{
      float: right;
      margin-top: 10px;
      width: 200px;
      height: 35px;
      padding-left: 40px;
      background: url("../assets/images/ico_Head.png") no-repeat left center;

        .drop-down{
          margin-top: 10px;
          color: #fff;
        }
    }
  }

  .content-bar {
    -webkit-flex: 1;
    flex: 1;
    display: -webkit-flex; /* Safari */
    display: flex;
    -webkit-flex-direction: row; /* Safari */
    flex-direction: row;

    .menu-bar {
      width: 200px;
      background-color: #fff;
      color: #939393;
      min-height: 700px;
      overflow: auto;
      position: relative;

      ul{
        background-color: #fff;
        .el-menu-item-group__title{
          text-indent: 37px;
        }

        .el-menu-item{
          text-align: center;
        }
      }

    }

    .route-wrapper{
      flex: 1;
      padding-left: 20px;
      background-color: #f0f0f0;
      padding-bottom: 20px;
    }

  }
</style>
