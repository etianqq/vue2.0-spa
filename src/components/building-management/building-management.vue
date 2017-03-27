<template>
    <div>
      <el-row class="total-info">
        <el-col>
          <span>今日供给<em>{{newBuildings}}</em>套新房</span>
          <span>总供给<em>{{buildingList.length}}</em>套新房</span>
        </el-col>
      </el-row>
      <el-row class="search">
        <el-col>
          <span>销冠渠道</span>
          <el-button type="primary">全部（{{buildingList.length}}）</el-button>
          <el-button>上架（{{onSaleBuildings}}）</el-button>
          <el-button>审核中（{{auditBuildings}}）</el-button>
          <el-button>下架（{{noSaleBuildings}}）</el-button>
          <el-button>审核未通过（{{rejectBuildings}}）</el-button>
        </el-col>
      </el-row>
      <el-row class="building-list" :gutter="20">
        <el-col v-for="building in buildingList" :key="building.id" class="building-wrapper" :span="8">
          <el-card>
            <img src="../../assets/images/building.jpg" alt="楼盘图片">
            <div class="building-info">
              <h2>{{building.title}}</h2>
              <div class="tags">
                <el-tag v-for="tag in building.tags" :key="tag" type="danger">{{tag}}</el-tag>
              </div>
              <p>均价：{{building.averagePrice}}元/m²</p>
              <p>居室：{{building.household}}</p>
              <p>面积：{{building.area}}m²</p>
              <p>地址：{{building.addr}}</p>
            </div>
            <div class="sale-info">
              <!--这里有几种状态：重新上架(re-shelves)，审核(audit)，销冠上架(shelves)-->
              <button v-if="building.status!=4" :class="operateStatusClasses[building.status]">{{operateStatusFilter(building.status)}}</button>
              <div class="sale-status-edit">
                <!--这里有几种状态：已上架(0-on-sale)，审核中（1-auditing），审核未通过(2-reject)，已下架(3-off-shelf),信息待完善(4-imperfect)-->
                <span class="sale-status" :class="saleStatusClasses[building.status]">{{saleStatusFilter(building.status)}}</span>
                <button class="edit"><i class="fa fa-angle-right"></i></button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="pagination-wrapper">
          <el-pagination
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </el-col>
      </el-row>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/scss/basic/variable";
  .total-info{
    padding: 15px;
    border-bottom: 1px solid #e9e9e9;

    span{
      color: #666;
      font-size: 14px;
      padding-right: 15px;

      em{
        padding-left: 5px;
        padding-right: 5px;
        color: #000;
        font-weight: bold;
      }
    }
    span:last-child{
      padding-left: 15px;
      border-left: 1px solid #e9e9e9;
    }
  }
  .search{
    padding: 15px;
    font-size: 14px;
    color: #666;

    span{
      margin-right: 20px;
    }
  }
  .building-list{

    .building-wrapper{
      margin-bottom: 15px;

      img{
        width: 100%;
        height: 50%;
      }
      .building-info{
        padding-bottom: 10px;

        h2{
          margin-bottom: 5px;
          font-size: 24px;
          color: #000;
        }
        .tags{
          margin-bottom: 15px;

          span{
            margin-right: 10px;
          }
        }
        p{
          height: 20px;
          line-height: 20px;
          color: #666;
          font-size: 14px;
        }
      }
      .sale-info{
        height: 30px;
        padding: 15px 0;
        border-top: 1px dashed #666;

        >button{
          width: 70px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          background: #fff;
          border-radius: 30px;
        }
        >button.re-shelves{
          border: 1px solid $green;
          color: $green;
        }
        >button.shelves{
          border: 1px solid $blue;
          color: $blue;
        }
        >button.audit{
          border: 1px solid $red;
          color: $red;
        }
        .sale-status-edit{
          float: right;
          margin-top: 5px;
          height: 20px;
          font-size: 14px;

          .imperfect{
            color: $green;
          }
          .auditing{
            color: $green;
          }
          .on-sale{
            color: $blue;
          }
          .reject{
            color: $red;
          }
          .off-shelf{
            color: $grey;
          }
          .edit{
            width: 16px;
            height: 16px;
            line-height: 10px;
            text-align: center;
            padding-left: 1px;
            background: #fff;
            color: #666;
            border: 1px solid #666;
            border-radius: 16px;
            box-sizing: border-box;
          }
        }
      }
    }
  }
  .pagination-wrapper{
    text-align: right;
  }
