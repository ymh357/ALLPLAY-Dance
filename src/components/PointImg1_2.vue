<template>
    <div id="wrapper">
        <img src="../assets/1_2.jpg" class="pointImg">
        <a href="#/videoTour/1_1"><img src="../assets/backArrow.jpg" id="arrowTo1_1"></a>
        <a href="#/videoTour/1_3"><img src="../assets/forwardArrow.jpg" id="arrowTo1_3"></a>
    </div>
</template>

<style scoped>
    #wrapper{
        position: relative;
        height:460px;
    }
    #arrowTo1_1{
        width: 4%;
        transform: rotate(-90deg);
        position: absolute;
        left:25%;
        top:70%;
    }
    #arrowTo1_3{
        width: 4%;
        transform: rotate(-90deg);
        position: absolute;
        left:85%;
        top:80%;
    }
    .pointImg{
        width:100%;
        height:100%;
    }
</style>