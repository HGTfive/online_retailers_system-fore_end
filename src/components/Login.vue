<template>
  <div id="login">
    <div id="ruleform" >
      <span>用户名：</span>
      <el-input v-model="ruleform.username" placeholder="请输入用户名"></el-input>
      <span>密码: </span>
      <el-input
        placeholder="请输入密码"
        v-model="ruleform.password"
        show-password
      ></el-input>
      <el-row>
        <el-button type="warning" @click="toHome">登录</el-button>
        <el-button plain @click="toRegister">立即注册</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import {requestLogin} from "../internet/login"
export default {
  data() {
    return {
        ruleform:{
            username:"",
            password:""
        }
        
    };
  },
  methods: {
    toHome(){
        //将数据提交到后台
        requestLogin(this.ruleform).then(res=>{
          console.log("qqqq")

          console.log(res)
          // if(res.status == 0){
          //   localStorage.setItem('token',res.data.token)
          //   this.$router.push('/home');
          //   console.log( res);
          // }
          // else {
          //   alert("账号或密码错误");
          // }
            
        })
        .catch(err=>{
            console.log(err)
        })

        //在跳路由到主页面
    },
    toRegister(){
        this.$router.push('/register');
    }
  },
};
</script>

<style lang="scss" scoped>
#login {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-image: linear-gradient(45deg, #d04b8c, #8f54be, #7258d5);
  /* background-color: pink; */
  /* z-index: 10000000; */
}
#ruleform {
  width: 450px;
  height: 340px;
  margin: 0 auto;
  margin-top: 200px;
  border: 1px solid rgb(255, 255, 255, 0.5);
  border-radius: 6px;
  .el-input {
    width: 40%;
    margin-top: 50px;
    // margin-left: 40px;
  }
  span {
    display: inline-block;
    width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: left;
    margin-left: 70px;
  }
  .el-row {
    margin-top: 50px;
    margin-left: 140px;
  }
  .el-row button:first-child {
    margin-right: 20px;
  }
}
</style>