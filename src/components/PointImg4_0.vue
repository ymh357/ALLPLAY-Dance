<template>
    <div id="wrapper">
        <img src="../assets/4_0.jpg" class="pointImg">
        <a href="#/videoTour/3_0"><img src="../assets/backArrow.jpg" id="arrowTo3_0"></a>
        <a href="#/videoTour/4_1"><img src="../assets/forwardArrow.jpg" id="arrowTo4_1"></a>

    </div>
</template>

<style scoped>
    #wrapper{
        position: relative;
        height:460px;
    }
    #arrowTo3_0{

        width: 4%;
        transform: rotate(-45deg);
        position: absolute;
        left:75%;
        top:80%;
    }
    #arrowTo4_1{
        width: 4%;
        transform: rotate(-150deg);
        position: absolute;
        left:15%;
        top:70%;
    }
    .pointImg{
        width:100%;
        height:100%;
    }
</style>