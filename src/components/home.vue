<template>
  <div>
    <div class="topBar" id="js-topNavCt">
      <div class="logo"></div>
      <div class="open" style="display: none;"></div>
      <div class="right">
        <ul>
          <li class="userName"></li>
          <li class="user-center">
            <div class="img-default">
              <img src="../assets/images/ico_Head.png" alt="">
            </div>
            <div class="img-self"></div>
          </li>
          <li class="logout"></li>
        </ul>
      </div>
    </div>
    <div class="contentBar">
      <div id="menu-bar">
        <el-col :span="24">
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :unique-opened="true" :router="true">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>商家管理</template>
              <el-menu-item index="/home/business-management">商家列表</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-message"></i>经纪公司</template>
              <el-menu-item index="/home/broker-company">经纪公司列表</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-message"></i>商品管理</template>
              <el-menu-item index="/home/building-management">商品列表</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title"><i class="el-icon-message"></i>订单管理</template>
              <el-menu-item index="/home/order-management">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title"><i class="el-icon-message"></i>待办审核</template>
              <el-menu-item index="/home/todo-audit">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title"><i class="el-icon-message"></i>账号管理</template>
              <el-menu-item index="/home/account-management">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title"><i class="el-icon-message"></i>操作日志</template>
              <el-menu-item index="/home/operation-log">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-col>
      </div>
      <!--<div id="menu-bar">-->
        <!--<ul class="level1">-->
          <!--<span class="title bg_basicData">商家管理</span>-->
          <!--<li class="li-level1">-->
            <!--<router-link class="title" to="/home/business-management">商家列表</router-link>-->
          <!--</li>-->
          <!--<li class="li-level1">-->
            <!--<router-link class="title" to="/main/basicData_buildingConfig">添加楼盘</router-link>-->
          <!--</li>-->
          <!--<li class="li-level1">-->
            <!--<router-link class="title" to="/main/basicData_otherConfig">添加开发商</router-link>-->
          <!--</li>-->
        <!--</ul>-->
        <!--<ul class="level1">-->
          <!--<span class="title bg_basicData">经纪公司</span>-->
          <!--<li class="li-level1">-->
            <!--<router-link class="title" to="/home/broker-company">经纪公司列表</router-link>-->
          <!--</li>-->
          <!--<li class="li-level1">-->
            <!--<router-link class="title" to="/main/basicData_buildingConfig">添加经纪门店</router-link>-->
          <!--</li>-->
        <!--</ul>-->
        <!--<ul class="level1">-->
          <!--<span class="title bg_basicData">商品管理</span>-->
          <!--<li class="li-level1">-->
            <!--<router-link class="title" to="/home/building-management">楼盘列表</router-link>-->
          <!--</li>-->
          <!--<li class="li-level1">-->
            <!--<router-link class="title" to="/main/basicData_buildingConfig">添加楼盘</router-link>-->
          <!--</li>-->
        <!--</ul>-->
        <!--<ul class="level1">-->
          <!--<span class="title bg_basicData">订单管理</span>-->
          <!--<li class="li-level1">-->
            <!--<router-link class="title" to="/home/order-management">订单列表</router-link>-->
          <!--</li>-->
        <!--</ul>-->
        <!--<ul class="level1">-->
          <!--<span class="title bg_basicData">待办审核</span>-->
          <!--<li class="li-level1">-->
            <!--<router-link class="title" to="/home/todo-audit">待办审核列表</router-link>-->
          <!--</li>-->
        <!--</ul>-->
        <!--<ul class="level1">-->
          <!--<span class="title bg_basicData">账号管理</span>-->
          <!--<li class="li-level1">-->
            <!--<router-link class="title" to="/home/account-management">账号列表</router-link>-->
          <!--</li>-->
        <!--</ul>-->
        <!--<ul class="level1">-->
          <!--<span class="title bg_basicData">操作日志</span>-->
          <!--<li class="li-level1">-->
            <!--<router-link class="title" to="/home/operation-log">日志列表</router-link>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
      <div id="routeWrapper">
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .topBar {
    height: 55px;
    background-color: #008ee6;

    .logo {
      width: 200px;
      background: url("../assets/images/top_logo.png") no-repeat center center;
      background-color: #0079c2;
      height: 100%;
      float: left;
      cursor: pointer;
    }

    .open {
      float: left;
      width: 54px;
      height: 50px;
      cursor: pointer;
      background: url("../assets/images/open.png") no-repeat center center;
    }

    .left {
      float: left;
      overflow: visible;
    }

    .right ul {
      float: right;
      margin: 0;

      li {
        float: left;
        width: 62px;
        height: 55px;
        line-height: 55px;
        text-align: center;
        cursor: pointer;
      }

      .userName {
        color: #fff;
        width: auto;
      }

      .logout {
        background: url("../assets/images/home_icon4.png") no-repeat center center;
      }

    }

    .user-center {
      .img-default >img {
        vertical-align: middle;
      }

      .img-self {
        display: none;
        width: 35px;
        height: 35px;
        border-radius: 35px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 35px 35px;
        margin: 10px 0 0 10px;
      }

    }
  }

  .contentBar {
    -webkit-flex: 1;
    flex: 1;
    display: -webkit-flex; /* Safari */
    display: flex;
    -webkit-flex-direction: row; /* Safari */
    flex-direction: row;

    #menu-bar {
      width: 200px;
      background-color: #262c38;
      color: #959fb1;
      min-height: 700px;
      overflow: auto;
      position: relative;

      .bg_basicData {
        background: url("../assets/images/left_254.png") no-repeat 10px center;
      }

      .title {
        padding: 12.5px;
        display: inline-block;
        font-size: 14px;
      }

      .level1 {
        margin-left: -40px;
        margin-top: 24px;
        padding-left: 60px;

        span.title {
          color: #959fb1;
          padding-left: 40px;
        }

        .li-level1 {
          padding-left: 30px;

          .router-link-active {
            color: #959fb1;
          }

        }
        li:hover {
          background: #1a1f2a;
        }

      }

      .level2 {
        display: none;
        padding-left: 0px;
        background-color: #1b1f2a;

        span.title {
          color: #8992a3;
          font-size: 12px;
        }

      }

      li {
        position: relative;
        cursor: pointer;
      }

      li.active > .title {
        color: #FFFFFF;
      }

      .title:hover {
        color: #FFFFFF;
      }

    }

  }

  /* 设置滚动条的样式 */
  #menu-bar::-webkit-scrollbar {
    width: 13px;
  }

  /* 滚动槽 */
  #menu-bar::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(48, 65, 83, 1);
    background: rgba(48, 65, 83, 1);
    border-radius: 10px;
  }

  /* 滚动条滑块 */
  #menu-bar::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(27, 42, 58, 1);
    -webkit-box-shadow: inset 0 0 6px rgba(27, 42, 58, 1);
  }

  #menu-bar::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(27, 42, 58, 0.4);
  }
</style>
