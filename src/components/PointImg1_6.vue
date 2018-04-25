<template>
    <div id="wrapper">
        <img src="../assets/1_6.jpg" class="pointImg">
        <a href="#/videoTour/1_5"><img src="../assets/backArrow.jpg" id="arrowTo1_5"></a>
        <a href="#/videoTour/1_7"><img src="../assets/forwardArrow.jpg" id="arrowTo1_7"></a>
    </div>
</template>

<style scoped>
    #wrapper{
        position: relative;
        height:460px;
    }
    #arrowTo1_5{
        width: 4%;
        transform: rotate(-135deg);
        position: absolute;
        left:60%;
        top:50%;
    }
    #arrowTo1_7{
        width: 4%;
        transform: rotate(-90deg);
        position: absolute;
        left:30%;
        top:10%;
    }
    .pointImg{
        width:100%;
        height:100%;
    }
</style>