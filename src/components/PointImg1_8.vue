<template>
    <div id="wrapper">
        <img src="../assets/1_8.jpg" class="pointImg">
        <a href="#/videoTour/1_7"><img src="../assets/backArrow.jpg" id="arrowTo1_7"></a>
        <a href="#/videoTour/2_0"><img src="../assets/forwardArrow.jpg" id="arrowTo2_0"></a>
    </div>
</template>

<style scoped>
    #wrapper{
        position: relative;
        height:460px;
    }
    #arrowTo1_7{
        width: 4%;
        transform: rotate(-90deg);
        position: absolute;
        left:40%;
        top:60%;
    }
    #arrowTo2_0{
        width: 4%;
        transform: rotate(235deg);
        position: absolute;
        left:20%;
        top:90%;
    }
    .pointImg{
        width:100%;
        height:100%;
    }
</style>