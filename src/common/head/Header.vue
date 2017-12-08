<!--头部组件,用于导航和登录注册,显示在页面的最上,固定正在浏览器最上方-->
<template>
  <div>
    <div class="header">
      <div class="nav">
        <!--头部左侧 网站logo-->
        <div class="nav-left">
          <span>ZUO</span>
          <span class="ZUO-de">HONEY WASABI</span>
        </div>


        <!--中间页面导航和搜索框区域-->
        <div class="nav-center">
          <!--页面导航区域-->
          <div class="center-left">
            <!--导航列表-->
            <ul class="nav-list">
              <!--<li><a class="index" href="index.html" > 首页 </a></li>-->
              <!--<li><a class="article" href="article.html"  @click="changeclass">深度</a></li>-->


              <li v-for="(item,index) in menu"  @click.stop='f1(index)'>
                <a :href=wang[index] :class="{ 'white':index === isActive }">
                  {{ item }}
                </a>
              </li>
              <li><span @click="clickedDownload">下载APP</span></li>

            </ul>
            <!--搜索框区域-->
            <div class="nav-search">
              <input placeholder="输入关键字搜索" @keydown.enter="GoSearch">
              <a href="">
                <i class="iconfont icon-sousuo" ></i>
              </a>
            </div>
          </div>
        </div>


        <!--头部右侧登录注册区域-->
        <div class="nav-right">
          <ul class="list-lr">
            <!--登录按钮-->
            <li class="lidl">
              <i class="iconfont icon-yonghu1"></i>
              <span class="" @click="loginCapthceClicked">登录</span>
            </li>
            <!--注册按钮-->
            <li class="lizc">
              <span class="register-media" @click="registerNumberClicked">注册</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--验证码登录子组件-->
    <!--<login-pass-captche v-if="showLoginCaptche" @hideLoginCaptche="BackhideLoginCaptche"></login-pass-captche>-->

    <!--注册账号子组件 -->
    <register-number v-if="showRegisert" @hideRegisert = 'BackHideRegisert'></register-number>

    <!--通过密码登录子组件-->
    <login-passord v-if="showLoginCaptche" @hideLoginCaptche="BackhideLoginCaptche"></login-passord>

    <!--下载App  组件-->
    <app-download v-if="IOSDownloadShow" @pass="back"></app-download>


  </div>

</template>

<script>
  import LoginPassCaptche from '../../common/sign/loginpasscaptche'
  import LoginPassord from '../../common/sign/loginpassword'
  import LoginPassWord from '../../common/sign/loginpassword'
  import ModifyPassword from '../../common/sign/modify-password'
  import RegisterNumber from '../../common/sign/register-number'
  import AppDownload from '../../common/Download/IOSAppDownload'
  import jquery from 'jquery'

  export default {
    name: '',
    data() {
      return {
//      验证码登录隐藏
        showLoginCaptche: false,

//      注册页面隐藏
        showRegisert:false,

//        showLoginPassword:false,


//     下载IOS App 隐藏
       IOSDownloadShow: false,

        menu:['首页','深度'],
        wang:['index.html','article.html'],
        isActive:0

      }
    },
    components: {
      LoginPassCaptche,
      LoginPassord,
      RegisterNumber,
      AppDownload
    },
    methods: {
//      点击验证码登录
      loginCapthceClicked: function () {
        this.showLoginCaptche = true;
      },
      BackhideLoginCaptche:function () {
        this.showLoginCaptche = false;
      },

//     点击注册账号
      registerNumberClicked: function () {
        this.showRegisert = true;
      },
      BackHideRegisert:function () {
        this.showRegisert = false;
      },

//    显示隐藏下载APP页面
      clickedDownload() {
        this.IOSDownloadShow = true;
      },
      back: function () {
        this.IOSDownloadShow = false;
      },

//      跳转搜索页面
      GoSearch:function (e) {
        window.location.href = "search.html?q=" + e.target.value;
       },

      f1:function(index){
        this.isActive=index
      }
    },
  }
</script>

<style scoped>
  @import '../../common/style/marx.min.css';

  .header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 3600;
  }

  ul, li {
    list-style: none;
  }

  a {
    color: #9ea0a5;
    text-decoration: none;
  }

  .header {
    background-color: #272c2f;
    font-size: 14px;
    font-weight: 400;
  }

  .nav {
    padding: 0 30px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .nav div {
    box-sizing: border-box;
    height: 60px;
  }

  .nav-left {
    line-height: 60px;
  }

  .nav-left span:first-of-type {
    font-size: 20px;
    color: #ffffff;
    font-weight: bolder;
  }

  .nav-left span:last-of-type {
    position: relative;
    top: -3px;
    display: inline-block;
    margin-left: 5px;
    font-size: 10px;
    color: rgba(255, 255, 255, .3);
  }

  .nav-center {
    line-height: 60px;
    margin-right: -20px;
  }

  .center-left {
    overflow: hidden;
  }

  .center-left .nav-list {
    float: left;
  }

  /*导航部分*/
  .nav-list li {
    float: left;
    margin-right: 29px;
  }

  .nav-list li span {
    color: #9ea0a5;
  }

  .white{
    color: #fff;
  }

  .center-left .nav-search {
    float: right;
    position: relative;
  }

  .nav-search {
    width: 230px;
  }

  .nav-search input {
    outline: 0;
    border: none;
    line-height: 20px;
    vertical-align: middle;
    font-size: 14px;
    width: 100%;
    border-radius: 4px;
    padding: 6px 30px 6px 10px;
    background-color: #464b4d;
    color: #fff
  }

  .center-left .nav-search i {
    position: absolute;
    top: 2px;
    right: 10px;
    color: #b8b9b9;
    font-weight: bolder;
    font-size: 18px;
  }

  .nav-right {
    line-height: 60px;
  }

  .nav-right li {
    float: left;
    font-size: 14px;
  }

  .list-lr li {
    cursor: pointer;
  }

  .lidl {
    margin-right: 30px;
  }

  .lidl i {
    color: #9ea0a5;
  }

  span {
    color: #9ea0a5;
  }


</style>
