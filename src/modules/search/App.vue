<template>
  <div class="SearchPageMain">
    <my-header></my-header>
    <my-search></my-search>
    <div class="con">
      <about-article-read></about-article-read>
      <about-users></about-users>
      <about-zuo></about-zuo>
      <my-footer></my-footer>
    </div>
  </div>


</template>

<script>
  import MyHeader from '../../common/head/Header'
  import MySearch from '../../components/search/search'
  import AboutArticleRead from '../../components/search/aboutarticleread'
  import AboutUsers from '../../components/search/aboutuser'
  import AboutZuo from '../../components/search/aboutZUO'
  import MyFooter from '../../common/Footer/Footer'

  export default {
    name: '',
    components: {
      MySearch,
      MyHeader,
      AboutArticleRead,
      AboutUsers,
      AboutZuo,
      MyFooter
    },
  }

</script>


<style>
  @import '../../common/style/marx.min.css';
  body{
    font: 14px/1.4 "Helvetica Neue",Helvetica,Arial,sans-serif,"Microsoft YaHei";
    font-weight: 400;
  }
  .SearchPageMain{
      margin-top: 60px;
  }

  .con{
    background-color: rgb(236,236,236);
  }
</style>
