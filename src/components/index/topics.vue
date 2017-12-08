<template>
  <div class="topics">
    <div class="topics-body" :style="{backgroundImage: 'url(' + message.cover + ')'}">
      <div class="mask"></div>
      <div class="body-info">
        <div class="info-tip">
          <div class="info-tip-f"> 话题</div>
          <div class="info-tip-s"></div>
        </div>
        <div class="info-title">
          <span>{{message.title}}</span>
          <i class="iconfont icon-next-copy"></i>
        </div>
        <div class="info-counts">
          <span style="margin-left: 0">{{message.collect_count}}人收藏</span>
          <span>|</span>
          <span>{{message.comment_count}}个讨论</span>
        </div>
      </div>
    </div>
    <div class="topics-talk">
      <div class="item">
        <div class="body">
            <div class="body-info">
            <a href="" class="talkuser">
              {{user}}
              <span>:</span>
            </a>
           <span class="talktext" v-html="text"></span>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  import axios from 'axios'

  export default {
    name: '',
    data() {
      return {
        message: '',
        user: '',
        text: ''
      }
    },
    methods: {

    },
    mounted() {
      let that = this;
//      axios.get('api/topics.json').then(function (response) {
      axios.get('api/topics').then(function (response) {
        that.message = response.data.topic;
        let i = 0;
        that.user = that.message.comments[i].author.username;
        that.text = that.message.comments[i].text;
        let interval = setInterval(function () {
          that.user = that.message.comments[i].author.username;
          that.text = that.message.comments[i].text;
          if (i >= that.message.comments.length-1) {
              i = 0;
            return;
          }
          i = i + 1;
        }, 6000000000000000000000);
      });
    }
  }
</script>

<style scoped>
  /*@import '../../common/style/marx.min.css';*/

  .topics {
    margin-top: 25px;
    cursor: pointer;
    background-color: #fff;
    height: 250px;
  }

  .topics-body {
    border-radius: 4px 4px 0 0;
    position: relative;
  }

  .mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .4);
    z-index: 0;
  }

  .body-info {
    padding: 18px 30px;
    height: 100%;
    color: #fff;
  }

  .info-tip{
    position: relative;
  }

  .body-info span a{
    color: #272c2f;
    font-weight: 500;
  }

  .info-tip-f {
    font-size: 14px;
  }

  .info-tip-s {
    width: 20px;
    height: 5px;
    border-radius: 6px;
    background-color: #F8D440;
    margin-top: 10px;
  }

  .info-title {
    position: relative;
    font-size: 22px;
    line-height: 28px;
    margin-top: 30px;
    margin-bottom: 18px;
  }

  .info-title i {
    position: absolute;
    top: 0;
    right: 315px;
    font-size: 24px;
    font-weight: bolder;
  }

  .info-counts {
    position: relative;
    font-size: 14px;
    color: rgba(255, 255, 255, .6);
  }

  .info-counts span {
    margin-left: 5px;
    color: #fff;
  }

  .topics-talk{
    height: 30px;
    box-sizing: border-box;
  }

  .talkuser{
    color: #272c2f;
    text-decoration: none;
  }

  .talktext{
    color: #272c2f;
  }

</style>
