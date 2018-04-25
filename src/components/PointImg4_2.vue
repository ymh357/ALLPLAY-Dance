<template>
    <div id="wrapper">
        <img src="../assets/4_2.jpg" class="pointImg">
        <a href="#/videoTour/4_1"><img src="../assets/backArrow.jpg" id="arrowTo4_1"></a>
        <a href="#/videoTour/5_0"><img src="../assets/forwardArrow.jpg" id="arrowTo5_0"></a>

    </div>
</template>

<style scoped>
    #wrapper{
        position: relative;
        height:460px;
    }
    #arrowTo4_1{
        width: 4%;
        transform: rotate(-100deg);
        position: absolute;
        left:25%;
        top:70%;

    }
    #arrowTo5_0{
        width: 4%;
        transform: rotate(-100deg);
        position: absolute;
        left:65%;
        top:70%;
    }
    .pointImg{
        width:100%;
        height:100%;
    }
</style>