/**
 * Created by jiangyan on 2017/3/25.
 */
// 自己写的静态资源服务器，用于测试发布版本的项目包
var express = require("express");
var app = express();
app.use("/",express.static(__dirname + "/dist"));
app.listen(3000);
