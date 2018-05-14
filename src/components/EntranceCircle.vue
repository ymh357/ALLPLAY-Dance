<template>
    <div>
        <a id="entrance" @click="showPanorama($event)" :style="{left:pos[0]+'%',top:pos[1]+'%'}"></a>
    </div>
</template>

<style>
    #entrance{
        display: inline-block;
        background: red;
        border-radius: 50%;
        height:1%;
        width:1.5%;

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
        },
        methods: {
            showPanorama(event) {

                let hotpointLeft=this.pos[0]
                let hotpointTop=this.pos[1]

                this.bus.$emit('HotPointChosenEvent',hotpointLeft,hotpointTop)

                let oWidth=window.innerWidth,
                    oHeight=window.innerHeight,
                    showMapDiv=document.getElementById('showMapDiv'),
                    showPanoramaDiv=document.getElementById('showPanoramaDiv')

                showPanoramaDiv.style.position='fixed'
                showPanoramaDiv.style.display='block'
                showPanoramaDiv.style.left='0'
                showPanoramaDiv.style.top='0'
                showPanoramaDiv.style.zIndex=999

                showMapDiv.style.display='none';
            }
        }
    }
</script>