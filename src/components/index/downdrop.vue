<template>
  <div class="all-page">
    <div class="all">
      <div class="all-left">
        <div class="left-body" @click="allListClicked">
          <i class="iconfont icon-dianb9gedian"></i>
          <span>全部</span>
          <i class="iconfont icon-xiala2"></i>
        </div>
        <ul class="list-body" v-if="hideall">
          <li><i class="iconfont icon-dianb9gedian" style=" font-size: 16px;color: #a6a7a7;"></i><span>全部</span></li>
          <li><i class="iconfont icon-yuan" style="color: rgb(228, 204, 169);"></i><span>日用</span></li>
          <li><i class="iconfont icon-yuan" style="color: rgb(161, 228, 64);"></i><span>公共</span></li>
          <li><i class="iconfont icon-yuan" style="color: rgb(255, 71, 71);"></i><span>关爱</span></li>
          <li><i class="iconfont icon-yuan" style="color: rgb(88, 0, 24);"></i><span>家居</span></li>
          <li><i class="iconfont icon-yuan" style="color: rgb(174, 0, 255);"></i><span>时尚</span></li>
          <li><i class="iconfont icon-yuan" style="color: rgb(255, 150, 0);"></i><span>美食</span></li>
          <li><i class="iconfont icon-yuan" style="color: rgb(33, 140, 124);"></i><span>数码</span></li>
          <li><i class="iconfont icon-yuan" style="color: rgb(255, 234, 0);"></i><span>视觉</span></li>
          <li style="border: none;padding-bottom: 0"><i class="iconfont icon-yuan" style="color: rgb(0, 191, 243);"></i><span>空间</span></li>

        </ul>
      </div>
      <div class="all-right">
        <div class="selectgood" @click="nogood">
          <i class="iconfont icon-xuanze goodi"></i>
          <label for="good">好设计</label>
        </div>
        <div class="selectbad" @click="nobad">
          <i class="iconfont icon-xuanze badi"></i>
          <label for="bad">坏设计</label>
        </div>

      </div>
    </div>
  </div>
</template>

<script >
  import jquery from 'jquery'

  export default {
    name: '',
    data() {
      return {
        hideall:false
      }
    },
    methods: {
      allListClicked:function () {
          this.hideall = !this.hideall;
      },

      nogood:function () {
        $('.goodi').css('color','#ccc')
      },
      nobad:function () {
        $('.badi').css('color','#ccc')
      }

    },
    mounted() {

    }
  }
</script>

<style scoped>
  @import '../../common/style/marx.min.css';

  .all-page {
    margin-top: 30px;
  }

  .all {
    display: flex;
    justify-content: space-between;
  }
  .all-right{
    display: flex;
    justify-content: space-between;
  }

  .all-right .goodi {
    color: #1fd7e2;
  }

  .all-right .badi {
    color: #f94815;
  }

  .all-left{
    position: relative;
  }

  .list-body {
    position: absolute;
    z-index: 4000;
    margin-top: 10px;
    background-color: #fff;
    padding: 10px;
  }
  .list-body li{
    padding: 5px 10px 15px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ececec;
    white-space: nowrap;
  }

  .list-body li span{
    color:#a6a7a7;
  }
  .list-body li i{
    margin-right: 10px;
    font-size: 12px;
  }

  ul,li{
    list-style: none;
  }


</style>
