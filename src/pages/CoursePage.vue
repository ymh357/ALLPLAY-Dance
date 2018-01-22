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
                courseNo:0
            }
        },
        methods: {
            CurCourseNo(course){
                switch (course){
                    case 'Course NO.1':
                        this.courseNo=1;
                        break;
                    case 'Course NO.2':
                        this.courseNo=2;
                        break;
                    case 'Course NO.3':
                        this.courseNo=3;
                        break;
                    case 'Allplay Dance Course Overview':
                        this.courseNo=0;
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