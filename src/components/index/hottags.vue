<template>
  <div class="hot-tags">
    <div class="tagtitle">热门标签</div>
    <div class="hot-tags-list">
      <div v-for="(id,index) in ids">
        <span  @click="searchtags">{{cons[index]}}</span>
      </div>
      <span></span>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    name: 'hottags',
    data() {
      return {
        ids: '',
        cons: ''
      }
    },
    mounted() {
      let that = this;
      let arr1 = [];
      let arr2 = [];
      axios.get('api/web_hot_tags').then(function (response) {
//      axios.get('api/web_hot_tags.json').then(function (response) {
        for (let i = 0; i < response.data.hot_tags.length; i++) {
          arr1.push(response.data.hot_tags[i].objectId);
          arr2.push(response.data.hot_tags[i].content);
        }
        that.ids = arr1;
        that.cons = arr2;
      })
    },
    methods: {
      searchtags:function (e) {
        window.location.href = "search.html?q=" + e.target.innerHTML;
        console.log(e.target.value);
      }
    }
  }
</script>

<style scoped>
  @import '../../common/style/marx.min.css';

  .hot-tags{
    margin-top:24px;
  }

  .tagtitle{
    font-size: 14px;
    font-weight: 500;
    color: #272c2f;
  }

 .hot-tags-list{
    margin-top: 18px;
  }

  .hot-tags-list div{
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 6px 10px;
    font-size: 14px;
    color: #999b9c;
    background-color: #eaeced;
    border-radius: 4px;
    transition-duration: .3s;
    text-decoration: none;
  }

  .hot-tags-list div:hover{
    color: #fff;
    background-color: #999b9c;
  }



</style>
