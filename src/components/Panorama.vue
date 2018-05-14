<template>
    <div id="panoramaWrapper" @click="eliminateCover($event)">
        <img :src="this.imgsrc" class="pointImg"  v-bind:style="{clip:clipStyle,top:topStyle,left:leftStyle}"  @mousedown="StartDragPC($event)" @click="$event.stopPropagation()" @touchstart="StartDragMobile($event)">
        <!--<a href="#"><img :src="this.arrowSrc" :style="this.arrowStyle" class="arrowBtn"></a>-->
    </div>
</template>

<style scoped>
    #panoramaWrapper{
        position: relative;
        height: 100%;
        width:100%;
    }
    /*#arrowTo0_1{
        width: 4%;
        transform: rotate(0deg);
        position: absolute;
        left:70%;
        top:50%;
    }*/
    .pointImg{
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top:0;
        cursor: move;
    }
    .arrowBtn{
        position:absolute
    }
</style>

<script>
    export default {
        data: function () {
            return {
                clip:{
                  top:null,
                  right:null,
                  bottom:null,
                  left:null
                },
                positionDatas:{

                    // left corner of the img after clip
                    currentPos:{
                        top:null,
                        left:null
                    },

                    // ab() of top and left
                    absolutePos:{
                        top:null,
                        left:null
                    },

                    mouseStartX:null,
                    mouseStartY:null,
                    mouseEndX:null,
                    mouseEndY:null,

                    // img size without clip

                    actualWidth:null,
                    actualHeight:null
                },
                pos:[-1,-1],
                imgsrc:require('../assets/4_0.jpg'),
                arrowSrc:require('../assets/arrows/0_0 F.png'),
                arrowStyle:{
                    left:'50%',
                    top:'50%'
                }
            }
        },
        methods: {

            eliminateCover(event){
                document.body.removeChild(document.getElementById('cover'))
                document.getElementById('showPanoramaDiv').style.display='none'
            },

            StartDragPC(event){
                event.preventDefault()

                this.positionDatas.mouseStartX=event.clientX
                this.positionDatas.mouseStartY=event.clientY

                let panoramaImgDom=event.currentTarget
                panoramaImgDom.addEventListener('mousemove',this.DraggingPC,false)
                panoramaImgDom.addEventListener('mouseup',this.clearEventsPC,false)
            },
            clearEventsPC(event) {
                event.preventDefault()
                event.stopPropagation()
                let panoramaImgDom=event.currentTarget
                panoramaImgDom.removeEventListener('mousemove', this.DraggingPC, false)
                panoramaImgDom.removeEventListener('mouseup', this.clearEventsPC, false)


            },
            DraggingPC(event){
                event.preventDefault()
                this.positionDatas.mouseEndX=event.clientX
                this.positionDatas.mouseEndY=event.clientY

                let h_move=this.positionDatas.mouseEndX-this.positionDatas.mouseStartX
                let v_move=this.positionDatas.mouseEndY-this.positionDatas.mouseStartY

                let h_isOverflow=this.positionDatas.currentPos.left-h_move<0 || 0.2*this.positionDatas.actualWidth-this.positionDatas.currentPos.left+h_move<0

                let v_isOverflow=this.positionDatas.currentPos.top-v_move<0 || 0.2*this.positionDatas.actualHeight-this.positionDatas.currentPos.top+v_move<0

                if(this.positionDatas.currentPos.left-h_move<0){
                    h_move= this.positionDatas.currentPos.left
                }
                if(0.2*this.positionDatas.actualWidth-this.positionDatas.currentPos.left+h_move<0){
                    h_move=this.positionDatas.currentPos.left-0.2*this.positionDatas.actualWidth
                }
                if(this.positionDatas.currentPos.top-v_move<0){
                    v_move=this.positionDatas.currentPos.top
                }
                if(0.2*this.positionDatas.actualHeight-this.positionDatas.currentPos.top+v_move<0){
                    v_move=this.positionDatas.currentPos.top-0.2*this.positionDatas.actualHeight
                }
                this.clip.top -= v_move
                this.clip.bottom -= v_move
                this.clip.left -= h_move
                this.clip.right -= h_move

                this.positionDatas.currentPos.left -=h_move
                this.positionDatas.currentPos.top -= v_move

                this.positionDatas.absolutePos.top += v_move
                this.positionDatas.absolutePos.left += h_move
            },
            StartDragMobile(event){
                event.preventDefault()

                this.positionDatas.mouseStartX=event.touches[0].clientX
                this.positionDatas.mouseStartY=event.touches[0].clientY

                let panoramaImgDom=event.currentTarget
                panoramaImgDom.addEventListener('touchmove',this.DraggingMobile,false)
                panoramaImgDom.addEventListener('touchend',this.clearEventsMobile,false)
            },
            clearEventsMobile(event) {
                event.preventDefault()
                event.stopPropagation()
                let panoramaImgDom=event.currentTarget
                panoramaImgDom.removeEventListener('touchmove', this.DraggingMobile, false)
                panoramaImgDom.removeEventListener('touchend', this.clearEventsMobile, false)
            },
            DraggingMobile(event){
                event.preventDefault()
                this.positionDatas.mouseEndX=event.touches[0].clientX
                this.positionDatas.mouseEndY=event.touches[0].clientY

                let h_move=this.positionDatas.mouseEndX-this.positionDatas.mouseStartX
                let v_move=this.positionDatas.mouseEndY-this.positionDatas.mouseStartY

                let h_isOverflow=this.positionDatas.currentPos.left-h_move<0 || 0.2*this.positionDatas.actualWidth-this.positionDatas.currentPos.left+h_move<0

                let v_isOverflow=this.positionDatas.currentPos.top-v_move<0 || 0.2*this.positionDatas.actualHeight-this.positionDatas.currentPos.top+v_move<0

                if(this.positionDatas.currentPos.left-h_move<0){
                    h_move= this.positionDatas.currentPos.left
                }
                if(0.2*this.positionDatas.actualWidth-this.positionDatas.currentPos.left+h_move<0){
                    h_move=this.positionDatas.currentPos.left-0.2*this.positionDatas.actualWidth
                }
                if(this.positionDatas.currentPos.top-v_move<0){
                    v_move=this.positionDatas.currentPos.top
                }
                if(0.2*this.positionDatas.actualHeight-this.positionDatas.currentPos.top+v_move<0){
                    v_move=this.positionDatas.currentPos.top-0.2*this.positionDatas.actualHeight
                }
                this.clip.top -= v_move
                this.clip.bottom -= v_move
                this.clip.left -= h_move
                this.clip.right -= h_move

                this.positionDatas.currentPos.left -=h_move
                this.positionDatas.currentPos.top -= v_move

                this.positionDatas.absolutePos.top += v_move
                this.positionDatas.absolutePos.left += h_move
            },
        },
        computed: {
          clipStyle() {
              return 'rect('+this.clip.top+'px,'+ this.clip.right+'px,'+this.clip.bottom+'px,'+this.clip.left+'px'+')'
          },
            topStyle() {
              return this.positionDatas.absolutePos.top+'px'
            },
            leftStyle() {
              return this.positionDatas.absolutePos.left+'px'
            }
        },
        mounted() {
            let wrapperHeight=window.innerHeight
            let wrapperWidth=window.innerWidth

            this.positionDatas.absolutePos.left=0
            this.positionDatas.absolutePos.top=0

            this.positionDatas.actualWidth=wrapperWidth
            this.positionDatas.actualHeight=wrapperHeight

            this.clip.top=wrapperHeight*0.1
            this.clip.right=wrapperWidth*0.9
            this.clip.bottom=wrapperHeight*0.9
            this.clip.left=wrapperWidth*0.1

            this.positionDatas.currentPos.left=this.clip.left
            this.positionDatas.currentPos.top=this.clip.top

            let _this=this
            this.bus.$on('HotPointChosenEvent',(left,top)=>{
                _this.pos=[left,top]
                console.log(_this.pos.join())
                switch (_this.pos.join()){
                    case '43.5,48.5':
                        _this.imgsrc=require('../assets/0_0.jpg')
                        break
                    default:
                        _this.imgsrc=require('../assets/5_0.jpg')
                        break
                }
            })
        }
    }
</script>