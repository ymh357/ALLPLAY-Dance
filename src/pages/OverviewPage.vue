<template>
    <div id="overviewPageWrapper">
        <div id="m_contentWrapper" class="container-fluid">
            <div class="row" id="m_contentRow">
                <div class="col-md-4 m_content" id="overview">
                    <h1>An overview of Deakin Dance Studio</h1>
                    <p>AllPlay is a world-first initiative to create new pathways for inclusion for children with disabilities so they can play, learn, dance and connect into the community. </p>
                    <p>AllPlay brings research, sport, dance and education together so kids of all abilities can participate, including the one in five children who have a developmental challenge or disability.</p>
                    <h2>A video Overview</h2>
                    <video width="100%" controls>
                        <source src="../assets/videoOverview.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div class="col-md-4 m_content" id="accessibility">
                    <my-accessibility></my-accessibility>

                    <h1>Contact details</h1>
                    <div id="contact">
                        <table>
                            <tbody>
                            <tr><th>Name of organisation</th><td>Deakin Dance Studio</td></tr>
                            <tr><th>Street Number</th><td>221</td></tr>
                            <tr><th>Street Name</th><td>Stockyard Place</td></tr>
                            <tr><th>Suburb</th><td>West Gosford</td></tr>
                            <tr><th>Postcode</th><td>3125</td></tr>
                            <tr><th>State</th><td>VIC</td></tr>
                            <tr><th>Email</th><td>info@deakindance.com.au</td></tr>
                            <tr><th>Fixed Telephone</th><td>03 4322 2626</td></tr>
                            <tr><th>Mobile</th><td>0422 845 931</td></tr>
                            <tr><th>Fax</th><td>03 4322 2626</td></tr>
                            <tr><th>Website Address</th><td>http://deakindance.com.au</td></tr>
                            </tbody>

                        </table>
                    </div>
                </div>
                <div class="col-md-4 m_content" id="map">
                    <h1>2D map of Deakin Dance Studio:</h1>
                    <img id="mapImg" src="../assets/map.png" width="100%" height="80%" @click="showMap($event)">
                </div>
            </div>
        </div>
        <div id="classWrapper" class="container-fluid">
            <div class="row">
                <h1>Class</h1>
                <div class="btn-group col-md-3">
                    <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Type <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a href="#" @click="chooseClass">Ballet</a></li>
                        <li><a href="#">Jazz</a></li>
                        <li><a href="#">Tap</a></li>
                        <li><a href="#">Hip-hop</a></li>
                        <li><a href="#">Contemporary</a></li>
                        <li><a href="#">Ballroom</a></li>
                        <li><a href="#">Latin</a></li>
                        <li><a href="#">Cultural</a></li>
                        <li><a href="#">other</a></li>
                    </ul>
                </div>
                <div class="col-md-9" id="classInfo">
                    <my-class></my-class>
                </div>
            </div>
        </div>

        <div id="showMapDiv">
            <my-map></my-map>
        </div>

        <div id="showPanoramaDiv">
            <my-panorama></my-panorama>
        </div>

    </div>
</template>

<style scoped="scoped">

    #overviewPageWrapper{
        height: 130%;
    }

    #m_contentWrapper{
        height: 65%;
        overflow: auto;
    }
    #m_contentRow{
        height:100%;
    }

    #overview{
        border-right: 2px solid white;
    }
    #accessibility{
        border-left: 2px solid white;
        border-right: 2px solid white;
    }
    #map{
        border-left: 2px solid white;
    }
    #mapImg{
        cursor: zoom-in;
    }

    #classWrapper{
        background-color: #5bc0de;
        overflow: auto;
        height: 35%;
    }
    #contact{

        width: 100%;

        overflow: auto;
    }
    #contact>table{
        width:100%;
    }
    #classInfo{
        display: none;
    }
    .m_content{
        background-color: #58A976;
        padding-left:1%;
        padding-right:1%;
        height: 100%;
    }
    #showMapDiv{
        height:100%;
        width: 80%;
        display: none;
    }
    #showPanoramaDiv{
        height:100%;
        width: 100%;
        display:none
    }

</style>

<script>
    import Map from '../components/Map.vue'
    import MyClass from '../components/Class.vue'
    import Accessibility from '../components/Accessibility.vue'
    import Panorama from '../components/Panorama.vue'


    export default {
        components:{
            'my-class':MyClass,
            'my-accessibility': Accessibility,
            'my-map':Map,
            'my-panorama': Panorama
        },
        methods: {
            chooseClass() {
                document.getElementById('classInfo').style.display='block'
            },
            showMap(event){
                let oWidth=window.innerWidth,
                    oHeight=window.innerHeight,
                    oCover=document.createElement('div'),
                    showMapDiv=document.getElementById('showMapDiv'),
                    showPanoramaDiv=document.getElementById('showPanoramaDiv')

                oCover.id='cover'
                oCover.style.background='rgba(0,0,0,0.5)'
                oCover.style.position='fixed'
                oCover.style.left=0
                oCover.style.top=0
                oCover.style.height=oHeight+'px'
                oCover.style.width=oWidth+'px'

                showMapDiv.style.position='fixed'
                showMapDiv.style.display='block'
                showMapDiv.style.left='10%'
                showMapDiv.style.top='0'
                showMapDiv.style.zIndex=999

                oCover.onclick=function () {
                    document.body.removeChild(oCover)
                    if(showMapDiv){
                        showMapDiv.style.display='none'
                    }
                    if(showPanoramaDiv){
                        showPanoramaDiv.style.display='none'
                    }
                }
                document.body.appendChild(oCover)
            }
        },

    }
</script>