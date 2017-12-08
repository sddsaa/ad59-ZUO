<template>
  <div class="hot-posts">
    <!--<div class="Recommend"></div>-->
    <!--头像和右侧点赞部分-->
    <div class="posts-body" v-for="(post,index) in posts">
      <header>
        <div class="header-inner">
          <div class="user-info">
            <div class="user-avatar">
              <a href="">
                <img :src="posts[index].owner.avatar" class="img-cycle" alt="">
              </a>
            </div>
            <div class="user-name">
              <a href="">{{posts[index].owner.username}}</a>
            </div>
          </div>
          <!--交互部分-->
          <div class="actions">
            <span class="ac-child">
              <i class="iconfont icon-anonymous-iconfont"></i>
            </span>
            <span class="ac-child">{{posts[index].likeCount}}个赞同</span>
            <a href="" class="ac-child">
              <i class="iconfont icon-fenxiang share"></i>
            </a>
            <div class="dropdown ac-child">
              <a href="">
                <i class="iconfont icon-shenglve1 more"></i>
              </a>
            </div>
          </div>

        </div>
      </header>

      <!--下方内容部分-->
      <section>
        <div class="post-image">
          <div class="image-overlay"></div>
          <img :src="posts[index].postImage.url" alt="">
          <a href="">
            <div class="like-tip">
              <div class="like-big"></div>
              <div class="like-small"></div>
            </div>
          </a>
        </div>
        <!--增加评论信息-->
        <div class="post-content">
          <div class="content-text">{{posts [index].postDescription}}</div>
          <div class="tags">
            <div class="tags-thr">
              <span>
                <i :style="{color:posts[index].sceneTag.color}" class="iconfont icon-yuan"></i>
                {{posts[index].sceneTag.name}}
              </span>
              <span v-for="(tag,index1) in posts[index].tags">
                <i class="iconfont icon-yuan"></i>
                {{posts[index].tags[index1]}}
              </span>
            </div>
          </div>
          <!--评论信息-->
          <div class="comment-info">
            <div class="com-in-to">
              <i class="iconfont icon-xinxi"></i>
              <span>{{posts[index].commentedCount}}条评论</span>
              <span>更多评论...</span>
            </div>
            <ul class="comment-list">
              <li v-for="(comuser,index2) in posts[index].comments" class="li-num">
                <div class="com-content">
                  <a> {{posts[index].comments[index2].author.username}}</a>
                  <span>-</span>
                  <span v-html="posts[index].comments[index2].text"></span>
                </div>
                <div class="com-actions">
                  <div class="agotime">
                    {{posts[index].comments[index2].timeAgo}}
                  </div>
                  <div class="zan">
                    <span class="huifu" @click="showTextareaClicked">回复</span>
                    点亮
                    {{posts[index].comments[index2].likeNumber}}
                    <i class="iconfont icon-dengpao-"></i>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="add-info">
            <div class="input-wrap">
              <div class="input-body" @click='ShowTextarea' v-show="hideInput">
                <input type="text" placeholder="写下你的评论..."/>
              </div>
              <!--点击显示文本域-->
              <div class="text-body" v-show="hidebody">
                <div class="body-area">
                  <textarea placeholder="写下你的评论..." style="min-height: 100px" v-model="commentText"></textarea>
                </div>
                <div class="body-hide">
                  <span v-show="cancel" @click="cancelTextarea">取消</span>
                  <span @click="commentClicked">评论</span>
                  <p style="display: none" ref="objectID">{{posts[index].objectId}}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import jquery from 'jquery'

  export default {
    name: '',
    data() {
      return {
        posts: '',
        hideInput: true,
        hidebody: false,
        cancel: true,
        commentText:''
      }
    },
    methods: {
      ShowTextarea: function (e) {
        e.target.style.display = 'none';
        e.target.parentNode.parentNode.lastChild.style.display = 'block';
      },
      cancelTextarea: function (e) {
        e.target.parentNode.parentNode.style.display = "none";
        e.target.parentNode.parentNode.parentNode.firstChild.firstChild.style.display = "block";
      },

      showTextareaClicked: function (e) {

      },


      commentClicked(e){

        let _this = this;
        let textword = this.commentText;
          console.log(textword);
        axios.get('api/currentuser').then(function (res) {
          let that = _this;
          console.log(textword);
            if (res.data.status === 'ok'){
           let textid = e.target.parentNode.lastChild.innerHTML;
           console.log(textid);
                axios({
                  url: 'api/post/'+ textid +'/add_comment',
                  method: 'POST',
                  data:{
                    isReply: false,
                    text: textword
                  }
                })
            } else {

            }

        })
      }

    },
    mounted() {
      let that = this;
      axios.get('api/web_hot_posts').then(function (response) {
//        axios.get('api/web_hot_posts.json').then(function (response) {
        that.posts = response.data.posts;
        console.log(that.posts);
      })
    }
  }