</style>
<script>
  export default {

    data(){
      return {
        newBuildings:0,
        onSaleBuildings:4,
        auditBuildings:3,
        noSaleBuildings:1,
        rejectBuildings:1,
        buildingList:[
          {
            id : 0,
            img : '../../assets/images/building.jpg', // 这里img路径要用绝对路径
            title : '双湖星城0',
            tags : ['普通住宅','商铺'],
            averagePrice : 35000,
            household : '4房/3房',
            area : '90-150',
            addr : '迎泽区滨盛路与长和路交叉路口',
            status : 0
          },
          {
            id : 1,
            img : '../../assets/images/building.jpg',
            title : '双湖星城1',
            tags : ['普通住宅','商铺'],
            averagePrice : 34000,
            household : '2房/3房',
            area : '60-120',
            addr : '迎泽区滨盛路与长和路交叉路口',
            status : 1
          },
          {
            id : 2,
            img : '../../assets/images/building.jpg',
            title : '双湖星城2',
            tags : ['普通住宅','商铺'],
            averagePrice : 31000,
            household : '4房/3房',
            area : '80-170',
            addr : '迎泽区滨盛路与长和路交叉路口',
            status : 2
          },
          {
            id : 3,
            img : '../../assets/images/building.jpg',
            title : '双湖星城3',
            tags : ['普通住宅','商铺'],
            averagePrice : 35000,
            household : '4房/3房',
            area : '90-150',
            addr : '迎泽区滨盛路与长和路交叉路口',
            status : 3
          },
          {
            id : 4,
            img : '../../assets/images/building.jpg',
            title : '双湖星城4',
            tags : ['普通住宅','商铺'],
            averagePrice : 35000,
            household : '4房/3房',
            area : '90-150',
            addr : '迎泽区滨盛路与长和路交叉路口',
            status : 4
          },
          {
            id : 5,
            img : '../../assets/images/building.jpg',
            title : '双湖星城5',
            tags : ['普通住宅','商铺'],
            averagePrice : 35000,
            household : '4房/3房',
            area : '90-150',
            addr : '迎泽区滨盛路与长和路交叉路口',
            status : 0
          },
          {
            id : 6,
            img : '../../assets/images/building.jpg',
            title : '双湖星城6',
            tags : ['普通住宅','商铺'],
            averagePrice : 35000,
            household : '4房/3房',
            area : '90-150',
            addr : '迎泽区滨盛路与长和路交叉路口',
            status : 0
          },
          {
            id : 7,
            img : '../../assets/images/building.jpg',
            title : '双湖星城7',
            tags : ['普通住宅','商铺'],
            averagePrice : 35000,
            household : '4房/3房',
            area : '90-150',
            addr : '迎泽区滨盛路与长和路交叉路口',
            status : 0
          },
          {
            id : 8,
            img : '../../assets/images/building.jpg',
            title : '双湖星城8',
            tags : ['普通住宅','商铺'],
            averagePrice : 35000,
            household : '4房/3房',
            area : '90-150',
            addr : '迎泽区滨盛路与长和路交叉路口',
            status : 0
          }
        ],
        operateStatusClasses:['re-shelves','audit','shelves','shelves',''],
        saleStatusClasses:['on-sale','auditing','reject','off-shelf','imperfect']
      }
    },
    mounted(){

    },
    computed:{

    },
    methods:{
      operateStatusFilter: function (status) {
        var operateStatusStr=['重新上架','审核','销冠上架','销冠上架','信息待完善'];
        return operateStatusStr[status];
      },
      saleStatusFilter: function (status) {
        var saleStatusStr=['已上架','审核中','审核未通过','已下架','信息待完善'];
        return saleStatusStr[status];
      }
    }
  }
</script>
