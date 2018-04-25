<template>
    <div id="wrapper">
        <img src="../assets/1_3.jpg" class="pointImg">
        <a href="#/videoTour/1_2"><img src="../assets/backArrow.jpg" id="arrowTo1_2"></a>
        <a href="#/videoTour/1_4"><img src="../assets/forwardArrow.jpg" id="arrowTo1_4"></a>
    </div>
</template>

<style scoped>
    #wrapper{
        position: relative;
        height:460px;
    }
    #arrowTo1_2{
        width: 4%;
        transform: rotate(90deg);
        position: absolute;
        left:25%;
        top:90%;
    }
    #arrowTo1_4{
        width: 4%;
        transform: rotate(-90deg);
        position: absolute;
        left:85%;
        top:60%;
    }
    .pointImg{
        width:100%;
        height:100%;
    }
</style>