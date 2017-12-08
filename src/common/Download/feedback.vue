<template>
    <div class="feedback" @click="Showfeed">
        <div class="feedback-body">
          <div class="feedback-header">
                <span>意见反馈</span>
          </div>
          <div class="feedback-content">
            <div class="feedback-content-body">
                <div class="text">
                  <textarea placeholder="你有啥想ZUO的，快告诉我们呀~"></textarea>
                </div>
               <button>提交反馈</button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data(){
          return{

          }
        },
        methods:{
          Showfeed:function () {
            this.$emit('hideFeedback');
          }
        }
    }
</script>

<style scoped>
  @import '../../common/style/marx.min.css';

  .feedback{
    background-color: rgba(39, 44, 47, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3600;
  }

  .feedback-body{
    background-color: #fff;
    width: 540px;
    position: absolute;
    top: 100px;
    left:50%;
    transform: translateX(-50%);
  }

  .feedback-header{
    padding: 25px 0;
    text-align:center;
    background-color: rgb(39, 44, 47);
    color: #fff;
    font-size: 18px;
  }

  .feedback-content{
    padding: 30px;
    border-radius: 0 0 4px 4px;
  }

  .feedback-content-body{
    width: 100%;
  }

  .text{
    width: 100%;
    margin-bottom: 20px;
    position: relative;
  }

  .text textarea{
    border: 1px solid #ececec;
    width: 100%;
    height: 186px !important;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    padding: 15px;
  }

  .feedback-content-body button{
    padding:12.5px 0;
    border: none;
    border-radius: 4px;
    width: 100%;
    cursor: pointer;
    background-color: rgb(31, 215, 226);
    font-size: 18px;
  }





</style>
