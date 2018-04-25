<template>
    <div id="wrapper">
        <img src="../assets/4_1.jpg" class="pointImg">
        <a href="#/videoTour/4_0"><img src="../assets/backArrow.jpg" id="arrowTo4_0"></a>
        <a href="#/videoTour/4_2"><img src="../assets/forwardArrow.jpg" id="arrowTo4_2"></a>

    </div>
</template>

<style scoped>
    #wrapper{
        position: relative;
        height:460px;
    }
    #arrowTo4_0{

        width: 4%;
        transform: rotate(-75deg);
        position: absolute;
        left:75%;
        top:80%;
    }
    #arrowTo4_2{
        width: 4%;
        transform: rotate(-100deg);
        position: absolute;
        left:35%;
        top:70%;
    }
    .pointImg{
        width:100%;
        height:100%;
    }
</style>