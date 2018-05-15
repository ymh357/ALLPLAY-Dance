<template>
        <div id="mapDiv">
            <img src="../assets/map.png" id="imgInsideMap">
            <entrance-circle :pos="[43.5,48.5]" ></entrance-circle>
            <entrance-circle :pos="[48.5,48.5]" ></entrance-circle>
            <entrance-circle :pos="[50.5,47.5]" ></entrance-circle>
            <entrance-circle :pos="[52.0,47.5]" ></entrance-circle>
            <entrance-circle :pos="[53.0,48.5]" ></entrance-circle>
            <entrance-circle :pos="[54.0,48.5]" ></entrance-circle>
            <entrance-circle :pos="[58.0,48.5]" ></entrance-circle>
            <entrance-circle :pos="[66.5,51.5]" ></entrance-circle>
            <entrance-circle :pos="[70.5,61.5]" ></entrance-circle>
            <entrance-circle :pos="[73.5,63.5]" ></entrance-circle>
            <entrance-circle :pos="[71.0,64.0]" ></entrance-circle>
            <entrance-circle :pos="[72.5,66.0]" ></entrance-circle>
            <entrance-circle :pos="[77.5,67.5]" ></entrance-circle>
            <entrance-circle :pos="[76.5,73.5]" ></entrance-circle>
            <entrance-circle :pos="[75.5,81.5]" ></entrance-circle>
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