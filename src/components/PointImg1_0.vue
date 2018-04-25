<template>
    <div id="wrapper">
        <img src="../assets/1_0.jpg" class="pointImg">
        <a href="#/videoTour/0_2"><img src="../assets/backArrow.jpg" id="arrowTo0_2"></a>
        <a href="#/videoTour/1_1"><img src="../assets/forwardArrow.jpg" id="arrowTo1_1"></a>
    </div>
</template>

<style scoped>
    #wrapper{
        position: relative;
        height:460px;
    }
    #arrowTo0_2{
        width: 4%;
        transform: rotate(180deg);
        position: absolute;
        left:5%;
        top:90%;
    }
    #arrowTo1_1{
        width: 4%;
        transform: rotate(-90deg);
        position: absolute;
        left:10%;
        top:70%;
    }
    .pointImg{
        width:100%;
        height:100%;
    }
</style>