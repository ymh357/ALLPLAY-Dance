<template>
    <div id="Wrapper">
      <!-- #Header_bg -->

      <myheader></myheader>

      <router-view></router-view>

      <myfooter></myfooter>


    </div><!-- #Wrapper -->
    <!--<img src="./assets/logo.png">
    <router-view/>-->
</template>

<script>
    import $ from 'jquery'

    import header from './components/Header.vue'
    import footer from './components/Footer.vue'
    import homeContent from './components/HomeContent.vue'

    export default {
      name: 'app',
        components:{
          'myheader':header,
            'myfooter':footer,
            'home-content': homeContent
        }
    };

    $(document).ready(function () {

        var fix = $('#nav');                      //滚动悬浮块
        var end = $('.bottom');                     //滚动到这个元素后结束固定
        var fixTop = fix.offset().top,              //滚动悬浮块与顶部的距离
            fixHeight = fix.height();               //滚动悬浮块高度
        var endTop, miss;                           //结束元素与顶部的距离

        $(window).scroll(function() {
            //页面与顶部高度
            var docTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

            //如果有结束块
            if (end.length > 0) {
                endTop = end.offset().top;
                miss = endTop - docTop - fixHeight;
            }

            if (fixTop < docTop) {
                fix.css({'position': 'fixed'});
                if ((end.length > 0) && (endTop < (docTop + fixHeight))) {
                    fix.css({top: miss});           //滚动悬浮块滑到结束块上时，top值为负，即慢慢隐藏出浏览器
                } else{
                    fix.css({top: 0});              //滚动悬浮块未到结束块上时，top为0
                    fix.css({'background-color' : 'rgba(218,218,218,0.7) '});
                }
            } else {
                fix.css({'position': 'static'});
                fix.css({'background-color' : 'rgba(255,255,255,0) '});
            }
        })
    })

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
