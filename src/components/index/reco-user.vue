<template>
  <!--右侧推荐关注组件-->
  <div class="attention">
    <!--title-->
    <span class="attention-title">推荐关注</span>
    <!--推荐用户介绍-->
    <div class="attention-user">
      <!--用户列表-->
      <div class="user-list" v-for="(recouser,index) in recousers">
        <div class="list-left">
            <a class="left-user" href="">{{recousers[index].username}}</a>
            <span ref="hiddenID">{{recousers[index].zuoId}}</span>
          <a class="left-text" href="">{{recousers[index].introduction}}</a>  <!-- 用户观点-->
        </div>
        <div class="list-right">
          <a href="">
            <img :src="recousers[index].avatar" alt="" class="right-img"> <!-- 用户头像-->
            <div class="img-mask"></div>
          </a>
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
        recousers:'',
      }
    },
    computed:{
//      getUrl(){
//        return `${this.path}${this.$refs.hiddenID}`
//      }
    },
    mounted() {
      let that = this;
      axios.get('api/web_reco_users').then(function (response) {
        that.recousers = response.data.reco_users;
      })
    }
  }
</script>

<style scoped>
  @import '../../common/style/marx.min.css';

  a {
    text-decoration: none;
  }

  .attention{
    margin-top: 30px;
  }

  .attention-title{
    font-size: 14px;
    font-weight: 500;
    color: #272c2f;
  }

  .attention-user{
      margin-top: 8px;

  }

  .user-list{
    overflow: hidden;
    border-bottom: 1px solid #e4e4e5;
    padding: 10px 0;
  }

  .list-left{
    float: left;
    width:146px;
  }

  .list-left a{
    display: block;
    font-size: 12px;
  }

  .list-left a:nth-child(1){
    font-weight: 500;
    color: #535557;
  }

  .list-left a:nth-child(2){
    padding-top: 5px;
    line-height: 18px;
    color: #999a9a
  }

  .list-right{
    float:right;
    position: relative;
  }

  .list-right img{
    width: 40px;
    border:1px solid #e4e4e5;
    border-radius:4px;
  }

  .img-mask{
    height: 40px;
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color: rgba(0,0,0,0.3);
    border-radius: 4px;
    display: none;
  }
  .list-right a:hover .img-mask{
    display: block;
  }

  .list-left .left-user:hover{
    color: #999a9a;
  }

  .list-left .left-text:hover{
    color:#535557;
  }





</style>
