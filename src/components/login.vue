<template>
    <div>
        <a href="https://www.tops001.com/" class="know">了解销冠</a>
        <div id="home" class="jumbotron jumbotron-register">
            <div id="particles-js"></div>
            <div class="container center-vertically-holder">
                <div class="center-vertically">
                    <div class="tops"></div>
                    <form id="login_info">
                        <div class="in_ct">
                            <div class="check-block check-block-name">
                                <input type="text" name="userName" class="userName inpAll js_userName" id="userName" value="21012345678"
                                       readonly>
                            </div>
                            <div class="check-block check-block-password">
                                <input type="password" name="passWord" class="passWord inpAll js_passWord" id="password" value="12345678"
                                       readonly>
                            </div>
                        </div>
                        <a href="javascript:;" class="btn_login" id="login" @click="login">登&nbsp;录</a>
                        <a href="javascript:;" class="js_forget forgetPassword">忘记密码？</a>
                        <a href="javascript:;" class="js_download download">下载房产销冠APP</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            login(){
                this.$router.push('/home');
            }
        }
    };
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .icons {
        width: 47px;
        height: 44px;
        position: absolute;
        top: 50%;
        margin-top: -25px;
        left: 30px;
    }

    .img_pos {
        margin: 0 10px 0 0;
    }

    .tops_message_confirm_inner {
        overflow: hidden;
    }

    .info1 {
        line-height: 22px;
        margin-bottom: 4px;
        color: #666666;
        font-size: 16px;
    }

    .info2 {
        line-height: 18px;
        color: #999999;
        font-size: 14px;
        margin-bottom: 0;
    }

    .infos {
        text-align: left;
        margin-left: 80px;
    }

    .icons {
        width: 47px;
        height: 44px;
        position: absolute;
        top: 50%;
        margin-top: -25px;
        left: 30px;
    }

    button {
        width: 100px;
    }

    button:not(:last-child) {
        margin-right: 20px;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 300;
        color: #A2A2A2;
        height: 100%;
        min-height: 100% !important;
        margin: 0;
        position: relative;
        overflow: hidden;
    }

    input:focus {
        outline: none;
    }

    .form-horizontal {
        width: 500px;
        margin: 20px auto;
    }

    .know {
        position: absolute;
        right: 20px;
        top: 30px;
        color: #0079c2;
        font-size: 14px;
        z-index: 999;
        text-decoration: none;
        font-family: 微软雅黑;
    }

    .in_ct {
        position: relative;
    }

    .know:hover {
        text-decoration: none;
    }

    html {
        height: 100%;
    }

    .jumbotron {
        padding: 0 !important;
    }

    .jumbotron.jumbotron-main hr {
        border-width: 1px 0px;
        border-style: dotted none;
        border-color: rgba(255, 255, 255, 0.35);
        -moz-border-top-colors: none;
        -moz-border-right-colors: none;
        -moz-border-bottom-colors: none;
        -moz-border-left-colors: none;
        border-image: none;
        width: 49px;
        height: 4px;
        text-align: center;
        position: relative;
        clear: both;
    }

    .jumbotron.jumbotron-main a {
        color: #fff;
    }

    .container {
        max-width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    .center-vertically-holder {
        display: table;
        height: 100%;
    }

    .center-vertically {
        width: 308px;
        height: 500px;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 999;
        margin-top: -250px;
        margin-left: -160px;
    }

    .tops {
        width: 186px;
        height: 58px;
        background: url("../assets/images/logo.png");
        margin: 0 auto;
    }

    #login_info {
        width: 100%;
        margin: 0 auto;
        margin-top: 50px;
        text-align: right;
    }

    #login_info .inpAll {
        width: 100%;
        height: 54px;
        line-height: 54px;
        font-size: 16px;
        color: #333333;
        border: 1px solid #d9d9d9;
        display: block;
        border-radius: 3px;
        font-family: 微软雅黑;
        padding-left: 14px;
    }

    #login_info .userName {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    #login_info .passWord {
        border-top: none;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    #login_info .btn_login {
        display: block;
        width: 100%;
        height: 45px;
        line-height: 45px;
        background-color: #ff9600;
        font-size: 16px;
        font-family: 微软雅黑;
        color: #ffffff;
        text-align: center;
        margin-top: 30px;
        text-decoration: none;
        border-radius: 3px;
    }

    #login_info .btn_login:hover {
        background-color: #db8100;
    }

    #login_info .forgetPassword {
        display: block;
        width: 100%;
        margin-top: 16px;
        color: #666666 !important;
        font-size: 14px;
        font-family: 微软雅黑;
        text-decoration: none;
    }

    #login_info .download {
        display: block;
        width: 100%;
        height: 45px;
        line-height: 45px;
        background-color: #f7fafc;
        font-size: 16px;
        font-family: 微软雅黑;
        color: #0079c2;
        text-align: center;
        margin-top: 30px;
        text-decoration: none;
        border: 1px solid rgba(0, 121, 194, 0.5);
        border-radius: 3px;
    }

    #login_info .check-block {
        position: relative;
    }

    #login_info .check-block-password.show_auth_code_wrapper > input {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    #login_info .check-block-auth-code {
        display: none;
        overflow: hidden;
    }

    #login_info .js_auth_code {
        display: inline-block;
        width: 208px;
        float: left;
        border-top: none;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    #login_info .js_auth_code_img {
        display: inline-block;
        width: 100px;
        height: 54px;
        border-bottom-right-radius: 3px;
        border: 1px solid #d9d9d9;
        border-width: 0 1px 1px 0;
        cursor: pointer;
        float: left;
    }

    #js-authCodeErr {
        right: 110px;
    }
</style>
