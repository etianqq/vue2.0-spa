<template>
    <div>
        <div class="nav-title">
            <a href="javascript:;"><i class="fa fa-angle-left"></i>返回</a>
            <h2>楼盘信息</h2>
        </div>
        <div class="basic-info">
            <el-card class="nav-card" :body-style="{ padding:0 }">
                <div class="card-header">基本信息</div>
                <div class="card-content">
                    <h3>理想银泰城</h3>
                    <ul>
                        <li>开发商：杭州理想银泰购物中心有限公司</li>
                        <li>楼盘地址：迎泽区滨盛路与长河路交叉路口往北300米积家对面</li>
                    </ul>
                    <div class="to-perfect">
                        <div class="edit-wrapper">
                            <i class="fa fa-pencil fa-4"></i>
                        </div>
                        <p>完善楼盘信息，销冠帮您吸引客户</p>
                    </div>
                </div>
            </el-card>
        </div>
        <div class="house-holding"></div>
        <div class="aroundings"></div>
        <div class="album"></div>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../../assets/scss/basic/variable";
    .nav-title{
        margin-bottom: 20px;
        height: 30px;
        line-height: 30px;

        a{
            position: relative;
            display: inline-block;
            color: $blue;
            padding-right: 20px;
            border-right: 1px solid $grey;

            i{
                margin-right: 5px;
            }
        }

        h2{
            display: inline-block;
            padding-left: 20px;
            font-size: 20px;
            font-weight: bold;
        }
    }
    .basic-info{
        .nav-card{
            padding: 0;
        }
        .card-header{
            height: 40px;
            line-height: 40px;
            padding-left: 20px;
            font-size: 14px;
            background: $grey_light;
            color: $grey_dark;
        }
        .card-content{
            padding-left: 20px;

            h3{
                margin: 20px 0;
                font-size: 14px;
                font-weight: bold;
                color: #000;
            }
            li{
                margin: 5px 0;
            }

            .to-perfect{

                margin-top: 20px;
                padding-top: 60px;
                padding-bottom: 60px;
                border-top: 1px dashed $grey;

                .edit-wrapper{
                    margin: auto;
                    width: 40px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    border-radius: 40px;
                    background: $grey-light;
                    i{
                        display: inline-block;
                        width: 40px;
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        font-size: 30px;
                        color: #fff;
                    }
                }
                p{
                    margin-top: 10px;
                    text-align: center;
                    color: $grey;
                }
            }
        }

    }
</style>
<script>

</script>
