<template>
    <div id="wrapper">
        <img src="../assets/3_0.jpg" class="pointImg">
        <a href="#/videoTour/2_0"><img src="../assets/backArrow.jpg" id="arrowTo2_0"></a>
        <a href="#/videoTour/4_0"><img src="../assets/forwardArrow.jpg" id="arrowTo4_0"></a>

    </div>
</template>

<style scoped>
    #wrapper{
        position: relative;
        height:460px;
    }
    #arrowTo2_0{

        width: 4%;
        transform: rotate(-45deg);
        position: absolute;
        left:75%;
        top:80%;
    }
    #arrowTo4_0{
        width: 4%;
        transform: rotate(-130deg);
        position: absolute;
        left:15%;
        top:50%;
    }
    .pointImg{
        width:100%;
        height:100%;
    }
</style>