<template>
  <div class="zuo-page" v-if="zuopagetoggle">
    <div class="zuo-body">
      <div class="body-title">
        <span>相关ZUO</span>
      </div>
      <div class="zou-content">
        <div class="content-box" v-for="(post,index) in posts">
          <!--作者-->
          <div class="box-top">
            <span>
              来自&nbsp;
              {{posts[index].owner.username}}
            </span>
          </div>
          <div class="box-middle">
            <!--展示-->
            <div class="zuo-mask"></div>
            <a href="">
              <img :src=posts[index].postImage.url alt="">
            </a>
          </div>
          <!--标签-->
          <div class="box-bottom">
            <div class="bottom-body">
              <a href="">
                <i class="iconfont icon-yuan" :style="{color:posts[index].sceneTag.color}"></i>
                <span>{{posts[index].sceneTag.name}}</span>
              </a>
            </div>
          </div>
          <!--下方点赞-->
          <div class="down">
            <div class="downye">
              <div class="downy">
                <i class="iconfont icon-anonymous-iconfont"></i>
                <span>{{posts[index].likeCount}}</span>
              </div>
              <div class="downe">
                <i class="iconfont icon-xinxi"></i>
                <span>{{posts[index].commentedCount}}</span>
              </div>
            </div>

            <div class="downs">
              <i class="iconfont icon-fenxiang"></i>
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
        posts: '',
        zuopagetoggle: true
      }
    },
    methods: {
//        获取用户输入的关键字
      getUrl: function (name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);
        if (r !== null) return decodeURI(r[2]);
        return null;
      },
      isShow: function () {
        if (this.posts.length !== 0) {
          this.zuopagetoggle = false;
          console.log('11111')
        }
      }
    },
      mounted() {
//       拼接关键字,发出数据请求
        let key = this.getUrl('q');
        let that = this;
        axios.get("api/search/posts?q=" + key).then(function (response) {
          that.posts = response.data.posts;
        });

//        this.isShow();
      }
  }
</script>

<style scoped>
  @import '../../common/style/marx.min.css';

  .zuo-page {
    width: 100%;
  }

  .zuo-body {
    width: 930px;
    margin: 0 auto;
  }

  .body-title {
    text-align: center;
    padding: 30px 0;
    font-size: 20px;
    font-weight: 700;
  }

  .zou-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .content-box {
    width: 219px;
    margin-bottom: 18px;
    background-color: #fff;
    border-radius: 4px;
  }

  .box-top {
    padding: 12px 10px;
    color: #a6a7a7;
  }

  .box-middle {
    background-color: rgb(236, 236, 236);
    display: flex;
    align-items: center;
    width: 100%;
    height: 219px;
    position: relative;
    overflow: hidden;
  }

  .box-middle a img {
    transition: 0.5s;
  }

  .zuo-mask {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: .5s;
    transition-property: background-color;
    z-index: 1100;
    cursor: zoom-in;
  }

  .box-middle:hover a img{
    transform: scale(1.2, 1.2);
    transition: 0.5s;
  }


  .box-middle:hover .zuo-mask{
    background-color: rgba(0,0,0,.2);
  }

  .box-bottom {
    padding: 0 15px;
  }

  .bottom-body {
    padding: 10px 0;
    border-bottom: 1px solid #ececec;
  }

  .bottom-body i {
    font-size: 12px;
  }

  .bottom-body a {
    color: #a6a7a7;
  }

  .down {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-size: 18px;
    color: #a6a7a7;
  }

  .down i {
    font-size: 18px;
    color: #bebfc0;
  }

  .downye {
    display: flex;
    justify-content: space-between;
  }

  .downy span {
    padding-left: 7px;
    padding-right: 25px;
  }


</style>
