<template>
    <div>
        <h2>Course NO.1's introduction</h2>
        <p>111111111111111111111111111</p>
        <p>111111111111111111111111111</p>
        <hr style="background-color: darkblue;height:3px">
        <h2>Course NO.1's dance school map</h2>
        <img src="../assets/plat.jpg">
        <span style="color:blue">Click me to tour</span>
        <entrance-circle></entrance-circle>
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