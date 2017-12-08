<template>
  <div v-if="ShowLogincaptche">
    <div class="loginPage">
      <div class="wrap-to" @click="HideLogincaptche"></div>
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
              <input type="text" placeholder="手机号" v-model="user.phone"/>
            </div>
            <div class="check">
              <input type="text" placeholder="验证码" v-model="user.code"/>
              <button @click="GetCodeLogin" ref="loginbtn">获取验证码</button>
            </div>
            <div class="jump">
              <div class="nonum">
                没有账号?去注册
              </div>
              <div class="other">
                <span @click="GoLoginWord">手机密码登录</span>
              </div>
            </div>
            <div class="submit">
              <button @click="SendLogin">登录</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--注册账号子组件 -->
    <!--<register-number ></register-number>-->
    <!--跳转去使用密码登录-->
    <!--<go-login-password-component ></go-login-password-component>-->
  </div>
</template>

<script>
  import axios from 'axios'
  import RegisterNumber from '../../common/sign/register-number'
  import GOLoginPasswordComponent from '../sign/loginpassword'
  import bus from '../../common/js/bus'


  export default {
    name: '',
    components: {
      RegisterNumber,
      GOLoginPasswordComponent
    },
    data() {
      return {
        user:{},
        ShowLogincaptche:'true',
      }
    },
    methods: {

      HideLogincaptche:function () {
        this.$emit('hideLoginCaptche');
      },


      //跳转登录
      GoLoginWord:function () {
        bus.$emit('changestyle',true);
        this.ShowLogincaptche = false;
      },

//      获取验证码事件
      GetCodeLogin: function () {
        let phone = this.user.phone;
        let that = this;
        axios({
          url: '/api/get_login_code',
          method: 'POST',
          data: {
            phone: phone
          }
        })
          .then(function(res){
              let time = 60;
              let timeDown = setInterval(function () {
                that.$refs.loginbtn.innerHTML = time + 's后重新获取';
                that.$refs.loginbtn.disabled = true;
                time -= 1;
                if (time===0){
                  clearInterval(timeDown);
                  that.$refs.loginbtn.innerHTML = '获取验证码';
                  that.$refs.loginbtn.disabled = false;run
                }
              },1000);
              if(res.data.status === 'OK'){
                    console.log('send code ok')
              }
          })
          .catch(function (error) {
            console.log(error);
          })
      },
//登录事件
      SendLogin: function () {
        let  user = this.user;
        axios({
          url: '/api/login_by_code',
          method: 'post',
          data: {
            code: user
          },
        }).then(function () {
          console.log('成功了');
          window.location.href='index.html';
        })
      }
    }
  }
</script>

<style scoped>
  @import '../../common/style/marx.min.css';

  .loginPage {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .wrap-to {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3600;
    background-color: rgba(0, 0, 0, 0.9);
  }

  .wrap {
    position: relative;
    z-index: 3600;
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

  .check button {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 115px;
    padding: 12px 18px;
    font-size: 14px;
    border: none;
    background-color: #1fd7e2;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
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

  .nonum a {
    color: #1fd7e2;
    text-decoration: none;
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
