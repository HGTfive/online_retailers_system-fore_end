<template>
  <div id="store">
    <div id="storec">
        <Good></Good>
    </div>
  </div>
</template>

<script>
import Good from '../components/Good.vue'
export default {
    components:{Good},
    data(){
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
#store{
    width: 100%;
    height: 100vh;
    background-color: #f6f6f6;
    #storec{
        width: 75%;
        // height: ;
        margin: 0 auto;
        padding-top: 50px;
    }
}

</style>