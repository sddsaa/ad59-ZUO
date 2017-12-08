<template>
  <div class="wrap">
    <div class="wrap-body">
      <my-header></my-header>
      <hot-article></hot-article>
      <my-article></my-article>
    </div>
    <my-footer></my-footer>
  </div>

</template>

<script>
  import MyHeader from '../../common/head/Header'
  import MyFooter from '../../common/Footer/Footer'
  import HotArticle from '../../components/article/hot_articles'
  import MyArticle from '../../components/article/articles'

  export default {
    name: 'article',
    components: {
      MyHeader,
      HotArticle,
      MyArticle,
      MyFooter
    }
  }
</script>

<style>
  @import '../../common/style/marx.min.css';
  .wrap{
      padding-top: 60px;
      background-color: rgb(236,236,236);
  }

  .wrap-body{
    width: 930px;
    margin: 0 auto;
  }



</style>
