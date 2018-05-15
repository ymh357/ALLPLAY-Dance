<template>
    <div id="panoramaWrapper" @click="eliminateCover($event)">
        <div id="tempDiv" v-bind:style="{clip:clipStyle,top:topStyle,left:leftStyle}"  @mousedown="StartDragPC($event)" @click="$event.stopPropagation()" @touchstart="StartDragMobile($event)">
            <img :src="this.imgsrc" class="pointImg">  <!--v-bind:style="{clip:clipStyle,top:topStyle,left:leftStyle}"  @mousedown="StartDragPC($event)" @click="$event.stopPropagation()" @touchstart="StartDragMobile($event)"-->
            <a v-show="this.nextpos" id="fArrow" href="#" @click="_forward($event)"><img :src="this.FArrowSrc" :style="[this.FArrowStyle,this.animationStyle]" class="arrowBtn"></a>
            <a v-show="this.previouspos" id="bArrow" href="#" @click="_backward($event)"><img :src="this.BArrowSrc" :style="[this.BArrowStyle,this.animationStyle]" class="arrowBtn"></a>
        </div>
        <div id="miniMap" :style="this.miniMapStyle">
            <img src="../assets/map.png" width="100%" height="100%">
            <a id="currentPosition" :style="{left:pos[0]+'%',top:pos[1]+'%'}"></a>
        </div>
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
    #tempDiv{
        height:100%;
        width:100%;
        position: absolute;
        left: 0;
        top:0;
        cursor: move;
    }

    .pointImg{
        height: 100%;
        width: 100%;
        position: absolute;
        /*left: 0;
        top:0;
        cursor: move;*/
    }
    .arrowBtn{
        position:absolute;
        transition: top 
    }
    #miniMap{
        position:absolute;
        height:100%;
        width:100%;
    }
    #currentPosition{
        display: inline-block;
        background: green;
        border-radius: 50%;
        height:3%;
        width:2%;

        position: absolute;
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
                nextpos:null,
                previouspos:null,
                imgsrc:null,
                FArrowSrc:null,
                FArrowStyle:null,
                animationStyle:null,
                BArrowSrc:null,
                BArrowStyle:null,
                miniMapStyle:{
                    clip:'rect(500px,700px,700px,500px)',
                    left:'700px',
                    top:'-430px'
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

            UpdatePanorama(){

                let wrapperHeight=window.innerHeight
                let wrapperWidth=window.innerWidth

                if(!this.pos){
                    return
                }
                switch (this.pos.join()){
                    case '43.5,48.5':
                        this.imgsrc=require('../assets/1_0.jpg')

                        this.nextpos=null
                        this.BArrowSrc=require('../assets/arrows/1_0 B.png')
                        this.BArrowStyle={
                            left:'11%',
                            top:'50%',
                            height:'80%',
                            width:'5%'
                        }
                        this.previouspos=[48.5,48.5]
                        break
                    case '48.5,48.5':
                        this.imgsrc=require('../assets/1_2.jpg')
                        this.FArrowSrc=require('../assets/arrows/1_2 F.png')
                        this.FArrowStyle={
                            left:'22%',
                            top:'30%',
                            height:'70%',
                            width:'5%'
                        }
                        this.nextpos=[43.5,48.5]
                        this.BArrowSrc=require('../assets/arrows/1_2 B.png')
                        this.BArrowStyle={
                            left:'20%',
                            top:'75%',
                            width:'60%',
                            height:'20%'
                        }
                        this.previouspos=[50.5,47.5]
                        break
                    case '50.5,47.5':
                        this.imgsrc=require('../assets/1_3.jpg')
                        this.FArrowSrc=require('../assets/arrows/1_3 F.png')
                        this.FArrowStyle={
                            left:'22%',
                            top:'70%',
                            width:'50%',
                            height:'20%'
                        }
                        this.nextpos=[48.5,48.5]
                        this.BArrowSrc=require('../assets/arrows/1_3 B.png')
                        this.BArrowStyle={
                            left:'60%',
                            top:'30%',
                            width:'30%',
                            height:'60%'
                        }
                        this.previouspos=[52.0.toFixed(1),47.5]
                        break
                    case '52.0,47.5':
                        this.imgsrc=require('../assets/1_5.jpg')
                        this.FArrowSrc=require('../assets/arrows/1_5 F.png')
                        this.FArrowStyle={
                            left:'50%',
                            top:'80%',
                            width:'50%',
                            height:'20%'
                        }
                        this.nextpos=[50.5,47.5]
                        this.BArrowSrc=require('../assets/arrows/1_5 B.png')
                        this.BArrowStyle={
                            left:'50%',
                            top:'60%',
                            width:'50%',
                            height:'30%'
                        }
                        this.previouspos=[53.0.toFixed(1),48.5]
                        break
                    case '53.0,48.5':
                        this.imgsrc=require('../assets/1_6.jpg')
                        this.FArrowSrc=require('../assets/arrows/1_6 F.png')
                        this.FArrowStyle={
                            left:'60%',
                            top:'50%',

                        }
                        this.nextpos=[52.0.toFixed(1),47.5]
                        this.BArrowSrc=require('../assets/arrows/1_6 B.png')
                        this.BArrowStyle={
                            left:'25%',
                            top:'50%',
                            height:'30%'
                        }
                        this.previouspos=[54.0.toFixed(1),48.5]
                        break
                    case '54.0,48.5':
                        this.imgsrc=require('../assets/1_8.jpg')
                        this.FArrowSrc=require('../assets/arrows/1_8 F.png')
                        this.FArrowStyle={
                            left:'10%',
                            top:'60%',
                            width:'35%'
                        }
                        this.nextpos=[53.0.toFixed(1),48.5]
                        this.BArrowSrc=require('../assets/arrows/1_8 B.png')
                        this.BArrowStyle={
                            left:'10%',
                            top:'50%',
                            width:'35%'
                        }
                        this.previouspos=[58.0.toFixed(1),48.5]
                        break
                    case '58.0,48.5':
                        this.imgsrc=require('../assets/2_0.jpg')
                        this.FArrowSrc=require('../assets/arrows/2_0 F.png')
                        this.FArrowStyle={
                            left:'10%',
                            top:'60%',
                            width:'55%'
                        }
                        this.nextpos=[54.0.toFixed(1),48.5]
                        this.BArrowSrc=require('../assets/arrows/2_0 B.png')
                        this.BArrowStyle={
                            left:'10%',
                            top:'50%',
                            width:'35%'
                        }
                        this.previouspos=[66.5,51.5]
                        break
                    case '66.5,51.5':
                        this.imgsrc=require('../assets/3_0.jpg')
                        this.FArrowSrc=require('../assets/arrows/3_0 F.png')
                        this.FArrowStyle={
                            left:'10%',
                            top:'75%',
                            width:'75%'
                        }
                        this.nextpos=[58.0.toFixed(1),48.5]
                        this.BArrowSrc=require('../assets/arrows/3_0 B.png')
                        this.BArrowStyle={
                            left:'10%',
                            top:'50%',
                            width:'75%'
                        }
                        this.previouspos=[70.5,61.5]
                        break
                    case '70.5,61.5':
                        this.imgsrc=require('../assets/4_0.jpg')
                        this.FArrowSrc=require('../assets/arrows/4_0 F.png')
                        this.FArrowStyle={
                            left:'10%',
                            top:'75%',
                            width:'75%'
                        }
                        this.nextpos=[66.5,51.5]
                        this.BArrowSrc=require('../assets/arrows/4_0 B.png')
                        this.BArrowStyle={
                            left:'10%',
                            top:'65%',
                            width:'75%'
                        }
                        this.previouspos=[73.5,63.5]
                        break
                    case '73.5,63.5':
                        this.imgsrc=require('../assets/4_1.jpg')
                        this.FArrowSrc=require('../assets/arrows/4_1 F.png')
                        this.FArrowStyle={
                            left:'35%',
                            top:'55%',
                            width:'40%',
                            height:'30%'
                        }
                        this.nextpos=[70.5,61.5]
                        this.BArrowSrc=require('../assets/arrows/4_1 B.png')
                        this.BArrowStyle={
                            left:'25%',
                            top:'60%',
                            width:'60%',
                            height:'30%'
                        }
                        this.previouspos=[71.0.toFixed(1),64.0.toFixed(1)]
                        break
                    case '71.0,64.0':
                        this.imgsrc=require('../assets/4_2.jpg')
                        this.FArrowSrc=require('../assets/arrows/4_2 F.png')
                        this.FArrowStyle={
                            left:'18%',
                            top:'35%',
                            height: '60%'
                        }
                        this.nextpos=[73.5,63.5]
                        this.BArrowSrc=require('../assets/arrows/4_2 B.png')
                        this.BArrowStyle={
                            left:'50%',
                            top:'35%',
                            height:'60%',
                            width: '15%'
                        }
                        this.previouspos=[72.5,66.0.toFixed(1)]
                        break
                    case '72.5,66.0':
                        this.imgsrc=require('../assets/5_0.jpg')
                        this.FArrowSrc=require('../assets/arrows/5_0 F.png')
                        this.FArrowStyle={
                            left:'15%',
                            top:'45%',
                            width:'43%'
                        }
                        this.nextpos=[71.0.toFixed(1),64.0.toFixed(1)]
                        this.BArrowSrc=require('../assets/arrows/5_0 B.png')
                        this.BArrowStyle={
                            left:'45%',
                            top:'40%',
                            width:'15%'
                        }
                        this.previouspos=[77.5,67.5]
                        break
                    case '77.5,67.5':
                        this.imgsrc=require('../assets/5_1.jpg')
                        this.FArrowSrc=require('../assets/arrows/5_1 F.png')
                        this.FArrowStyle={
                            left:'40%',
                            top:'50%',
                            width:'41%',
                            height:'40%'
                        }
                        this.nextpos=[72.5,66.0.toFixed(1)]
                        this.BArrowSrc=require('../assets/arrows/5_1 B.png')
                        this.BArrowStyle={
                            left:'25%',
                            top:'55%',
                            width:'20%'

                        }
                        this.previouspos=[76.5,73.5]
                        break
                    case '76.5,73.5':
                        this.imgsrc=require('../assets/5_2.jpg')
                        this.FArrowSrc=require('../assets/arrows/5_2 F.png')
                        this.FArrowStyle={
                            left:'60%',
                            top:'75%',
                            width:'30%'
                        }
                        this.nextpos=[77.5,67.5]
                        this.BArrowSrc=require('../assets/arrows/5_2 B.png')
                        this.BArrowStyle={
                            left:'10%',
                            top:'65%',
                            width:'30%'
                        }
                        this.previouspos=[75.5,81.5]
                        break
                    case '75.5,81.5':
                        this.imgsrc=require('../assets/6_0.jpg')
                        this.FArrowSrc=require('../assets/arrows/6_0 F.png')
                        this.FArrowStyle={
                            left:'45%',
                            top:'55%',
                            width:'10%'
                        }
                        this.nextpos=[76.5,73.5]
                        this.previouspos=null
                        break
                    /*default:
                        _this.imgsrc=require('../assets/5_0.jpg')
                        break*/
                }

                let miniMapClipLeft=this.pos[0]*0.01*wrapperWidth-100
                let miniMapClipTop=this.pos[1]*0.01*wrapperHeight-100

                this.miniMapStyle.clip='rect('+miniMapClipTop+'px,'+(miniMapClipLeft+200)+'px,'+(miniMapClipTop+200)+'px,'+miniMapClipLeft+'px)'
                this.miniMapStyle.left=0.9*wrapperWidth-200-miniMapClipLeft + 'px'
                this.miniMapStyle.top=0.1*wrapperHeight-miniMapClipTop + 'px'
            },

            _forward(event){
                this.pos=this.nextpos
                this.UpdatePanorama()
                return false;
            },
            _backward(event){
                this.pos=this.previouspos
                this.UpdatePanorama()
                return false;
            }
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
                _this.pos=[parseFloat(left).toFixed(1),parseFloat(top).toFixed(1)]
                console.log(_this.pos)
                _this.UpdatePanorama()
            })
        }
    }
</script>