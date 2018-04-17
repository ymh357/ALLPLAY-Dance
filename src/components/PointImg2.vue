<template>
    <div id="wrapper">
        <img src="../assets/2.jpg" class="pointImg">
        <a href="#/videoTour/1"><img src="../assets/arrow.jpg" id="arrowTo1"></a>
        <a href="#/videoTour/3"><img src="../assets/arrow.jpg" id="arrowTo2"></a>
    </div>
</template>

<style scoped>
    #wrapper{
        position: relative;
    }
    #arrowTo1{
        width: 4%;
        transform: rotate(-90deg);
        position: absolute;
        left:55%;
        top:30%;
    }
    #arrowTo2{
        width: 4%;
        transform: rotate(180deg);
        position: absolute;
        left:20%;
        top:90%;
    }
</style>