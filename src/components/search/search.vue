<template>
  <div class="Search-container">
    <div class="container-head">
      <div class="container-head-top">
        <i class="iconfont icon-sousuo"></i>
        <span>
          搜索:&nbsp;
          {{keytext}}
        </span>
      </div>
      <div class="container-head-bottom">
        <div class="bottom-tags">
            <ul class="tags-list">
                <li v-for="(tag,index) in tags">
                  <a href="">
                    <i class="iconfont icon-yuan"></i>
                    <span>&nbsp;{{tags[index].content}}</span>
                  </a>
                </li>
            </ul>
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
        tags: '',
        keytext: ''
      }
    },
    methods: {
//        获取用户输入的关键字
      getUrl: function (name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);
        console.log(window.location.search);
        if (r !== null) return decodeURI(r[2]);
        return null;
      }
    },
    mounted() {
//        拼接关键字,发出数据请求
      let key = this.getUrl('q');
      this.keytext = key;
      let that = this;
      axios.get('api/search?q=' + key).then(function (response) {
        that.tags = response.data.query.tags;
      })
    }
  }
</script>

<style scoped>
  @import '../../common/style/marx.min.css';
  ul,li{
    list-style: none  ;
  }
  /*代表搜索页面*/
  .Search-container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 120px;
    background-color: #fdfdfd;
    box-sizing: border-box;
  }

  /*页面第一部分,组件*/
  .container-head {
    width: 930px;
    margin: 0 auto;
  }

  /*包裹头部*/
  .container-head-top {
    font-weight: 500;
    color: #272c2f;
  }

  /*搜索图标*/
  .container-head-top i {
    font-weight: 900;
    font-size: 16px;
    color: #272c2f;
  }

  /*搜索关键字*/
  .container-head-top span {
    font-weight: 700;
    font-size: 18px;
    padding-left: 8px;
  }

  .container-head-bottom{
    margin-top: 20px;
  }

  /*搜索得到的标签列表*/
  .tags-list{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding:0;
  }

  /*字体样式*/
  .tags-list li a{
    color: #a6a7a7;
    padding-right: 15px;
    text-decoration: none;
  }

  .tags-list i{
    font-size: 14px;
  }


</style>
