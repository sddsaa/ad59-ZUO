<template>
  <div class="content">
    <div class="header">
      更多文章
    </div>
    <div class="container">
      <div class="box" v-for="(article,index) in articles">
        <div class="img" :style="{backgroundImage: 'url(' + articles[index].banner + ')'}">
          <a href=""></a>
        </div>
        <div class="de">
          <div class="text">
            {{articles[index].title}}
          </div>
          <div class="bottom">
            <div class="author">{{articles[index].author.name}}</div>
            <div class="time">{{articles[index].timeAgo}}</div>
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
        articles: ''
      }
    },
    mounted() {
      let that = this;
//      axios.get('api/articles.json').then(function (response) {
        axios.get('api/articles').then(function (response) {
        that.articles = response.data.articles;
      })
    }
  }
</script>

<style scoped>
  @import '../../common/style/marx.min.css';

  .content {

  }

  .header {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }

  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .box {
    margin-bottom: 15px;
    width: 219px;
    border-radius: 4px 4px 0 0;
    overflow: hidden;
    background-color: #fff;
  }

  .img {
    width: 100%;
    height: 162px;
    background-size: cover;
  }

  .de{
    padding: 15px;
  }

  .text {
    height: 105px;
    font-size: 14px;
    color: #272c2f;
    line-height: 20px;
    display: block;

  }

  .bottom {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #272c2f;
  }

  .time {
    color: #a6a7a7;
  }


</style>
