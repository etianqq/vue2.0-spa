<template>
    <div class="search-refresh">
        <el-input class="search-input"
                  v-model="keyWords"
                  @keypress.native="keypress"
                  placeholder="请输入搜索关键词">
            <el-button slot="prepend" @click="handleSearchChild(keyWords)" icon="search"></el-button>
        </el-input>
        <el-button class="btn-refresh" @click="handleRefresh"><i class="fa fa-refresh"></i>刷新</el-button>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
    .search-refresh{
        .search-input{
            width: 75%;
        }
        .btn-refresh{
            width: 20%;
        }
    }
</style>
<script>
    export default {
        data(){
            return {
                keyWords:''
            }
        },
        props:['handleSearchChild','handleRefresh'],
        methods:{
            //键盘事件
            keypress(event){
                if(event.keyCode == 13){
                    console.log(this.keyWords);
                    this.handleSearchChild(this.keyWords);
                }
            }
        }
    }
</script>
