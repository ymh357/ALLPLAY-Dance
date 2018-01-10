<template>
    <div id="Header_wrapper" >

        <!-- #Header -->
        <header id="Header">

            <div id="Action_bar">
                <div class="container">
                    <div class="column one">

                        <ul class="contact_details">
                        </ul>

                        <ul class="social"></ul>
                    </div>
                </div>
            </div>


            <!-- .header_placeholder 4sticky  -->
            <div class="header_placeholder"></div>

            <div id="Top_bar" class="loading">

                <div class="container">
                    <div class="column one">

                        <div class="top_bar_left clearfix" id="nav">

                            <!-- Logo -->
                            <div class="logo"><a id="logo" href="#/" title="AllPlay Dance" data-height="60" data-padding="15"><img class="logo-main scale-with-grid" src="http://allplaydance.org.au/wp-content/uploads/2017/09/landing-1.png" data-retina="" data-height="67" alt="AllPlay logo" /><img class="logo-sticky scale-with-grid" src="http://allplaydance.org.au/wp-content/uploads/2017/09/landing-1.png" data-retina="" data-height="67" alt="AllPlay logo" /><img class="logo-mobile scale-with-grid" src="http://allplaydance.org.au/wp-content/uploads/2017/09/landing-v3.png" data-retina="" data-height="208" alt="AllPlay Dance logo" /><img class="logo-mobile-sticky scale-with-grid" src="http://allplaydance.org.au/wp-content/uploads/2017/09/landing-1.png" data-retina="" data-height="67" alt="AllPlay logo" /></a></div>
                            <div class="menu_wrapper">
                                <nav id="menu" class="menu-main-menu-container">
                                    <ul id="menu-main-menu" class="menu">
                                        <li :class="['menu-item', 'menu-item-type-post_type' ,'menu-item-object-page',  activeItem=='Home'? 'current-menu-item' : '']"><a href="#/"><span @click="toggleActiveItem($event.target.innerHTML)">Home</span></a></li>
                                        <li :class="['menu-item', 'menu-item-type-post_type' ,'menu-item-object-page',  activeItem=='Map'? 'current-menu-item' : '']"><a href="#/map"><span @click="toggleActiveItem($event.target.innerHTML)">Map</span></a></li>
                                        <li :class="['menu-item', 'menu-item-type-post_type' ,'menu-item-object-page',  activeItem=='Course'? 'current-menu-item' : '']"><a href="#/course"><span @click="toggleActiveItem($event.target.innerHTML)">Course</span></a></li>
                                </ul></nav><a class="responsive-menu-toggle " href="#"><i class="icon-menu-fine"></i></a>
                            </div>

                            <div class="secondary_menu_wrapper">
                                <!-- #secondary-menu -->
                            </div>

                            <div class="banner_wrapper">
                            </div>

                            <div class="search_wrapper">
                                <!-- #searchform -->


                                <form method="get" id="searchform" action="http://allplaydance.org.au/">


                                    <i class="icon_search icon-search-fine"></i>
                                    <a href="#" class="icon_close"><i class="icon-cancel-fine"></i></a>

                                    <input type="text" class="field" name="s" id="s" placeholder="Enter your search" />
                                    <input type="submit" class="submit" value="" style="display:none;" />

                                </form>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
            <div class="mfn-main-slider" id="mfn-rev-slider">
                <div id="rev_slider_5_1_wrapper" class="rev_slider_wrapper fullwidthbanner-container" data-source="gallery" style="margin:0px auto;background:transparent;padding:0px;margin-top:0px;margin-bottom:0px;">
                    <!-- START REVOLUTION SLIDER 5.4.5.2 auto mode -->
                    <div id="rev_slider_5_1" class="rev_slider fullwidthabanner" style="display:none;" data-version="5.4.5.2">
                        <ul>	<!-- SLIDE  -->
                            <li data-index="rs-6" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="default" data-easeout="default" data-masterspeed="300"  data-rotate="0"  data-saveperformance="off"  data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                <!-- MAIN IMAGE -->
                                <img src="http://allplaydance.org.au/wp-content/uploads/2017/09/header-1920x692-v3.jpg"  alt="" title="header-1920&#215;692-v3"  width="1920" height="692" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg" data-no-retina>
                                <!-- LAYERS -->
                            </li>
                        </ul>
                        <div class="tp-bannertimer tp-bottom" style="visibility: hidden !important;"></div>
                    </div>

                </div><!-- END REVOLUTION SLIDER --></div>
        </header>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeItem : 'Home'
            }
        },
        methods: {
            toggleActiveItem (item){
                this.activeItem=item
            }
        }
    }

</script>