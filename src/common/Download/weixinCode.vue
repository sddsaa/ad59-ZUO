<template>
  <div class="code" @click="ShowCode">
    <div class="code-body">
      <img class="img-code" src="../../assets/scan-wechat.png" alt="">
    </div>
  </div>
</template>

<script>
    export default {
      name: '',
      methods:{
        ShowCode:function () {
          this.$emit('hideWeChat');
        }
      }
    }
</script>

<style scoped>
  @import '../../common/style/marx.min.css';

  .code {
    background-color: rgba(39, 44, 47, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3600;
  }
  .code-body {

  }
  .img-code {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%) ;
    width: 436px;
    height: 440px;
  }
</style>
