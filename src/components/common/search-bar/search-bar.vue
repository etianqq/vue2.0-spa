<template>
    <el-input class="search-input"
              v-model="keyWords"
              @keypress.native="keypress"
              placeholder="请输入搜索关键词">
        <el-button slot="prepend" @click="handleSearchChild(keyWords)" icon="search"></el-button>
    </el-input>
</template>
<style>

</style>
<script>
    export default {
        data(){
            return {
                keyWords:''
            }
        },
        props:['handleSearchChild'],
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
