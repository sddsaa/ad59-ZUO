<template>
  <div>
    <my-header class="header"></my-header>
    <my-advertise></my-advertise>
    <div class="container">

      <div class="container-left">
        <my-topics></my-topics>
        <all-select></all-select>
        <my-hot-post></my-hot-post>
      </div>
      <div class="container-right" id="container-right">
        <my-hot-tags></my-hot-tags>
        <my-reco-users></my-reco-users>
      </div>
    </div>
    <my-footer></my-footer>
  </div>

</template>

<script>
  import MyHeader from '../../common/head/Header'
  import MyAdvertise from '../../components/index/advertise'
  import MyHotTags from '../../components/index/hottags'
  import MyRecoUsers from '../../components/index/reco-user'
  import MyTopics from '../../components/index/topics'
  import MyHotPost from '../../components/index/hot-post'
  import MyFooter from '../../common/Footer/Footer'
  import AllSelect from '../../components/index/downdrop'
  import axios from 'axios'

  export default {
    name: 'index',
    components: {
      MyHeader,
      MyAdvertise,
      MyHotTags,
      MyRecoUsers,
      MyTopics,
      MyHotPost,
      MyFooter,
      AllSelect
    },
    methods: {
      tabScroll() {
        window.addEventListener("scroll", this.handleScroll);
      },

      handleScroll() {
        let t = document.documentElement.scrollTop || document.body.scrollTop;
//        console.log(t);
        let tabBar = document.getElementById("container-right");
        if (t >= 240) {
          tabBar.style.cssText = "position:fixed;bottom:100px;right:25%;z-index:999;";
        } else {
          tabBar.style.cssText = "float: right;width: 220px;";
        }
      }
    },
    mounted() {
//      this.tabScroll();

      axios.get("api/currentuser")
        .then(function (res) {
          console.log(res.data.status);
      })

    },
  }
</script>


<style>
  @import '../../common/style/marx.min.css';
  body{
    overflow: hidden;
    background-color: rgb(245,245,245);
    margin-top: 60px;
  }
  .container{
    width: 790px;
    /*overflow: hidden;*/
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .container-left{
    width: 540px;
  }

  .container-right{
    width: 220px;
  }

</style>
