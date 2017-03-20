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
      <el-col class="route-wrapper">
        <router-view></router-view>
      </el-col>
    </el-row>
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
      }

    }

    .route-wrapper{
      flex: 1;
      padding-left: 20px;
      background-color: #f0f0f0;
      overflow-x: auto;
    }

  }
</style>
