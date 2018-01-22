<template>
    <div>
        <h2>Course NO.2's introduction</h2>
        <p>333333333333333333333333333</p>
        <p>333333333333333333333333333</p>
        <hr style="background-color: darkblue;height:3px">
        <h2>Course NO.2's dance school map</h2>
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