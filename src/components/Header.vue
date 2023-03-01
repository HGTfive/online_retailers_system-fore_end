<template>
  <div id="header">
    <div id="nav">
      <span @click="openMsg">
        <i class="el-icon-s-fold"></i>
      </span>
      <span id="title">今日热门</span>
      <Search v-if="iShow==true"></Search>
      <span id="last"
        ><el-button type="primary" icon="el-icon-search">搜索</el-button></span
      >
    </div>
    <div id="msg" ref="msg" v-if="drawer">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <p slot="title" @click="toMsg">个人主页</p>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <p slot="title" @click="toStore">我的收藏</p>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <p slot="title">我的帖子</p> </el-menu-item
            ><el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <p slot="title">消息</p>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Search from "../views/Search.vue";
export default {
  components: {
    Search,
  },
  data() {
    return {
      drawer: false,
      iShow:true
    };
  },
  methods: {
    openMsg() {
      this.drawer = !this.drawer;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toMsg(){
      this.$router.push('/mymessage');
    },
    toStore(){
      this.$router.push('/store')
    }
  },
};
</script>

<style scoped>
#header {
  width: 100%;
  height: 46px;
  background-color: #409eff;
  /* position: relative; */
}
#search{
  float: right;
  margin-right: 100px;
  line-height: 46px;
}
#msg {
  position: fixed;
  /* background-color: pink; */
  background-color: #f6f6f6;
  width: 450px;
  height: 800px;
  display: block;
}
#nav {
  width: 100%;
  height: 100%;
  position: relative;
}
span {
  position: absolute;
  display: block;
  font-size: 16px;
  color: white;
  line-height: 46px;
}
span:hover {
  cursor: pointer;
}
#title {
  float: left;
  left: 45%;
  /* margin: 0 auto; */
  line-height: 46px;
  text-align: center;
}
span:first-child {
  left: 5px;
}
#last {
  right: 5px;
}
.el-col {
  width: 100%;
}
.el-col p {
  /* color: black; */
  display: inline;
}
</style>