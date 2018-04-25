<template>
    <div id="wrapper">
        <img src="../assets/5_2.jpg" class="pointImg">
        <a href="#/videoTour/5_1"><img src="../assets/backArrow.jpg" id="arrowTo5_1"></a>
        <a href="#/videoTour/6_0"><img src="../assets/forwardArrow.jpg" id="arrowTo6_0"></a>

    </div>
</template>

<style scoped>
    #wrapper{
        position: relative;
        height:460px;
    }
    #arrowTo5_1{
        width: 4%;
        transform: rotate(-100deg);
        position: absolute;
        left:90%;
        top:70%;

    }
    #arrowTo6_0{
        width: 4%;
        transform: rotate(-120deg);
        position: absolute;
        left:15%;
        top:70%;
    }
    .pointImg{
        width:100%;
        height:100%;
    }
</style>