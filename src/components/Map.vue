<template>
        <div id="mapDiv">
            <img src="../assets/map.png" id="imgInsideMap">
            <entrance-circle :pos="[43.5,48.5]" :picId="1"></entrance-circle>
            <entrance-circle :pos="[55.5,48.5]" :picId="2"></entrance-circle>
            <entrance-circle :pos="[66.5,51.5]" :picId="3"></entrance-circle>
            <entrance-circle :pos="[70.5,61.5]" :picId="4"></entrance-circle>
            <entrance-circle :pos="[73.5,67.5]" :picId="5"></entrance-circle>
            <entrance-circle :pos="[75.5,81.5]" :picId="6"></entrance-circle>
        </div>
</template>

<script>
    import EntranceCircle from './EntranceCircle.vue'

    export default {
        components:{
            'entrance-circle':EntranceCircle
        },
    }
</script>

<style>
    #mapDiv{
        position: relative;
        height:100%;
        width: 100%;
    }
    #imgInsideMap{
        height:100%;
        width:100%;
    }
</style>