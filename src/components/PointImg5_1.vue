<template>
    <div id="wrapper">
        <img src="../assets/5_1.jpg" class="pointImg">
        <a href="#/videoTour/5_0"><img src="../assets/backArrow.jpg" id="arrowTo5_0"></a>
        <a href="#/videoTour/5_2"><img src="../assets/forwardArrow.jpg" id="arrowTo5_2"></a>

    </div>
</template>

<style scoped>
    #wrapper{
        position: relative;
        height:460px;
    }
    #arrowTo5_0{
        width: 4%;
        transform: rotate(-50deg);
        position: absolute;
        left:75%;
        top:70%;

    }
    #arrowTo5_2{
        width: 4%;
        transform: rotate(-120deg);
        position: absolute;
        left:25%;
        top:55%;
    }
    .pointImg{
        width:100%;
        height:100%;
    }
</style>