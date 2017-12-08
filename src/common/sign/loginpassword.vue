<template>
  <!--通过密码登录-->
  <div>
    <div class="loginpasswordPage">
      <div class="wrap">
        <header>
          <span>欢迎回到&nbsp;ZUO</span>
        </header>
        <div class="login-container">
          <div class="more">
            <div class="font-img">
              <i class="iconfont icon-weibos"></i>
              <i class="iconfont icon-weixin-copy"></i>
            </div>
            <div class="info">
              你可以使用第三方社交账号直接登录
            </div>
            <div class="hr">
              <span>或者</span>
            </div>
          </div>
          <div class="login-info">
            <div class="phone">
              <input type="text" placeholder="手机号" v-model="phone"/>
            </div>
            <div class="check">
              <input type="password" placeholder="密码" v-model="password"/>
            </div>
            <div class="jump">
              <div class="nonum">
                <span></span>忘记密码</span>
              </div>
              <div class="other">
                <span>手机验证码登录</span>
              </div>
            </div>
            <div class="submit">
              <button @click="LoginPassClicked">登录</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--<modify-password v-if="modifyPasswordShow"></modify-password>-->
    <!--<back-login-captche ></back-login-captche>-->
  </div>
</template>

<script>
  import ModifyPassword from '../sign/modify-password'
  import BackLoginCaptche from '../sign/loginpasscaptche'
  import bus from '../../common/js/bus'
  import axios from 'axios'


  export default {
    name: '',
    components: {
      ModifyPassword,
      BackLoginCaptche,
    },
    data() {
      return {
        ShowLoginWord: false,
        phone: '',
        password: ''
      }
    },
    methods: {
      LoginPassClicked: function () {
        let user = this.user;
        axios({
          url: '/api/login_by_pass',
          method: 'post',
          data: {
            password: this.password,
            phone: this.phone
          },
        }).then(function (res) {
//          console.log(res.data);
          console.log(res.header);
          if(res.data.status === 'ok'){
              axios({
                method:'get',
                url:'api/currentuser'
              })
                .then(function (res) {
                  console.log(res.data);
                })
          }else {
            console.log(res.data.error.msg);
          }

        })
      },


    },

  }
</script>

<style scoped>
  @import '../../common/style/marx.min.css';

  .loginpasswordPage {
    background-color: rgba(0, 0, 0, 0.9);
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3600;
  }

  .wrap {
    width: 540px;
    margin: 100px auto;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
  }

  header {
    width: 100%;
    background-color: #272c2f;
    text-align: center;
    height: 82px;
    line-height: 82px;
  }

  header span {
    font-weight: 700;
    font-size: 18px;
    color: #fff;
  }

  .more {
    padding-top: 40px;
  }

  .font-img {
    display: flex;
    justify-content: center;
  }

  .font-img i {
    margin: 0 20px;
    font-size: 32px;
    color: #444;
  }

  .info {
    margin-top: 18px;
    margin-bottom: 18px;
    font-size: 14px;
    color: #a6a7a7;
    text-align: center;
  }

  .hr {
    padding-left: 40px;
    padding-right: 40px;
    font-size: 14px;
    color: #d7d8d8;
    text-align: center;
    position: relative;
  }

  .hr:before {
    content: "";
    border-top: 1px solid #d7d8d8;
    display: block;
    position: absolute;
    width: 138px;
    top: 10px;
    left: 100px;
  }

  .hr:after {
    content: "";
    border-top: 1px solid #d7d8d8;
    display: block;
    position: absolute;
    width: 138px;
    top: 10px;
    right: 100px;
  }

  .login-info {
    width: 480px;
    margin: 30px auto;
  }

  .check {
    margin-top: 20px;
    position: relative;
  }

  .login-info div input {
    box-sizing: border-box;
    width: 100%;
    border: none;
    outline: none;
    background-color: #f7f7f7;
    font-size: 14px;
    line-height: 22px;
    padding: 14px 20px;
  }

  .jump {
    margin: 20px 0 30px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  .nonum {
    color: #a6a7a7;
    cursor: pointer;
  }

  .other {
    color: #272C2F;
    cursor: pointer;
  }

  .submit {
    margin: 0 auto;
  }

  .submit button {
    width: 100%;
    font-size: 18px;
    line-height: 22px;
    padding: 14px 20px;
    color: #fff;
    background-color: #1fd7e2;
    outline: none;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
  }
</style>
