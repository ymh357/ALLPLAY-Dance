<template>
    <div id="wrapper">
        <img src="../assets/1.jpg" class="pointImg">
        <a href="#/videoTour/2"><img src="../assets/arrow.jpg" id="arrowImg"></a>
    </div>
</template>

<style scoped>
    #wrapper{
        position: relative;
    }
    #arrowImg{
        width: 4%;
        transform: rotate(-90deg);
        position: absolute;
        left:50%;
        top:50%;
    }
</style>