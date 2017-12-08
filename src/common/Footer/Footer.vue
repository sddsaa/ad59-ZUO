<template>
  <div class="footer">
    <div class="footer-body">
      <div class="top">
        <span href="" @click = "ShowWechatCode">关注公众号</span>
        <span href="">关于<strong>ZUO</strong></span>
        <span href="" @click = 'ShowFeedback'>反馈吐槽</span>
      </div>
      <div class="bottom">
        <span class="left">上海设慧网络科技有限公司2016版权所有</span>
        <span>沪ICP备15013372号</span>
      </div>
    </div>

    <we-chat v-if="Wechat" @hideWeChat="ShowWeChat"></we-chat>
    <feed-back v-if="Feedback" @hideFeedback="ShowFeedbackGo"></feed-back>
  </div>
</template>

<script>
  import WeChat from '../../common/Download/weixinCode'
  import FeedBack from '../../common/Download/feedback'

    export default {
        name: '',
      data(){
          return{
            Wechat:false,
            Feedback:false
          }
      },
        components:{
          WeChat,
          FeedBack
        },
      methods:{
//        显示隐藏微信公众号
        ShowWechatCode:function () {
          this.Wechat = true;
        },
        ShowWeChat:function () {
          this.Wechat = false;
        },

        //显示隐藏反馈吐槽
        ShowFeedback:function () {
          this.Feedback = true
        },
        ShowFeedbackGo:function () {
          this.Feedback = false;
        }
      }
    }
</script>

<style scoped>
  @import '../../common/style/marx.min.css';

  .footer{
    background-image: url('../../assets/index/overlay.png');
    background-repeat: repeat;
    background-color: #eaeced;
  }

  .footer-body{
    max-width: 420px;
    margin: 0 auto;
    padding-top: 18px;
    padding-bottom: 18px;
    text-align: center;
  }

  .bottom{
    font-size: 13px;
    color: #b8b9b9
  }

  .top span{
    text-decoration: none;
    font-size: 13px;
    color: #999a9a;
    margin: 0 10px;
    cursor: pointer;
  }


  .bottom{
    margin-top: 10px;
  }

  .left{
    margin-right: 15px;
  }


</style>
