<template>
    <div class="search-box">   
        <div class="search-body">
            <input v-model="search" class="search_text" type="text" placeholder="Please Enter The Word To Search">
            <i class="el-icon-search" @click="handleToSearch"></i>
        </div>
    </div>
</template>

<script>
export default {
    name:'SearchInfo',
    data(){
        return {
            search:''
        }
    },
    methods:{
        handleToSearch(){
            this.axios.post('',{
                search:this.search
            }).then((res) => {
                var status = res.data.status;
                if(status === 0){
                this.$message({
                    type: 'info',
                    message:"res.data.isEmpty"
                });
                }else{
                    alert('error');
                }
            })
        }
    }
}
</script>

<style scoped>
.search-box{
    width:100%;
    height:200px;
    position:relative;
}
.search-body :nth-child(1){
    margin-top: 100px;
    margin-left:230px;
}
.search_text{
    width:60%;
    height:40px;
    color:rgb(14, 2, 2);
    font-size: 20px;
    background-color:transparent;
    border:none;
    border-bottom:1px rgb(14, 2, 2) solid;
    outline:none;
    text-indent:10px;
}
input::-webkit-input-placeholder{
    color:rgb(5, 5, 5);
    font-size:16px;
}
i{
    color:rgb(10, 1, 1);
    font-size: 24px;
    margin-left:-40px;
}
i:hover{
    color:rgb(240, 94, 10);
}
</style>