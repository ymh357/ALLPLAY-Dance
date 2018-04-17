<template>
    <div id="coursePageWrapper">
        <router-view></router-view>
    </div>
</template>

<script>

    /*import Btn from '../components/BackBtn.vue'*/
    import EntranceCircle from '../components/EntranceCircle.vue'

    export default {
        data() {
            return {
                classNo:0
            }
        },
        methods: {
            CurCourseNo(_class){
                switch (_class){
                    case 'Class NO.1':
                        this.classNo=1;
                        break;
                    case 'Class NO.2':
                        this.classNo=2;
                        break;
                    case 'Class NO.3':
                        this.classNo=3;
                        break;
                    case 'Allplay Dance Class Overview':
                        this.classNo=0;
                        break;
                }
            }
        },
        components:{
            /*'back-btn':Btn,*/
            'entrance-circle':EntranceCircle
        }
    }
</script>

<style scoped="scoped">
    #coursePageWrapper{
        padding:30px;
    }
</style>