<template>
  <div class="article-page" v-if="articlepagetoggle">
    <div class="article-body">
      <div class="body-title">
        <span>相关深度阅读</span>
      </div>
      <div class="body-content">
        <div class="content-box" v-for="(article,index) in articles"
             :style="{backgroundImage: 'url(' + articles[index].banner + ')'}">
          <a href="" class="mask"></a>
          <div class="box-title">
            {{articles[index].title}}
          </div>
          <div class="box-info">
            {{articles[index].summary }}
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
        articles: '',
        articlepagetoggle:true
      }
    },
    methods: {
//        获取用户输入的关键字
//      getUrl: function (name) {
//        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
//        let r = window.location.search.substr(1).match(reg);
//        if (r !== null) return decodeURI(r[2]);
//        return null;
//      },

      get () {
        let url = window.location.href;
        console.log('url'+url);
        url = url.split('?')[1];
        url = url.split('=')[1];
        console.log(url)
      },
      isarticleShow:function () {
        if (this.articles.length !== 0){
          this.articlepagetoggle = false;
          console.log('222');
        }

      }
    },
    mounted() {
      this.get();
//      this.isarticleShow();

//       拼接关键字,发出数据请求
      let key = this.getUrl('q');





      let that = this;
      axios.get('api/search/articles?q=' + key).then(function (response) {
        that.articles = response.data.pgcs;
      })
    }
  }
</script>

<style scoped>
  @import '../../common/style/marx.min.css';
  /*代表当前页面*/
  .article-page {
    width: 100%;
  }

  /*组件实际所占大小*/
  .article-body {
    width: 930px;
    margin: 0 auto;
  }

  /*当前组件标题*/
  .body-title {
    text-align: center;
    padding: 30px 0;
    font-size: 20px;
    font-weight: 700;
  }

  .body-content {
    display: flex;
    justify-content: flex-start;
  }

  .content-box {
    position: relative;
    width: 219px;
    height: 180px;
    border-radius: 4px;
    padding: 0 18px 18px 18px;
    margin-right: 18px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    border-radius: 4px;
    text-decoration: none;
  }

  .box-title {
    padding-top: 60px;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
  }

  .box-info {
    font-size: 12px;
    padding-top: 15px;
    color: rgba(255, 255, 255, .6);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }


</style>
