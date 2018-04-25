<template>
    <div id="wrapper">
        <img src="../assets/0_2.jpg" class="pointImg">
        <a href="#/videoTour/0_1"><img src="../assets/backArrow.jpg" id="arrowTo0_1"></a>
        <a href="#/videoTour/1_0"><img src="../assets/forwardArrow.jpg" id="arrowTo1_0"></a>
    </div>
</template>

<style scoped>
    #wrapper{
        position: relative;
        height:460px;
    }
    #arrowTo0_1{
        width: 4%;
        transform: rotate(180deg);
        position: absolute;
        left:15%;
        top:90%;
    }
    #arrowTo1_0{
        width: 4%;
        transform: rotate(-90deg);
        position: absolute;
        left:50%;
        top:70%;
    }
    .pointImg{
        width:100%;
        height:100%;
    }
</style>