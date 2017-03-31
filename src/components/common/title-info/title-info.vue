<template>
    <el-row class="total-info">
        <el-col>
            <span v-for="title in titles">{{title.first}}<em>{{title.value}}</em>{{title.last}}</span>
        </el-col>
    </el-row>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
    .total-info {
        padding: 15px;
        border-bottom: 1px solid #e9e9e9;

    span {
        color: #666;
        font-size: 14px;
        padding-right: 15px;

    em {
        padding-left: 5px;
        padding-right: 5px;
        color: #000;
        font-weight: bold;
    }
    }
    span:last-child {
        padding-left: 15px;
        border-left: 1px solid #e9e9e9;
    }
    }
</style>
<script>
    export default {
        data(){
            return {};
        },
        // 通过props声明传入的变量名
        props:['titles','values']
    }
</script>
