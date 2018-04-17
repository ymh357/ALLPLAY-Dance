<template>
    <div>
        <a id="entrance" :href="'#/videoTour/'+ picId" target="_blank" :style="{left:pos[0]+'%',top:pos[1]+'%'}"></a>
    </div>
</template>

<style>
    #entrance{
        display: inline-block;
        background: linear-gradient(to left,red, yellow,blue,black,green);
        border-radius: 50%;
        height:30px;
        width:30px;

        position: absolute;
    }
</style>

<script>
    export default {
        props: {
            pos: {
                type: Array
            },
            picId: {
                type: Number,
            }
        }
    }
</script>