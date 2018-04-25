<template>
    <div id="wrapper">
        <img src="../assets/1_1.jpg" class="pointImg">
        <a href="#/videoTour/1_0"><img src="../assets/backArrow.jpg" id="arrowTo1_0"></a>
        <a href="#/videoTour/1_2"><img src="../assets/forwardArrow.jpg" id="arrowTo1_2"></a>
    </div>
</template>

<style scoped>
    #wrapper{
        position: relative;
        height:460px;
    }
    #arrowTo1_0{
        width: 4%;
        transform: rotate(-90deg);
        position: absolute;
        left:75%;
        top:70%;
    }
    #arrowTo1_2{
        width: 4%;
        transform: rotate(0deg);
        position: absolute;
        left:85%;
        top:80%;
    }
    .pointImg{
        width:100%;
        height:100%;
    }
</style>