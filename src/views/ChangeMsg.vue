<template>
  <div id="changemsg">
    <div id="change">
        <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="昵称：">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="其他：">
    <el-input v-model="form.other1"></el-input>
  </el-form-item>
  <el-form-item label="活动名称：">
    <el-input v-model="form.other2"></el-input>
  </el-form-item>
  
  <el-form-item label="个人介绍：">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">确认提交</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
    </div>
  </div>
</template>

<script>
import {postmymsg} from '../internet/mymsg'

export default {
    data() {
      return {
        form: {
          name: '',
          other1:'',
          other2:'',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        let date = new Date();
        
        let rulefrom = {
            username:this.form.name,
            textarea:this.form.desc,
            date:date
        }
        postmymsg(rulefrom).then(res=>{
            console.log(res);
        }).catch(err=>{ 
            console.log(err);
        })
      }
    }
}
</script>

<style lang="scss" scoped>
#changemsg{
    width: 100%;
    height: 100vh;
    padding-top: 50px;
    background-color: #f6f6f6;
    #change{
        width: 50%;
        height: 400px;
        margin: 0 auto;
        border: 1px solid black;
        .el-form{
            margin: 0 auto;
            div{
                width: 280px;
                margin: 0 auto;
                margin-top: 10px;
            }
        }
    }
}

</style>