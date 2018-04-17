<template>
    <div>
        <h2>Class NO.1's introduction</h2>
        <p>111111111111111111111111111</p>
        <p>111111111111111111111111111</p>
        <hr style="background-color: darkblue;height:3px">
        <h2>Class NO.1's dance school map</h2>
        <div  id="map">
            <img src="../assets/burwood_03.jpg" id="mapImg">
            <entrance-circle :pos="[75.5,81.5]" :picId="1"></entrance-circle>
            <entrance-circle :pos="[73.5,67.5]" :picId="2"></entrance-circle>
            <entrance-circle :pos="[55.5,47.5]" :picId="3"></entrance-circle>
        </div>


    </div>
</template>

<script>
    import EntranceCircle from './EntranceCircle.vue'
    export default {
        components:{
            'entrance-circle':EntranceCircle
        }
    }
</script>

<style>
    #map{
        position: relative;
    }

    #mapImg{
        width:100%;
    }

</style>