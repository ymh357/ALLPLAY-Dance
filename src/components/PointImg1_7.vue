<template>
    <div id="wrapper">
        <img src="../assets/1_7.jpg" class="pointImg">
        <a href="#/videoTour/1_6"><img src="../assets/backArrow.jpg" id="arrowTo1_6"></a>
        <a href="#/videoTour/1_8"><img src="../assets/forwardArrow.jpg" id="arrowTo1_8"></a>
    </div>
</template>

<style scoped>
    #wrapper{
        position: relative;
        height:460px;
    }
    #arrowTo1_6{
        width: 4%;
        transform: rotate(90deg);
        position: absolute;
        left:30%;
        top:90%;
    }
    #arrowTo1_8{
        width: 4%;
        transform: rotate(-90deg);
        position: absolute;
        left:70%;
        top:90%;
    }
    .pointImg{
        width:100%;
        height:100%;
    }
</style>