<template>
        <div id="mapDiv">
            <img src="../assets/map.png" id="imgInsideMap">
            <entrance-circle :pos="this.posArray[0]" :ecolor="computedColor(0)" @click.native="setCenterPos(0)"></entrance-circle>
            <entrance-circle :pos="this.posArray[1]" :ecolor="computedColor(1)" @click.native="setCenterPos(1)"></entrance-circle>
            <entrance-circle :pos="this.posArray[2]" :ecolor="computedColor(2)" @click.native="setCenterPos(2)"></entrance-circle>
            <entrance-circle :pos="this.posArray[3]" :ecolor="computedColor(3)" @click.native="setCenterPos(3)"></entrance-circle>
            <entrance-circle :pos="this.posArray[4]" :ecolor="computedColor(4)" @click.native="setCenterPos(4)"></entrance-circle>
            <entrance-circle :pos="this.posArray[5]" :ecolor="computedColor(5)" @click.native="setCenterPos(5)"></entrance-circle>
            <entrance-circle :pos="this.posArray[6]" :ecolor="computedColor(6)" @click.native="setCenterPos(6)"></entrance-circle>
            <entrance-circle :pos="this.posArray[7]" :ecolor="computedColor(7)" @click.native="setCenterPos(7)"></entrance-circle>
            <entrance-circle :pos="this.posArray[8]" :ecolor="computedColor(8)" @click.native="setCenterPos(8)"></entrance-circle>
            <entrance-circle :pos="this.posArray[9]" :ecolor="computedColor(9)" @click.native="setCenterPos(9)"></entrance-circle>
            <entrance-circle :pos="this.posArray[10]" :ecolor="computedColor(10)" @click.native="setCenterPos(10)"></entrance-circle>
            <entrance-circle :pos="this.posArray[11]" :ecolor="computedColor(11)" @click.native="setCenterPos(11)"></entrance-circle>
            <entrance-circle :pos="this.posArray[12]" :ecolor="computedColor(12)" @click.native="setCenterPos(12)"></entrance-circle>
            <entrance-circle :pos="this.posArray[13]" :ecolor="computedColor(13)" @click.native="setCenterPos(13)"></entrance-circle>
            <entrance-circle :pos="this.posArray[14]" :ecolor="computedColor(14)" @click.native="setCenterPos(14)"></entrance-circle>
        </div>
</template>

<script>
    import EntranceCircle from './EntranceCircle.vue'

    export default {
        data (){
          return {
              posArray: [
                  [43.5.toFixed(1),48.5.toFixed(1)],
                  [48.5.toFixed(1),48.5.toFixed(1)],
                  [50.5.toFixed(1),47.5.toFixed(1)],
                  [52.0.toFixed(1),47.5.toFixed(1)],
                  [53.0.toFixed(1),48.5.toFixed(1)],
                  [54.0.toFixed(1),48.5.toFixed(1)],
                  [58.0.toFixed(1),48.5.toFixed(1)],
                  [66.5.toFixed(1),51.5.toFixed(1)],
                  [70.5.toFixed(1),61.5.toFixed(1)],
                  [73.5.toFixed(1),63.5.toFixed(1)],
                  [71.0.toFixed(1),64.0.toFixed(1)],
                  [72.5.toFixed(1),66.0.toFixed(1)],
                  [77.5.toFixed(1),67.5.toFixed(1)],
                  [76.5.toFixed(1),73.5.toFixed(1)],
                  [75.5.toFixed(1),81.5.toFixed(1)]
              ],
              newVal:null
          }
        },
        props: {
            cp:{
                type: Array,
                default:()=>{return [-1,-1]}
            },
        },
        components:{
            'entrance-circle':EntranceCircle
        },
        computed:{
          centerPos(){
              let prop=this.cp
              let newVal=this.newVal
              if(newVal==null){
                  return prop.toString()
              }else{
                  return newVal.toString()
              }
          }
        },
        methods:{
          computedColor: function(id){
              if(id==0){
                  console.log(this.centerPos)
              }
              let color='blue'
              if(this.centerPos==this.posArray[id].toString()){
                  color= 'green'
              }else if(id+1<this.posArray.length&&this.centerPos==this.posArray[id+1].toString()){
                  color='red'
              }else if(id-1>=0&&this.centerPos==this.posArray[id-1].toString()){
                  color='black'
              }
              return color
          },
            setCenterPos(id){
              this.newVal=this.posArray[id]

                let hotpointLeft=this.posArray[id][0]
                let hotpointTop=this.posArray[id][1]

                this.bus.$emit('HotPointChosenEvent',hotpointLeft,hotpointTop)
            }
        },
        mounted() {
            let _this=this
            /*this.bus.$on('HotPointChosenEvent',(left,top)=>{
                _this.centerPos=[parseFloat(left).toFixed(1),parseFloat(top).toFixed(1)]
            })*/
        }
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