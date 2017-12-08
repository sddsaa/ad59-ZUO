<template>
  <div class="article">
    <div class="header">
      推荐阅读
    </div>
    <div class="container">
      <div class="box" v-for="(hot,index) in hotarticles"
           :style="{backgroundImage: 'url(' + hotarticles[index].banner + ')'}">
        <div class="little"></div>
        <div class="textwrap">
          <div class="de">
            <div class="title">
              {{ hotarticles[index].title}}
            </div>
            <div class="text">
              {{hotarticles[index].summary}}
            </div>
          </div>
          <div class="timetag">
            <div class="tt-body">
              <div class="tag">
                <i :style="{color:hotarticles[index].sceneTagColor}" class="iconfont icon-yuan"></i>
                {{hotarticles[index].sceneTagName}}
              </div>
              <div class="time">
                {{hotarticles[index].timeAgo}}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
  import axios from 'axios'

  export default {
    name: '',
    data() {
      return {
        hotarticles: ''
      }
    },
    mounted() {
      let that = this;
    axios.get('api/hot_articles').then(function (response) {
//      axios.get('api/hot_articles.json').then(function (response) {
        that.hotarticles = response.data.hot_articles;
//        console.log(that.hotarticles);
      })
    }
  }
</script>

<style scoped>
  @import '../../common/style/marx.min.css';

  .article {
    margin: 0 auto;
  }

  .container {
    display: flex;
    justify-content: space-between;
  }

  .header {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }
  .box {
    width: 298px;
    height: 452px;
    background-size: cover;
    box-sizing: border-box;
    color: #fff;
    font-weight: 700;
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    background-color: rgba(0,0,0,0.2);
    position: relative;
    border-radius: 4px 4px 0 0;
  }

  .little{
    position: absolute;
    top:0;
    left: 0;
    right:0;
    bottom: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 100;
  }

  .de{
    margin-bottom: 18px;
    padding-left: 18px;
    padding-right: 18px;
    width: 100%;
    background-color: transparent;
  }

  .title{
    font-size: 18px;
    color: #fff;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 10px;
    height: auto;
  }

  .text {
    font-size: 14px;
    font-weight: 400;
    color: rgba(255,255,255,.8);
    padding-top: 10px;
  }

  .timetag {
    width: 100%;
    font-size: 14px;
    font-weight: lighter;
  }

  .tt-body {
    border-top: 1px solid rgba(255, 255, 255, .2);
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
    padding: 15px 8px;
  }

  .tt-body .tag i{
    font-size: 12px;
    margin-right: 5px;
  }


</style>
