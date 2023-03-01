<template>
  <div id="detail">
    <div id="box">
      <div id="left">
        <div id="top">
          <div id="head">
            <div id="touxiang">
              <img src="../assets/logo.png" alt=""/>
            </div>
            <div id="other">
              <h2>会飞的企鹅</h2>
              <span>码龄 7 年</span>
            </div>
          </div>
          <div id="achiment">
            <div id="achitop">
              <div><span>30</span><p>原创</p></div>
              <div><span>10万+</span><p>周排名</p></div>
              <div><span>30万+</span><p>总排名</p></div>
              <div><span>2347</span><p>访问</p></div>
            </div>
            <hr>
            <div id="achifoot">
              <div><span>520</span><p>积分</p></div>
              <div><span>53</span><p>粉丝</p></div>
              <div><span>105</span><p>获赞</p></div>
              <div><span>20</span><p>评论</p></div>
              <div><span>5</span><p>收藏</p></div>
            </div>
          </div>
          <div id="btn">
            <div><button>私信</button></div>
            <div><button>关注</button></div>
          </div>
        </div>
        <!-- <div id="bottom">

        </div> -->
      </div>
      <div id="right">
        <div id="title">
          <h1>title</h1>
          <div id='detail'>
            <div id="ifself"><span>原创</span></div>
            <div id="dright">
              <div id="dtop">
                <li>author</li>
                <li>time</li>
                <li>views</li>
                <li>shouchang</li>
              </div>
              <div id="dbottom">
                <span>分类专栏：HTML</span>
                <span>章标签： HTML CSS 前端</span> 
              </div>
            </div>
          </div>
        </div>
        <article>
          <div id="articlebox">
            <div id="articlecontent">
              <h3>今日博客标题</h3>
              <p>
                HTML Spec: “The article element represents a self-contained
                composition in a document, page, application, or site and that
                is, in principle, independently distributable or reusable, e.g.
                in syndication.” article 是一个特殊的 section 标签，它比 section
                具有更明确的语义, 它代表一个独立的、完整的相关内容块。一般来说，
                article 会有标题部分(通常包含在 header 内)，有时也会 包含 footer
                。虽然 section
                也是带有主题性的一块内容，但是无论从结构上还是内容上来说，article
                本身就是独立的、完整的。 HTML Spec 中接着又列举了一些 article
                适用的场景。 “This could be a forum post, a magazine or
                newspaper article, a blog entry, a user-submitted comment, an
                interactive widget or gadget, or any other independent item of
                content.” 当 article 内嵌 article 时，原则上来说，内部的 article
                的内容是和外层的 article
                内容是相关的。例如，一篇博客文章中，包含用户提交的评论的 article
                就应该潜逃在包含博客文章 article 之中。
                问题是怎么才算“完整的独立内容”？有个最简单的判断方法是看这段内容在
                RSS feed
                中是不是完整的。看这段内容脱离了所在的语境，是否还是完整的、独立的
              </p>
              <pre>
                  <ol>
                    <li></li>
                  </ol>
                </pre>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#detail{
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
  #box{
    width: 85%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    padding-top: 20px;
    // flex:;
    #left{
      // width: 40%;
      height: auto;
      flex: .3;
      background-color: #fff;
      margin-right: 20px;
      // border: 1px solid rgba(40, 37, 37, 0.7);
      #top{
        width: 100%;
        height: auto;
        margin-bottom: 20px;
        border-bottom: 1px solid rgba(40, 37, 37, 0.7);
        #head{
        width: 100%;
        height: 60px;
        display: flex;
        margin-bottom: 20px;
        #touxiang{
          flex: .3;
          width: 50px;
          height: 50px;
          margin-top: 10px;
          margin-left: 10px;
          border: 1px solid rgba(40, 37, 37, 0.7);
          border-radius: 25px;
          margin-right: 40px;
          img{
            width: 50px;
            height:50px;
          }
        }
        #other{
          width: 300px;
          h2{
            height: 40px;
            line-height: 40px;
            text-align: left;
            font-weight: 400;
          }
          span{
            color: rgba(40, 37, 37, 0.7);
          }
        }
        }
        #achiment{
          width: 100%;
          span:hover{
            color: aqua;
            cursor: pointer;
          }
          p:hover{
            color: aqua;
            cursor: pointer;
          }
          #achitop{
            width: 100%;
            height: 60px;
            display: flex;
            text-align: center;
            // padding: 25% 0;
            // margin-top: 25px;
            // padding-top: 25px;
            div{
              flex: 1;
              span{
                display: inline-block;
                height: 25px;
                line-height: 25px;
                color: #555666;
              }
            }
          }
          #achifoot{
            width: 100%;
            height: 60px;
            display: flex;
            text-align: center;
            padding-top: 15px;
            div{
              flex: 1;
              span{
                display: inline-block;
                height: 25px;
                line-height: 25px;
                color: #555666;
              }
            }
          }
        }
        #btn{
          margin-top: 5px;
          width: 100%;
          height: 60px;
          display: flex;
          div{
            flex: 1;
            height: 40px;
            text-align: center;
            button{
              width: 180px;
              height: 30px;
              border-radius: 10px;
              background-color: #fff;
              border: .1px solid rgba(40, 37, 37, 0.7);
            }
            button:hover{
              cursor: pointer;
              background-color: rgba(148, 115, 74, 0.239);
            }
          }
        }
      }
     
    }
    #right{
      flex: 1;
      background-color: pink;
    }
  }
}
</style>