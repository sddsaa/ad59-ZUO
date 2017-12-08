<template>
    <div class="adver" v-if="adverShow">
        <div class="adver-body">
          <h1>可能是全宇宙最ZUO的图片社区</h1>
          <div class="jswz">
              <span>和像你一样认真对待生活的人一起</span><br>
              <span>从设计的视角，重新认识世界</span>
          </div>
          <button class="submit" @click="GoRegisterClicked">创建ZUO账号</button>
        </div>
        <span class="close" @click = "closeAdver">
          <i class="iconfont icon-X"></i>
        </span>
      <!--注册账号子组件 -->
      <register-number v-if="showRegisert" @hideRegisert = 'BackHideRegisert'></register-number>
    </div>
</template>

<script>
  import RegisterNumber from '../../common/sign/register-number'
    export default {
        name: 'advertise',
      components: {
        RegisterNumber,
      },
        data(){
          return {
              adverShow:true,
              showRegisert:false
          }
        },
        methods:{
//          组件隐藏
            closeAdver:function () {
                this.adverShow = false;
            },

//          显示注册页面
          GoRegisterClicked:function () {
            this.showRegisert = true;
          },
          BackHideRegisert:function () {
            this.showRegisert = false;
          },
        }
    }
</script>

<style scoped>
  @import '../../common/style/marx.min.css';

  h1{
    border: none;
    margin: 0;
  }
  .adver{
    position: relative;
    background-image: url("../../assets/index/overlay.png");
    background-repeat: repeat;
    background-color: #eaeced;
  }
  .adver-body{
    padding-top: 30px ;
    padding-bottom: 35px;
    margin: 0 auto;
    width: 790px;
    text-align: center;
  }
  .adver-body h1{
    font-size: 24px;
    color: #272c2f;
    font-weight: 700;
  }

  .jswz{
    margin-top: 15px;
    font-size: 16px;
    color: #5d6c75;
  }

  .submit{
    /*padding: ;*/
    margin-top: 18px;
    width:200px;
    font-size: 16px;
    background-color: #1fd7e2;
  }

  .close{
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    top: 35px;
    right: 30px;
    color: #5d6c75;
  }

  .close i{
    font-weight: 900;
  }




</style>
