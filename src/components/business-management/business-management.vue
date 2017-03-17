<template>
    <div>
      <el-row class="total-info">
        <el-col :span="4">今日售卖<em>24</em>个月</el-col>
        <el-col :span="4">剩余销冠服务<em>87</em>个月</el-col>
        <el-col :span="4">累计购买<em>329</em>个月</el-col>
        <el-col class="go-buy" :span="4" :offset="8">去购买&gt;</el-col>
      </el-row>
      <el-row class="operate">
        <el-col :span="6">
          <el-input class="search-input"
                    placeholder="请输入搜索关键词"
                    icon="search"
          ></el-input>
        </el-col>
        <el-col :span="2">
          <el-button>刷新</el-button>
        </el-col>
        <el-col class="expire-tips" :span="4">
          <el-button>即将到期（4）</el-button>
        </el-col>
        <el-col :span="5" :offset="7">
          <el-button class="add-developer" type="primary" icon="plus">添加开发商</el-button>
        </el-col>
      </el-row>
      <div class="developer">
        <el-row class="developer-title">
          <el-col :span="7">太原绿城华瑞房地产开发商</el-col>
          <el-col :span="11" :offset="6">刘长江(营销总监) 138-9898-0987</el-col>
        </el-row>
        <el-row class="estate">
          <el-col :span="7">
            <h2>双湖星城</h2>
            <div>
              <p>地址：迎泽区滨盛路与长河路交叉路口</p>
              <p>对接人：宋仲基</p>
              <p>联系电话：13455829357</p>
            </div>
          </el-col>
          <el-col :span="6">
            <h3>剩余销冠服务期</h3>
            <div class="date-view">
              <span class="number-view">11</span>
              <span>月</span>
              <span class="number-view">28</span>
              <span>日</span>
            </div>
          </el-col>
          <el-col :span="4">
            <h3>签约时间</h3>
            <div>
              <p>2016-02-28</p>
              <p>共购买18个月</p>
            </div>
          </el-col>
          <el-col :span="4" :offset="3">
            <el-button type="primary">续费</el-button>
          </el-col>
        </el-row>
        <el-row class="estate">
          <el-col :span="7">
            <h2>双湖星城</h2>
            <div>
              <p>地址：迎泽区滨盛路与长河路交叉路口</p>
              <p>对接人：宋仲基</p>
              <p>联系电话：13455829357</p>
            </div>
          </el-col>
          <el-col :span="6">
            <h3>剩余销冠服务期</h3>
            <div class="date-view">
              <span class="number-view">11</span>
              <span>月</span>
              <span class="number-view">28</span>
              <span>日</span>
            </div>
          </el-col>
          <el-col :span="4">
            <h3>签约时间</h3>
            <div>
              <p>2016-02-28</p>
              <p>共购买18个月</p>
            </div>
          </el-col>
          <el-col :span="4" :offset="3">
            <el-button type="primary">续费</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-button type="text">添加楼盘</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
  .total-info{
    width: 100%;
    height: 50px;
    line-height: 50px;

    *{
      height: 100%;

      em{
        font-style: normal;
        font-weight: bold;
      }
    }

    .go-buy{
      color: #008ee5;
    }

  }
  .operate{
    padding-top: 15px;
    padding-bottom: 15px;
    border-top: 1px solid #ccc;

    .add-developer{
      border-radius: 36px;
    }

  }
</style>
<script>

</script>
