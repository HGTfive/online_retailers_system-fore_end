<template>
  <div id="mymsg">
    <div id="msgbox">
      <div id="msghead">
        <!-- 上面的盒子 -->
        <div id="top">
          <div id="left">
            <div id="touxiang">
              <img src="../assets/logo.png" alt="" />
            </div>
            <div id="other">
              <h2>{{username}}</h2>
              <span>无原创 | </span>
              <span>无排名 | </span>
              <span>粉丝 1 | </span>
              <span>学习成就 | </span>
              
            </div>
          </div>
          <div id="right">
            <el-row>
              <el-button round @click="edtiMsg">编辑资料</el-button>
              <el-button round>设置</el-button>
            </el-row>
          </div>
        </div>
        <!-- 下面的盒子 -->
        <div id="bottom">
          <p>IP 属地：中国</p>
          <p>加入 JSDN 时间：{{date}}</p>
          <p>码龄：1 年</p>
        </div>
      </div>
      <div id="msgdetail">
        <div id="detailleft">
          <div id="achiment">
            <p>个人成就</p>
            <i class="el-icon-success"></i><span>你被访问过 2905 次</span><br />
            <i class="el-icon-s-help"></i><span>你被收藏过 5 次</span><br />
            <i class="el-icon-s-custom"></i><span>你有 2905 粉丝</span>
          </div>
          <div id="other"></div>
        </div>
        <div id="detailright" >
          <span ref="dright" @click="msgInput">{{textarea}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getmymsg} from '../internet/mymsg' 
export default {
  data() {
    return {
      clicktime: "",
      value1:"",
      username:"",
      date:"",
      textarea:""
    };
  },
  mounted(){
    this.getmsg(); 
  },
  methods: {
    //点击盒子 可以输入文字
    msgInput() {
    //  var that = this;
      let dright = this.$refs.dright;
      let str = dright.innerHTML;
      dright.ondblclick = function () {
        console.log(11);
        // clearInterval(this.clicktime);
        window.getSelection
          ? window.getSelection().removeAllRanges()
          : document.selection.empty(); 
       this.innerHTML = '<input text="" v-model="value1">';
       console.log(this.innerHTML);
       let input = this.children[0];
       input.value = str
       //全选
       input.select()
       input.onblur=()=>{
        this.innerHTML = input.value;
       }
       input.onkeyup=(e)=>{
        console.log(13);
        if (e.keyCode===13) {
            input.blur();
          }
       }
        console.log(str);
        console.log(1);
      };
      // dright1.onclick = function () {
       
      //   // setInterval(() => {
      //   //   console.log(1111);
      //   // }, 300);
      // };
    },
    edtiMsg(){
      this.$router.push('/changemsg');
    },
    getmsg(){
      getmymsg().then(res=>{
        console.log(res);
        this.username = res.data.data.username;
        this.date = res.data.data.date,
        this.textarea = res.data.data.textarea
      })
      .catch(err=>{
        console.log(err);
      })
    }

  },
};
</script>

<style lang="scss" scoped>
#mymsg {
  width: 100%;
  height: 100%;
  //   background-color: pink;
  color: #555666;
  background-color: #f6f6f6;
  // border: 1px solid black;
  // padding: 5px;
  #msgbox {
    width: 75%;
    height: 800px;
    margin: 0 auto;
    padding-top: 100px;
    // margin-top: 100px;
    // background-color: green;
    #msghead {
      width: 100%;
      height: 220px;
      background-color: #fff;
      // background-color: #f6f6f6;
      display: flex;
      flex-direction: column;
      flex: 0.6 0.4;
      border: 1px solid rgba($color: black, $alpha: 0.5);
      #top {
        display: flex;
        flex: 0.3 0.7;

        // height:;
        #left {
          width: 800px;
          display: flex;
          // flex: .3 .7;
          #touxiang {
            width: 70px;
            height: 70px;
            border: 1px solid black;
            border-radius: 35px;
            margin-left: 15px;
            margin-top: 7px;
            margin-right: 40px;
            img {
              width: 70px;
              height: 70px;
            }
          }
          #other {
            h2 {
              color: black;
            }
            height: 100px;
            flex: 1;
            // background-color: orange;
            // flex: 1;
            span {
              display: inline-block;
              height: 40px;
              line-height: 40px;
              text-align: center;
              margin-left: 7px;
            }
          }
        }
        #right {
          flex: 1;
          height: 100px;
          //   background-color: #fff;

          .el-row {
            width: 100%;
            height: 100%;
            .el-button {
              margin-top: 20px;
              margin-left: 30px;
            }
          }
        }
      }
      #bottom {
        height: 100px;
        margin-left: 10px;
        // background-color: #fff;
        p {
          height: 20px;
          line-height: 20px;
          font-size: 16px;
          margin-top: 3px;
        }
      }
    }
    #msgdetail {
      width: 100%;
      height: 500px;
      display: flex;
      // justify-content: space-between;
      // white-space: ;
      margin-top: 40px;
      // background-color: pink;
      #detailleft {
        flex: 0.3;
        height: 100%;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        border: 1px solid black;
        #achiment {
          flex: 0.45;
          // background-color: pink;
          span {
            display: inline-block;
            color: #555666;
            font-size: 18px;
            margin-top: 10px;
            margin-left: 5px;
          }
          span:hover {
            color: #409eff;
            cursor: pointer;
          }
          p:first-child {
            color: black;
            font-weight: 400;
            font-size: 32px;
            text-align: center;
            margin-top: 10px;
          }
        }
        #other {
          // flex-grow: 1;
        }
      }
      #detailright {
        flex: 1;
        background-color: #fff;
        font-size: 18px;
        padding-left: 2em;
        // flex-grow: 1;
        border: 1px solid black;
      }
    }
  }
}
</style>