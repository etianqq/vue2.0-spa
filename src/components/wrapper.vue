<template>
  <div class="content">
    <div class="top-bar">
      <div class="top-bar-content">
        <div class="logo">
          <router-link to="/">
            <img src="../assets/images/top_logo.png" alt="销冠科技">
          </router-link>
        </div>
        <div class="operate">
          <el-dropdown class="drop-down" trigger="click">
            <span class="el-dropdown-link">
              郭大明<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <el-row type="flex" class="content-bar">
      <el-col class="menu-bar">
        <el-menu mode="vertical" :default-active="nowPath" class="el-menu-vertical-demo" :router="true">
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

    data() {
      return　{
        nowPath:''
      }
    },
    methods:{

    },
    created(){
      // 进入wrapper组件后，立即获取并修改当前路由
      this.nowPath = this.$route.path.match(/\/[a-z]+-*[a-z]+/)[0]; // 正则只匹配一级路由
    },
    mounted(){
      // 渲染完毕后，修改菜单的高度占满屏幕高度
      let bodyHeight = document.documentElement.clientHeight-55; // 去除topbar的高度
      document.querySelector(".menu-bar").style.minHeight = bodyHeight+'px';
    },
    watch:{
      // 监听路由变化，获取并修改当前路由
      "$route": function(to,from) {
        this.nowPath=to.path.match(/\/[a-z]+-*[a-z]+/)[0]; // 正则只匹配一级路由
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .content{

    .top-bar {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 55px;
      background-color: #008ee6;
      z-index: 1;

      .top-bar-content{
        margin-left: auto;
        margin-right: auto;
        max-width: 1440px;

        .logo {
          float: left;
          display: block;
          width: 200px;
          height: 55px;
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
          height: 35px;
          padding-left: 40px;
          background: url("../assets/images/ico_Head.png") no-repeat left center;
          cursor: pointer;

          .drop-down{
            margin-top: 10px;
            color: #fff;
          }
        }
      }
    }

    .content-bar {
      margin-left: auto;
      margin-right: auto;
      min-width: 1080px;
      max-width: 1440px;
      padding-top: 55px;
      box-sizing: border-box;

      .menu-bar {
        @media screen and(max-width: 1439px) {
          width: 200px;
        }
        @media screen and(min-width: 1440px) {
          width: 250px;
        }
        width: 200px;
        background-color: #fff;
        color: #939393;
        overflow: auto;
        position: relative;

        ul{
          background-color: #fff;

          .el-menu-item{

          }
        }

      }

      .route-wrapper{
        flex: 1;
        padding: 20px;
        background-color: #f0f0f0;
      }

    }
  }
</style>
