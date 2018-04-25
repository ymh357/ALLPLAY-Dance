<template>
    <div id="wrapper">
        <img src="../assets/0_1.jpg" class="pointImg">
        <a href="#/videoTour/0_0"><img src="../assets/backArrow.jpg" id="arrowTo0_0"></a>
        <a href="#/videoTour/0_2"><img src="../assets/forwardArrow.jpg" id="arrowTo0_2"></a>
    </div>
</template>

<style scoped>
    #wrapper{
        position: relative;
        height:460px;
    }
    #arrowTo0_0{
        width: 4%;
        transform: rotate(180deg);
        position: absolute;
        left:15%;
        top:50%;
    }
    #arrowTo0_2{
        width: 4%;
        transform: rotate(-90deg);
        position: absolute;
        left:70%;
        top:50%;
    }
    .pointImg{
        width:100%;
        height:100%;
    }
</style>