</script>

<style scoped>
  @import '../../common/style/marx.min.css';

  /*头部*/
  .posts-body {
    margin-top: 30px;
    background-color: #fff;
    height: auto;
  }

  header {
    padding: 10px 18px;
    height: 60px;
    /*position: relative;*/
    box-sizing: border-box;
  }

  /*头部内容*/
  .header-inner {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    font-weight: 400;
  }

  /*用户信息*/
  .user-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .user-name {
    font-size: 14px;
  }

  a {
    color: #272c2f !important;
    text-decoration: none;
  }

  /*用户头像宽高*/
  .user-avatar {
    width: 40px;
    height: 40px;
  }

  /*设置头像为圆框*/
  .img-cycle {
    border-radius: 50%;
  }

  .actions {
    display: flex;
    color: #959697;
    font-size: 14px;
  }

  i {
    color: #959697
  }

  .ac-child {
    margin-left: 10px;
  }

  .post-content {
    padding-top: 18px;
  }

  /*提交内容的部分*/
  section {
    background-color: #fff;
    font-size: 14px;
  }

  /*关于图片的文字描述*/
  .content-text {
    line-height: 22px;
    padding: 0 25px 18px;
    color: #595c5d;
    font-size: 14px;
  }

  /*标签样式设置*/
  .tags {
    margin: 0 25px;
    padding-bottom: 13px;
    color: #a6a7a7;
    border-bottom: 1px solid #ececec;
  }

  .tags .tags-thr {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .tags span {
    margin-right: 15px;
  }

  .tags span i {
    font-size: 10px;
  }

  /*评论列表*/
  ul, li {
    list-style: none;
  }

  ul {
    padding: 0;
  }

  .comment-info {
    padding: 20px;
    margin: 0 25px;
    font-size: 14px;
    color: #a6a7a7;
    border-bottom: 1px solid #ececec;
  }

  .com-in-to i {
    font-size: 18px;
  }

  .com-content {
    padding-top: 5px;
  }

  .com-content a, .com-content span a {
    font-size: 12px;
    font-weight: 600;
    color: #272c2f;
    text-decoration: none;
  }

  .com-actions {
    display: flex;
    justify-content: space-between;
    padding-top: 3px;
    line-height: 18px;
  }

  .agotime {
    color: #c9c9c9;
  }

  .zan {
    color: #a1a2a3;
    cursor: pointer;
    padding-right: 3px;
  }

  .comment-list li {
    padding: 9px 15px;
    font-size: 12px;
    color: #595c5d;
  }

  /*增加评论输入框*/
  .add-info {
    padding: 20px 25px;
    /*height: 80px;*/
  }

  .add-info input {
    width: 100%;
    outline: none;
    border: none;
    cursor: auto;
    padding: 0;
  }

  .text-body {
    width: 100%;
  }

  .text-body textarea {
    margin-top: 1px;
    padding: 0;
    width: 100%;
    outline: none;
    border: none;
    cursor: auto;
  }

  .body-hide {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .body-hide span {
    cursor: pointer;
  }

  .huifu {
    display: none;
  }

  .li-num:hover .huifu {
    display: inline-block;
  }

  .li-num:hover {
    background-color: rgb(230, 230, 230);
  }

  .post-image img{
    /*cursor:;*/
  }


</style>
