<template>
    <div id="wrapper">
        <img src="../assets/1_5.jpg" class="pointImg">
        <a href="#/videoTour/1_4"><img src="../assets/backArrow.jpg" id="arrowTo1_4"></a>
        <a href="#/videoTour/1_6"><img src="../assets/forwardArrow.jpg" id="arrowTo1_6"></a>
    </div>
</template>

<style scoped>
    #wrapper{
        position: relative;
        height:460px;
    }
    #arrowTo1_4{
        width: 4%;
        transform: rotate(-90deg);
        position: absolute;
        left:90%;
        top:80%;
    }
    #arrowTo1_6{
        width: 4%;
        transform: rotate(-90deg);
        position: absolute;
        left:55%;
        top:80%;
    }
    .pointImg{
        width:100%;
        height:100%;
    }
</style>