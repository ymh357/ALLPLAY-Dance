<template>
   <!--<div id="Header_wrapper" >

        <header>
            <div id="Top_bar">

                <div class="container">
                    <div class="column one">

                        <div class="top_bar_left clearfix" id="nav">

                            <div class="logo"><a id="logo" href="#/" title="AllPlay Dance" data-height="60" data-padding="15"><img class="logo-main scale-with-grid" src="http://allplaydance.org.au/wp-content/uploads/2017/09/landing-1.png" data-retina="" data-height="67" alt="AllPlay logo" /><img class="logo-sticky scale-with-grid" src="http://allplaydance.org.au/wp-content/uploads/2017/09/landing-1.png" data-retina="" data-height="67" alt="AllPlay logo" /><img class="logo-mobile scale-with-grid" src="http://allplaydance.org.au/wp-content/uploads/2017/09/landing-v3.png" data-retina="" data-height="208" alt="AllPlay Dance logo" /><img class="logo-mobile-sticky scale-with-grid" src="http://allplaydance.org.au/wp-content/uploads/2017/09/landing-1.png" data-retina="" data-height="67" alt="AllPlay logo" /></a></div>
                            <div class="menu_wrapper">
                                <nav id="menu" class="menu-main-menu-container">
                                    <ul id="menu-main-menu" class="menu">
                                        <li :class="['menu-item', 'menu-item-type-post_type' ,'menu-item-object-page',  activeItem=='Home'? 'current-menu-item' : '']"><a href="#/"><span @click="toggleActiveItem($event.target.innerHTML)">Home</span></a></li>
                                        <li :class="['menu-item', 'menu-item-type-post_type' ,'menu-item-object-page',  activeItem=='Map'? 'current-menu-item' : '']"><a href="#/map"><span @click="toggleActiveItem($event.target.innerHTML)">Map</span></a></li>
                                        <li :class="['menu-item', 'menu-item-type-post_type' ,'menu-item-object-page',  activeItem=='Course'? 'current-menu-item' : '']"><a href="#/course"><span @click="toggleActiveItem($event.target.innerHTML)">Course</span></a></li>
                                </ul></nav><a class="responsive-menu-toggle " href="#"><i class="icon-menu-fine"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mfn-main-slider" id="mfn-rev-slider">
                <div id="rev_slider_5_1_wrapper" class="rev_slider_wrapper fullwidthbanner-container" data-source="gallery" style="margin:0px auto;background:transparent;padding:0px;margin-top:0px;margin-bottom:0px;">
                    <div id="rev_slider_5_1" class="rev_slider fullwidthabanner" style="display:none;" data-version="5.4.5.2">
                        <ul>	&lt;!&ndash; SLIDE  &ndash;&gt;
                            <li data-index="rs-6" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="default" data-easeout="default" data-masterspeed="300"  data-rotate="0"  data-saveperformance="off"  data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                &lt;!&ndash; MAIN IMAGE &ndash;&gt;
                                <img src="http://allplaydance.org.au/wp-content/uploads/2017/09/header-1920x692-v3.jpg"  alt="" title="header-1920&#215;692-v3"  width="1920" height="692" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg" data-no-retina>
                                &lt;!&ndash; LAYERS &ndash;&gt;
                            </li>
                        </ul>
                        <div class="tp-bannertimer tp-bottom" style="visibility: hidden !important;"></div>
                    </div>

                </div></div>
        </header>
    </div>-->
        <header id="navWrapper" :style="{ height: clientHeight}">
            <div id="Top_bar" >
                <nav id="nav">
                    <div class="container">
                        <div class="navbar-header clearfix">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#"><img src="http://allplaydance.org.au/wp-content/uploads/2017/09/landing-1.png"></a>
                        </div>
                        <div class="collapse navbar-collapse" id="navbar">
                            <ul class="nav navbar-nav">
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Course <span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#/course/1" target="_blank">Course1</a></li>
                                        <li><a href="#/course/2" target="_blank">Course2</a></li>
                                        <li><a href="#/course/3" target="_blank">Course3</a></li>
                                        <li role="separator" class="divider"></li>
                                        <li><a href="#/course" target="_blank">Course Overview</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </header>
</template>


    <script>
        export default {
            data (){
                return {
                    clientHeight: document.documentElement.clientHeight + 'px'
                }
            },
            methods: {

            }
        }
    </script>

    <style scoped>
        .navbar-brand>img{
            display: inline;
            height: 40px;
            width: 80px
        }
        #navWrapper{
            background: url(../assets/HeaderBackground.png) no-repeat center center fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }
        .navbar-nav{
            float: right;
        }
        #nav{
            width:100%;
        }
    </style>