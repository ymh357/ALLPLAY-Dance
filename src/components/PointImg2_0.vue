<template>
    <div id="wrapper">
        <img src="../assets/2_0.jpg" class="pointImg">
        <a href="#/videoTour/1_8"><img src="../assets/backArrow.jpg" id="arrowTo1_8"></a>
        <a href="#/videoTour/3_0"><img src="../assets/forwardArrow.jpg" id="arrowTo3_0"></a>

    </div>
</template>

<style scoped>
    #wrapper{
        position: relative;
        height:460px;
    }
    #arrowTo3_0{
        width: 4%;
        transform: rotate(-130deg);
        position: absolute;
        left:15%;
        top:50%;
    }
    #arrowTo1_8{
        width: 4%;
        transform: rotate(-45deg);
        position: absolute;
        left:75%;
        top:80%;
    }
    .pointImg{
        width:100%;
        height:100%;
    }
</style>