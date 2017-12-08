<template>
  <div class="loginPage">
    <div class="wrap">
      <header>
        <span>忘记密码</span>
      </header>
      <div class="login-container">
        <div class="login-info">
          <div class="phone">
            <input type="text" placeholder="手机号"/>
          </div>
          <div class="check">
            <input type="text" placeholder="验证码" />
            <button>发送验证码</button>
          </div>
          <div class="pass">
            <input type="text" placeholder="新密码" />
          </div>
          <div class="passSure">
            <input type="text" placeholder="确认新密码"/>
          </div>
          <div class="submit">
            <button >确认修改</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script scoped>
    export default {
        name: ''
    }
</script>

<style scoped>
  @import '../../common/style/marx.min.css';

  .loginPage{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3600;
    background-color: rgba(0,0,0,0.9);
  }

  .wrap{
    width: 540px;
    margin: 100px auto;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
  }

  header{
    width: 100%t;
    background-color: #272c2f;
    text-align: center;
    height: 82px;
    line-height: 82px;
  }

  header span{
    font-weight:700;
    font-size: 18px;
    color: #fff;
  }

  .more{
    padding-top: 40px;
  }

  .font-img{
    display: flex;
    justify-content: center;
  }

  .font-img i{
    margin: 0 20px;
    font-size: 32px;
    color:#444;
  }

  .hr{
    padding-left: 40px;
    padding-right: 40px;
    font-size: 14px;
    color: #d7d8d8;
    text-align: center;
  }

  .login-info{
    width: 480px;
    margin: 30px auto;
  }

  .login-info div{
    margin-top: 20px;
  }

  .check{
    margin-top: 20px;
    position: relative;
  }

  .check button{
    position: absolute;
    top:4px;
    right: 4px;
    width:115px;
    padding: 12px 18px;
    font-size: 14px;
    border: none;
    background-color: #1fd7e2;
    color: #fff;
    border-radius: 4px;
  }

  .login-info div input{
    box-sizing: border-box;
    width: 100%;
    border: none;
    outline: none;
    background-color: #f7f7f7;
    font-size: 14px;
    line-height: 22px;
    padding:14px 20px;
  }

  .jump{
    margin:20px 0 30px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  .nonum{
    color:#a6a7a7;
  }

  .other{
    color: #272C2F;
  }

  .submit{
    margin:0 auto;
  }

  .submit button{
    width: 100%;
    font-size: 18px;
    line-height: 22px;
    padding:14px 20px;
    color: #fff;
    background-color: #1fd7e2;
    outline: none;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
  }
</style>
