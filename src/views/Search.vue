<template>
    <div id="search">
        <input v-model="input" placeholder="请输入内容">
    </div>
</template>

<script>
export default {
    data(){
        return {
            input: ''
        }
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
   input{
    width: 160px;
    height: 35px;
    padding-left: 5px;
    border-radius: 4px;
    border: 1px solid rgba(255,255,255,.5);
   }
   input:focus{
    outline: none;
   }
    
</style>