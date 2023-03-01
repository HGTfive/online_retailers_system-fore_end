<template>
  <div id="app">
   <Header/>
   <Home></Home>
   <!-- <Footer/> -->
  </div>
</template>
<script>
import Home from "./components/Home.vue"
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
export default{
  name:"App",
  components:{
    Header,
    Footer,
    Home
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#app{
  width: 100%;
  height: 827px;
  /* position: relative; */
}
#header{
  margin-top: 0;
  /* position: absolute; */
  /* top: 0px; */
}
#footer{
  margin-top: 100px;
  /* position: absolute; */
  /* bottom: 0px; */
}
</style>
<!--  -->