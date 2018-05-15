<template>
    <div>
        <h1>Accessibility Information</h1>
        <ul id="accessibility" class="list-unstyled">
            <li>Accessible Parking <a href="#" @click="openNewParking($event)"><span  id="parkingLink" class="glyphicon glyphicon-eye-open"></span></a></li>

            <li>Accessible main entrance <a href="#"  @click="openNewParking($event)"><span id="entranceLink" class="glyphicon glyphicon-eye-open"></span></a></li>

            <li>Accessible doors <a  href="#" @click="openNewParking($event)"><span id="doorsLink" class="glyphicon glyphicon-eye-open"></span></a></li>

            <li>Accessible restroom <a href="#"  @click="openNewParking($event)"><span id="restroomLink" class="glyphicon glyphicon-eye-open"></span></a></li>

            <li>Inside restroom <a href="#"  @click="openNewParking($event)"><span id="insideRestroomLink" class="glyphicon glyphicon-eye-open"></span></a></li>

            <li>Signage <a href="#"  @click="openNewParking($event)"><span id="signageLink" class="glyphicon glyphicon-eye-open"></span></a></li>
        </ul>
    </div>
</template>

<style>
    #accessibility>li{
        padding-top: 5%;
        padding-bottom: 5%;
    }
</style>

<script>
    import ParkingImg from '../assets/parking.jpg'
    import MainEntrance from '../assets/mainEntrance.jpg'
    import Door1_1 from '../assets/door1_1.jpg'
    import Door1_2 from '../assets/door1_2.jpg'
    import Door2_1 from '../assets/door2_1.jpg'
    import Door2_2 from '../assets/door2_2.jpg'
    import Restroom1_1 from '../assets/restroom1_1.jpg'
    import Restroom1_2 from '../assets/restroom1_2.jpg'
    import Inside1 from '../assets/inside1.jpg'
    import Inside2 from '../assets/inside2.jpg'
    import Signage from '../assets/signage.jpg'

    export default {
        methods:{
            openNewParking(event){
                var oWidth=window.innerWidth,
                    oHeight=window.innerHeight,
                    oCover=document.createElement('div'),
                    oImgDiv=document.createElement('div')
                oCover.id='cover'
                oCover.style.background='rgba(0,0,0,0.5)'
                oCover.style.position='fixed'
                oCover.style.left=0
                oCover.style.top=0
                oCover.style.height=oHeight+'px'
                oCover.style.width=oWidth+'px'
                oImgDiv.id='imgDiv'

                switch (event.target.id) {
                    case 'parkingLink':
                        var oImg=document.createElement('img')
                        oImg.src=ParkingImg
                        oImg.style.height='100%'
                        oImg.style.width='100%'
                        oImgDiv.style.width='40%'
                        oImgDiv.style.height='40%'
                        oImgDiv.appendChild(oImg)

                        oImgDiv.style.position='fixed'
                        oImgDiv.style.left='30%'
                        oImgDiv.style.top='30%'
                        break
                    case 'entranceLink':
                        var oImg=document.createElement('img')
                        oImg.src=MainEntrance
                        oImg.style.height='100%'
                        oImg.style.width='100%'
                        oImgDiv.style.width='40%'
                        oImgDiv.style.height='40%'
                        oImgDiv.appendChild(oImg)

                        oImgDiv.style.position='fixed'
                        oImgDiv.style.left='30%'
                        oImgDiv.style.top='30%'
                        break
                    case 'doorsLink':
                        var oImg1_1=document.createElement('img')
                        var oImg1_2=document.createElement('img')
                        var oImg2_1=document.createElement('img')
                        var oImg2_2=document.createElement('img')

                        oImg1_1.src=Door1_1
                        oImg1_2.src=Door1_2
                        oImg2_1.src=Door2_1
                        oImg2_2.src=Door2_2

                        oImg1_1.style.height='100%'
                        oImg1_1.style.width='20%'
                        oImg1_1.style.margin='0 2% 0 2%'

                        oImg1_2.style.height='100%'
                        oImg1_2.style.width='20%'
                        oImg1_2.style.margin='0 2% 0 2%'

                        oImg2_1.style.height='100%'
                        oImg2_1.style.width='20%'
                        oImg2_1.style.margin='0 2% 0 2%'

                        oImg2_2.style.height='100%'
                        oImg2_2.style.width='20%'
                        oImg2_2.style.margin='0 2% 0 2%'

                        oImgDiv.style.width='60%'
                        oImgDiv.style.height='60%'

                        oImgDiv.appendChild(oImg1_1)
                        oImgDiv.appendChild(oImg1_2)
                        oImgDiv.appendChild(oImg2_1)
                        oImgDiv.appendChild(oImg2_2)

                        oImgDiv.style.position='fixed'
                        oImgDiv.style.left='20%'
                        oImgDiv.style.top='20%'
                        break
                    case 'restroomLink':
                        var restroom1_1=document.createElement('img')
                        var restroom1_2=document.createElement('img')

                        restroom1_1.src=Restroom1_1
                        restroom1_2.src=Restroom1_2

                        restroom1_1.style.height='100%'
                        restroom1_1.style.width='50%'
                        restroom1_1.style.padding='5% 5% 5% 5%'


                        restroom1_2.style.height='100%'
                        restroom1_2.style.width='50%'
                        restroom1_2.style.padding='5% 5% 5% 5%'


                        oImgDiv.style.width='60%'
                        oImgDiv.style.height='60%'

                        oImgDiv.appendChild(restroom1_1)
                        oImgDiv.appendChild(restroom1_2)

                        oImgDiv.style.position='fixed'
                        oImgDiv.style.left='20%'
                        oImgDiv.style.top='20%'
                        break
                    case 'insideRestroomLink':
                        var inside1=document.createElement('img')
                        var inside2=document.createElement('img')

                        inside1.src=Inside1
                        inside2.src=Inside2

                        inside1.style.height='100%'
                        inside1.style.width='50%'
                        inside1.style.padding='5% 5% 5% 5%'


                        inside2.style.height='100%'
                        inside2.style.width='50%'
                        inside2.style.padding='5% 5% 5% 5%'


                        oImgDiv.style.width='60%'
                        oImgDiv.style.height='60%'

                        oImgDiv.appendChild(inside1)
                        oImgDiv.appendChild(inside2)

                        oImgDiv.style.position='fixed'
                        oImgDiv.style.left='20%'
                        oImgDiv.style.top='20%'
                        break
                    case 'signageLink':
                        var oImg=document.createElement('img')
                        oImg.src=Signage
                        oImg.style.height='100%'
                        oImg.style.width='100%'
                        oImgDiv.style.width='40%'
                        oImgDiv.style.height='40%'
                        oImgDiv.appendChild(oImg)

                        oImgDiv.style.position='fixed'
                        oImgDiv.style.left='30%'
                        oImgDiv.style.top='30%'
                        break
                }

                oCover.onclick=function () {
                    document.body.removeChild(oCover)
                }

                oCover.appendChild(oImgDiv)
                document.body.appendChild(oCover)

                return false
            }
        }
    }
</script>