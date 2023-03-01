<template>
  <div id="good">
    <div id="h" @click="toDetail">
      <h2>Vue 点击空白处隐藏盒子</h2>
    </div>
    <div id="pbox" @click="toDetail">
      <div id="p">
        <p>
          当页面引用多个组件复用时候，为了不干扰其他组件（组件冒泡要去除）
          当点击空白区域在判断，空白区域是否在当前组件dom内
          （dom包含关系this.$el.contains、e.target） mounted() { let that=this
          document....
        </p>
        <img v-lazy="item" alt="" />
      </div>
      <div id="detail">
        <i class="el-icon-view"></i><span id="view">919</span>
        <i class="el-icon-user"></i><span id="agree">1</span>
        <i class="el-icon-chat-dot-square"></i><span id="pview">9</span>
        <i class="el-icon-s-custom"></i><span id="author">枫叶</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Good",
  data() {
    return {
      item: "https://img2.baidu.com/it/u=2032441110,532981321&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666285200&t=c647b9b46577899d1f47dbfda70235d0",
    };
  },
  methods:{
    toDetail(){
      this.$router.push('/detail');
      console.log("detail");
    }
  }
};
</script>

<style scoped lang="scss"> 
#good {
  width: 100%;
  /* background-color: pink; */
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex: .2 .8;
  #h:hover{
    color: #FC5531;
    cursor: pointer;
  }
  #pbox{
    display: flex;
    flex-direction: column;
    flex: .7 .3;
    #p{
      display: flex;
      flex: 0.8 0.2;
      color: #999AAA;
    }
    #p:hover{
      cursor: pointer;
      color: #409EFF;
    }
  }
  #detail{
    display: flex;
    color: #999AAA;
    span{
      flex: 1;
      margin-left: 10px;
    }
    span:hover{
      color: #409EFF;
      cursor: pointer;
    }

  }
}


img {
  width: 100px;

}
</style>