<template>
  <div class="application">
    <router-view class="the-content"></router-view>
    <the-footer class="the-footer"/>
  </div>
</template>

<script>
import TheFooter from './components/TheFooter.vue';
export default {
  components:{
    'the-footer':TheFooter,
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .application{
    width:640px;
    height:480px; 
    display:flex;
    flex-flow:column nowrap;
  }
  .the-content{
    overflow:scroll;
    flex-grow:1;
  }
  .the-footer{
    margin-top:auto;
    margin-bottom:0em;
  }

</style>
