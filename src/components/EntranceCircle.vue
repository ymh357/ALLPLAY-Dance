<template>
    <div>
        <a href="#" class="entrance" @click="showPanorama($event)" :style="{left:pos[0]+'%',top:pos[1]+'%',background:this.ecolor}"></a>
    </div>
</template>

<style>
    .entrance{
        display: inline-block;
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
            ecolor:{
                type:String,

                default:'blue'

            }
        },
        methods: {
            showPanorama(event) {


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

                return false
            }
        }
    }
</script>