<template>
  <div id="goods">
    <div id="goodcon"
     v-for="i in 20" 
     :key="i">
      <Good></Good>
    </div>
  </div>
</template>

<script>
import Good from "@/components/Good.vue";
export default {
  data() {
    return {
      url: "",
    };
  },
  components: { Good },
};
</script>

<style scoped>
    #goods{
        width: 100%;
        background-color: #f6f6f6;
        /* height: ;    */
        /* display: flex; */
        /* flex-direction: column; */
        /* flex-wrap: wrap;  */
    }
    #goodcon{
        width: 80%;
        /* height; */
        margin: 0 auto;
        margin-top: 50px;
        /* height: 100%; */
        /* flex: 1; */
        
    }
    
</style>