<template>
  <div class="about-users" v-if="aboutuserstoggle">
    <div class="users-body">
      <div class="body-title">
        <span>相关用户</span>
      </div>
      <div class="body-content">
        <div class="content-box" v-for="(user,index) in users">
          <div class="box-top">
            <a href="###"> {{users[index].username}}</a>
            <button>关注</button>
          </div>
          <div class="box-bottom">
            <div class="bottom-it">
              <a href="" class="user-img"><img :src=users[index].avatar alt=""></a>
              <div>{{users[index].all_createposts_count}}<br>发布</div>
              <div> {{users[index].allLikesCount}}<br>被赞</div>
            </div>
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
        users: '',
        aboutuserstoggle:true
      }
    },
    methods: {
//    获取用户输入的关键字
      getUrl: function (name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);
        if (r !== null) return decodeURI(r[2]);
        return null;
      },

      isuserShow:function () {
        if (this.users.length !== 0){
          this.aboutuserstoggle = false;
          console.log('333');
        }

      }

    },
    mounted() {

//    拼接关键字,发出数据请求
      let key = this.getUrl('q');
      let that = this;
      axios.get("api/search/users?q=" + key).then(function (response) {
        that.users = response.data.users;
      });

//      this.isuserShow()
    },
  }
</script>

<style scoped>
  @import '../../common/style/marx.min.css';

  .about-users {
    width: 100%;
  }

  .users-body {
    width: 930px;
    margin: 0 auto;
  }

  .body-title {
    text-align: center;
    padding: 30px 0;
    font-size: 20px;
    font-weight: 700;
  }

  .body-content {
    display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
    padding: 10px;
  }

  .content-box {
    width: 219px;
    margin-bottom: 18px;
    background-color: #fff;
    border-radius: 4px;
  }

  .box-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 10px;
  }

  .box-top a{
    display: block;
    width: 110px;
    overflow: hidden;
    font-size: 15px;
    font-weight: 400;
    color: #272c2f;
  }

  .box-top button{
    font-size: 12px;
    padding: 3px 10px;
    color: #fff;
    background-color:#1fd7e2;
  }

  .box-bottom {
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #ececec;
    color:#a6a7a7;
    font-weight: 700;
  }

  .bottom-it{
    display: flex;
    justify-content: space-between;
  }

  .user-img img {
    width: 46px;
    height: 46px;
    border-radius: 50%;
  }
</style>
