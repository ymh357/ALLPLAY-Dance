<template>
    <div id="wrapper">
        <img src="../assets/5_0.jpg" class="pointImg">
        <a href="#/videoTour/4_2"><img src="../assets/backArrow.jpg" id="arrowTo4_2"></a>
        <a href="#/videoTour/5_1"><img src="../assets/forwardArrow.jpg" id="arrowTo5_1"></a>

    </div>
</template>

<style scoped>
    #wrapper{
        position: relative;
        height:460px;
    }
    #arrowTo4_2{
        width: 4%;
        transform: rotate(-100deg);
        position: absolute;
        left:15%;
        top:70%;

    }
    #arrowTo5_1{
        width: 4%;
        transform: rotate(-80deg);
        position: absolute;
        left:55%;
        top:70%;
    }
    .pointImg{
        width:100%;
        height:100%;
    }
</style>