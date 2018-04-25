<template>
    <div id="wrapper">
        <img src="../assets/1_4.jpg" class="pointImg">
        <a href="#/videoTour/1_3"><img src="../assets/backArrow.jpg" id="arrowTo1_3"></a>
        <a href="#/videoTour/1_5"><img src="../assets/forwardArrow.jpg" id="arrowTo1_5"></a>
    </div>
</template>

<style scoped>
    #wrapper{
        position: relative;
        height:460px;
    }
    #arrowTo1_3{
        width: 4%;
        transform: rotate(-90deg);
        position: absolute;
        left:40%;
        top:80%;
    }
    #arrowTo1_5{
        width: 4%;
        transform: rotate(-45deg);
        position: absolute;
        left:75%;
        top:90%;
    }
    .pointImg{
        width:100%;
        height:100%;
    }
</style>